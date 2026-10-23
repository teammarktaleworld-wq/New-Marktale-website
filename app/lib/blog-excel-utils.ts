import * as XLSX from "xlsx";

export const ALLOWED_CATEGORIES = [
  "Leadership",
  "Career Growth",
  "Productivity",
  "Mindset",
  "Technology",
  "Business",
  "Wellness",
  "Finance",
] as const;

export type BlogCategory = (typeof ALLOWED_CATEGORIES)[number];

export interface ParsedBlogRow {
  id: string; // Temporary client-side identifier
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string; // Raw input content
  formattedContent: string; // Converted HTML content
  author: string;
  readTime: string;
  status: "Published" | "Draft";
  image: string;
  date: string;
  errors: string[];
  warnings: string[];
  isValid: boolean;
}

/**
 * Normalizes category matching against allowed categories (case-insensitive)
 */
export function normalizeCategory(cat?: string | null): string {
  if (!cat) return "";
  const trimmed = String(cat).trim();
  const match = ALLOWED_CATEGORIES.find(
    (allowed) => allowed.toLowerCase() === trimmed.toLowerCase()
  );
  return match || trimmed;
}

/**
 * Generates a clean URL slug from article title
 */
export function slugify(text: string): string {
  return String(text || "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Calculates estimated read time from text/content
 */
export function calculateReadTime(text: string): string {
  const words = String(text || "")
    .replace(/<[^>]*>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} Min Read`;
}

/**
 * Formats raw Excel text/markdown into clean, semantic HTML:
 * - Paragraphs (\n\n) -> <p>...</p>
 * - Headings (## Heading, ### Heading, H2: ..., H3: ...) -> <h2> / <h3>
 * - Bullet lists (- item, * item, • item) -> <ul><li>...</li></ul>
 * - Numbered lists (1. item, 2. item) -> <ol><li>...</li></ol>
 * - Bold (**text** or __text__) -> <strong>text</strong>
 * - Italic (*text* or _text_) -> <em>text</em>
 * - Quotes (> text) -> <blockquote>text</blockquote>
 * - Preserves existing HTML tags safely without double-wrapping
 */
export function formatContentToHtml(raw: string): string {
  if (!raw) return "";

  const text = String(raw).trim();

  // If text already has full HTML block structure (e.g. starts with <p>, <div>, <h2>), return as is
  if (/^<(p|div|section|article|h[1-6]|ul|ol)\b/i.test(text) && /<\/(p|div|section|article|h[1-6]|ul|ol)>$/i.test(text)) {
    return text;
  }

  // Normalize line endings
  const normalized = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  // Ensure headings have block boundaries so they are never merged into paragraphs
  const withHeadingsIsolated = normalized
    .replace(/(^|\n)(#{1,3}\s+[^\n]+)/g, "$1\n$2\n")
    .replace(/(^|\n)((?:h2|h3|heading\s*[23])\s*:[^\n]+)/gi, "$1\n$2\n");

  // Split into block sections by double newlines or multiple newlines
  const blocks = withHeadingsIsolated.split(/\n{2,}/);
  const htmlBlocks: string[] = [];

  for (const rawBlock of blocks) {
    const block = rawBlock.trim();
    if (!block) continue;

    // Check if block is a Heading
    // ### Heading -> <h3>
    if (/^###\s+(.+)$/m.test(block) && !block.includes("\n")) {
      const headingText = block.replace(/^###\s+/, "").trim();
      htmlBlocks.push(`<h3>${formatInline(headingText)}</h3>`);
      continue;
    }

    // ## Heading or # Heading -> <h2>
    if (/^#{1,2}\s+(.+)$/m.test(block) && !block.includes("\n")) {
      const headingText = block.replace(/^#{1,2}\s+/, "").trim();
      htmlBlocks.push(`<h2>${formatInline(headingText)}</h2>`);
      continue;
    }

    // "H2: ..." or "Heading 2: ..."
    if (/^(h2|heading\s*2)\s*:\s*(.+)$/i.test(block) && !block.includes("\n")) {
      const headingText = block.replace(/^(h2|heading\s*2)\s*:\s*/i, "").trim();
      htmlBlocks.push(`<h2>${formatInline(headingText)}</h2>`);
      continue;
    }

    // "H3: ..." or "Heading 3: ..."
    if (/^(h3|heading\s*3)\s*:\s*(.+)$/i.test(block) && !block.includes("\n")) {
      const headingText = block.replace(/^(h3|heading\s*3)\s*:\s*/i, "").trim();
      htmlBlocks.push(`<h3>${formatInline(headingText)}</h3>`);
      continue;
    }

    // Check if block is a Blockquote (starts with >)
    if (/^>\s*(.+)$/m.test(block)) {
      const quoteLines = block
        .split("\n")
        .map((l) => l.replace(/^>\s*/, ""))
        .join("<br />");
      htmlBlocks.push(`<blockquote>${formatInline(quoteLines)}</blockquote>`);
      continue;
    }

    // Check if lines are Bullet list items (- , * , • , + , – )
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    const isBulletList = lines.every((l) => /^[-*•+–]\s+/.test(l));

    if (isBulletList && lines.length > 0) {
      const listItems = lines
        .map((l) => `<li>${formatInline(l.replace(/^[-*•+–]\s+/, ""))}</li>`)
        .join("");
      htmlBlocks.push(`<ul>${listItems}</ul>`);
      continue;
    }

    // Check if lines are Numbered list items (1. , 2. , 1) , 2) )
    const isNumberedList = lines.every((l) => /^\d+[\.\)]\s+/.test(l));

    if (isNumberedList && lines.length > 0) {
      const listItems = lines
        .map((l) => `<li>${formatInline(l.replace(/^\d+[\.\)]\s+/, ""))}</li>`)
        .join("");
      htmlBlocks.push(`<ol>${listItems}</ol>`);
      continue;
    }

    // Mixed lines within a block:
    // If some lines inside block are bullets or subheadings, handle line-by-line
    if (lines.some((l) => /^[-*•+–]\s+/.test(l))) {
      let inList = false;
      const currentList: string[] = [];
      const segmentHtml: string[] = [];

      for (const line of lines) {
        if (/^[-*•+–]\s+/.test(line)) {
          inList = true;
          currentList.push(`<li>${formatInline(line.replace(/^[-*•+–]\s+/, ""))}</li>`);
        } else {
          if (inList) {
            segmentHtml.push(`<ul>${currentList.join("")}</ul>`);
            currentList.length = 0;
            inList = false;
          }
          if (line.trim()) {
            segmentHtml.push(`<p>${formatInline(line)}</p>`);
          }
        }
      }
      if (inList && currentList.length > 0) {
        segmentHtml.push(`<ul>${currentList.join("")}</ul>`);
      }
      htmlBlocks.push(segmentHtml.join(""));
      continue;
    }

    // Normal paragraph with line breaks
    const paragraphContent = lines.map((l) => formatInline(l)).join("<br />");
    htmlBlocks.push(`<p>${paragraphContent}</p>`);
  }

  return htmlBlocks.join("\n\n");
}

/**
 * Handles inline formatting: bold (**), italic (*), and links ([text](url))
 */
function formatInline(text: string): string {
  if (!text) return "";

  let res = text
    // Markdown Bold: **text** or __text__
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/__(.*?)__/g, "<strong>$1</strong>")
    // Markdown Italic: *text* or _text_
    .replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, "<em>$1</em>")
    .replace(/(?<!_)_(?!_)(.*?)(?<!_)_(?!_)/g, "<em>$1</em>")
    // Markdown Links: [text](url)
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );

  return res;
}

/**
 * Helper to extract field from a row using fuzzy column naming
 */
function getCell(row: Record<string, any>, candidateKeys: string[]): string {
  const keys = Object.keys(row);
  for (const candidate of candidateKeys) {
    const cleanCand = candidate.toLowerCase().replace(/[^a-z0-9]/g, "");
    for (const key of keys) {
      const cleanKey = key.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (cleanKey === cleanCand) {
        const val = row[key];
        return val !== undefined && val !== null ? String(val).trim() : "";
      }
    }
  }
  return "";
}

/**
 * Parses an Excel (.xlsx, .xls) or .csv file and validates every row
 */
export async function parseExcelBlogs(
  file: File | Blob | ArrayBuffer | any
): Promise<ParsedBlogRow[]> {
  let workbook: XLSX.WorkBook;
  if (typeof Buffer !== "undefined" && Buffer.isBuffer(file)) {
    workbook = XLSX.read(file, { type: "buffer" });
  } else if (file instanceof ArrayBuffer) {
    workbook = XLSX.read(file, { type: "array" });
  } else if (typeof (file as any).arrayBuffer === "function") {
    const buffer = await (file as any).arrayBuffer();
    workbook = XLSX.read(buffer, { type: "array" });
  } else {
    const buffer = await new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as ArrayBuffer);
      reader.onerror = reject;
      reader.readAsArrayBuffer(file as Blob);
    });
    workbook = XLSX.read(buffer, { type: "array" });
  }

  const firstSheetName = workbook.SheetNames[0];
  if (!firstSheetName) {
    throw new Error("The uploaded Excel workbook contains no sheets.");
  }

  const worksheet = workbook.Sheets[firstSheetName];
  const rawRows: Record<string, any>[] = XLSX.utils.sheet_to_json(worksheet, {
    defval: "",
    raw: false,
  });

  if (!rawRows || rawRows.length === 0) {
    throw new Error("No data rows found in the first sheet of the Excel file.");
  }

  const results: ParsedBlogRow[] = [];

  for (let idx = 0; idx < rawRows.length; idx++) {
    const row = rawRows[idx];

    // Extract values with flexible column names
    const title = getCell(row, ["title", "headline", "articletitle", "blogtitle", "name"]);
    const rawCategory = getCell(row, ["category", "topic", "tag", "genre"]);
    const rawContent = getCell(row, ["content", "body", "article", "fullcontent", "text"]);
    const rawExcerpt = getCell(row, ["excerpt", "summary", "brief", "description"]);
    const author = getCell(row, ["author", "authorname", "writer", "by"]);
    const rawStatus = getCell(row, ["status", "poststatus", "state"]);
    const image = getCell(row, ["image", "featuredimage", "imageurl", "coverimage", "thumbnail"]);
    const rawReadTime = getCell(row, ["readtime", "readingtime", "time"]);
    const rawDate = getCell(row, ["date", "publishdate", "publisheddate"]);

    // Skip completely empty rows
    if (!title && !rawContent && !rawCategory) continue;

    const errors: string[] = [];
    const warnings: string[] = [];

    // Validation
    if (!title) {
      errors.push("Title is required");
    }

    const category = normalizeCategory(rawCategory);
    if (!category) {
      warnings.push("Category missing or unsupported");
    } else if (!ALLOWED_CATEGORIES.includes(category as BlogCategory)) {
      warnings.push(`Unsupported category "${category}"`);
    }

    if (!rawContent) {
      errors.push("Content is required");
    }

    if (!author) {
      warnings.push("Author not specified");
    }

    // Excerpt fallback: use first sentence or first 160 characters of content
    let excerpt = rawExcerpt;
    if (!excerpt && rawContent) {
      const cleanText = rawContent.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
      excerpt = cleanText.length > 160 ? `${cleanText.slice(0, 157)}...` : cleanText;
    }

    // Format content to semantic HTML
    const formattedContent = formatContentToHtml(rawContent);

    // Status: defaults to Published if not explicitly set to Draft
    const status: "Published" | "Draft" =
      rawStatus.toLowerCase() === "draft" ? "Draft" : "Published";

    // Read time: use provided or auto-calculate
    const readTime = rawReadTime || calculateReadTime(rawContent);

    // Date: defaults to formatted current date
    const date =
      rawDate ||
      new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

    const slug = slugify(title);

    results.push({
      id: `row-${idx + 1}-${Date.now()}`,
      title,
      slug,
      category,
      excerpt,
      content: rawContent,
      formattedContent,
      author,
      readTime,
      status,
      image,
      date,
      errors,
      warnings,
      isValid: errors.length === 0,
    });
  }

  return results;
}

/**
 * Downloads a ready-to-use sample Excel Template (.xlsx)
 * Can generate either a blank template ready to fill, or a template with pre-filled examples.
 */
export function downloadExcelTemplate(options: { empty?: boolean } = { empty: false }): void {
  const isBlank = options?.empty === true;

  let worksheet: XLSX.WorkSheet;

  if (isBlank) {
    // Empty template with header row and ready for user input
    const headers = [
      ["Title", "Category", "Author", "Status", "Featured Image", "Excerpt", "Content", "Date"]
    ];
    worksheet = XLSX.utils.aoa_to_sheet(headers);
  } else {
    const sampleData = [
      {
        Title: "Scaling Brands Across India & Dubai: A Modern Playbook",
        Category: "Business",
        Author: "Aarav Sharma",
        Status: "Published",
        "Featured Image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
        Excerpt: "Discover key marketing strategies for cross-border expansion between South Asia and the GCC region.",
        Content: `## Introduction
Entering emerging and international markets requires agile branding, local cultural nuance, and high-velocity digital execution.

### Key Expansion Pillars
Here are the fundamental pillars for modern agency growth:
- Deep local market customer research
- Performance marketing optimized for regional channels
- Localized storytelling and native language influencers

### Strategic Takeaway
Success in Dubai and India hinges on operational agility. As brands evolve, consistency across all omnichannel touchpoints builds long-term customer trust.`,
        Date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      },
      {
        Title: "The Future of AI in B2B Marketing: 2026 and Beyond",
        Category: "Technology",
        Author: "Priya Nair",
        Status: "Draft",
        "Featured Image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
        Excerpt: "How generative workflows, autonomous agents, and predictive insights are transforming client acquisition.",
        Content: `Artificial intelligence is no longer an experimental add-on—it is the operational backbone of modern B2B marketing agencies.

## Why Speed Wins in 2026
Agencies that harness predictive intelligence achieve:
1. 3x faster content iteration cycles
2. Hyper-personalized account-based marketing at scale
3. Real-time campaign sentiment analysis

> "The true advantage belongs to teams that blend human creative intuition with machine precision."

Keep testing new autonomous systems to stay ahead of the curve.`,
        Date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      },
    ];

    worksheet = XLSX.utils.json_to_sheet(sampleData);
  }

  // Set column widths for comfortable editing
  worksheet["!cols"] = [
    { wch: 45 }, // Title
    { wch: 18 }, // Category
    { wch: 18 }, // Author
    { wch: 12 }, // Status
    { wch: 35 }, // Featured Image
    { wch: 45 }, // Excerpt
    { wch: 65 }, // Content
    { wch: 18 }, // Date
  ];

  const workbook = XLSX.utils.book_new();
  const sheetName = isBlank ? "Blogs (Fill Here)" : "Blogs (Sample Examples)";
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  // Create instructions sheet
  const instructions = [
    ["MarkTale Blog Bulk Import - Excel Template Guide"],
    [""],
    ["Field", "Required?", "Accepted Values / Format", "Description"],
    ["Title", "Yes", "Text", "The headline of your article. Auto-generates the URL slug."],
    ["Category", "Recommended", "Leadership, Career Growth, Productivity, Mindset, Technology, Business, Wellness, Finance", "Must match one of the 8 allowed categories."],
    ["Author", "Optional", "Text", "Author name. If left blank, can be filled in the import modal before submitting."],
    ["Status", "Optional", "Published or Draft", "Defaults to Published if empty."],
    ["Featured Image", "Optional", "https://... URL or local image upload", "Direct link to image (Unsplash, Cloudinary, etc.) or upload directly in the review screen."],
    ["Excerpt", "Optional", "Text", "Short summary for preview cards. If left blank, auto-generated from content."],
    ["Content", "Yes", "Text with markdown/paragraphs", "Full article. Supports ## Headings, **bold**, - bullet points, 1. numbered lists, and blank lines for paragraphs."],
    ["Date", "Optional", "e.g. October 24, 2026", "Publication date. Defaults to current date if left blank."],
  ];

  const instructionsSheet = XLSX.utils.aoa_to_sheet(instructions);
  instructionsSheet["!cols"] = [{ wch: 20 }, { wch: 15 }, { wch: 40 }, { wch: 60 }];
  XLSX.utils.book_append_sheet(workbook, instructionsSheet, "Instructions & Categories");

  const fileName = isBlank ? "MarkTale_Blog_Sample_Template.xlsx" : "MarkTale_Blog_Sample_With_Examples.xlsx";
  XLSX.writeFile(workbook, fileName);
}

export const downloadBlankExcelTemplate = () => downloadExcelTemplate({ empty: true });
export const downloadSampleExcelTemplate = () => downloadExcelTemplate({ empty: false });
