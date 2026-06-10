// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import { Clock, User, Calendar, ArrowLeft, ChevronRight } from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────
type Props = { params: Promise<{ slug: string }> };

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  status?: string;
  excerpt?: string;
  content?: string;
  image?: string;
  category?: string;
  author?: string;
  date?: string | number | Date;
  readTime?: string;
}

// ── Constants & Helpers ───────────────────────────────────────────────
const CAT_COLORS: Record<
  string,
  { bg: string; text: string; border: string; dot: string }
> = {
  Leadership: {
    bg: "#EEF2FF",
    text: "#4F46E5",
    border: "#C7D2FE",
    dot: "#6366F1",
  },
  "Career Growth": {
    bg: "#ECFDF5",
    text: "#059669",
    border: "#A7F3D0",
    dot: "#10B981",
  },
  Productivity: {
    bg: "#FFFBEB",
    text: "#D97706",
    border: "#FDE68A",
    dot: "#F59E0B",
  },
  Mindset: {
    bg: "#FDF2F8",
    text: "#DB2777",
    border: "#FBCFE8",
    dot: "#EC4899",
  },
  Technology: {
    bg: "#EFF6FF",
    text: "#2563EB",
    border: "#BFDBFE",
    dot: "#3B82F6",
  },
  Business: {
    bg: "#F5F3FF",
    text: "#7C3AED",
    border: "#DDD6FE",
    dot: "#8B5CF6",
  },
  Wellness: {
    bg: "#F0FDFA",
    text: "#0D9488",
    border: "#99F6E4",
    dot: "#14B8A6",
  },
  Finance: {
    bg: "#FFF7ED",
    text: "#EA580C",
    border: "#FED7AA",
    dot: "#F97316",
  },
};

function formatDate(dateValue?: string | number | Date | null) {
  if (!dateValue) return null;
  try {
    return new Date(dateValue).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return String(dateValue);
  }
}

// ── Data Fetching ─────────────────────────────────────────────────────
async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const q = query(collection(db, "blogs"), where("slug", "==", slug));
    const snap = await getDocs(q);

    if (snap.empty) return null;

    const d = snap.docs[0];
    return { id: d.id, ...d.data() } as BlogPost;
  } catch (err) {
    console.error("Error fetching blog:", err);
    return null;
  }
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) return { title: "Article Not Found" };

  return {
    title: blog.title,
    description: blog.excerpt || "Read this article on our blog.",
    openGraph: {
      title: blog.title,
      description: blog.excerpt || "",
      images: blog.image ? [{ url: blog.image }] : [],
    },
  };
}

export async function generateStaticParams() {
  try {
    const snap = await getDocs(collection(db, "blogs"));
    return snap.docs
      .filter(
        (d) => d.data().status?.toLowerCase() === "published" && d.data().slug,
      )
      .map((d) => ({ slug: d.data().slug as string }));
  } catch {
    return [];
  }
}

// ── Components ────────────────────────────────────────────────────────
function CategoryBadge({ category }: { category: string }) {
  const col = CAT_COLORS[category] ?? {
    bg: "#F8FAFC",
    text: "#475569",
    border: "#E2E8F0",
    dot: "#64748B",
  };

  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest border"
      style={{ background: col.bg, color: col.text, borderColor: col.border }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: col.dot }}
      />
      {category}
    </span>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) notFound();
  if (blog.status?.toLowerCase() !== "published") notFound();

  const formattedDate = formatDate(blog.date);
  const accentColor = blog.category
    ? (CAT_COLORS[blog.category]?.dot ?? "#2563eb")
    : "#2563eb";

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Accent Line */}
      <div
        className="fixed top-0 left-0 h-[3px] w-full z-50"
        style={{
          background: `linear-gradient(90deg, ${accentColor}, #06b6d4 60%, transparent)`,
        }}
      />

      {/* Main Container - pt-32 prevents navbar collision */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Breadcrumb */}
        <nav className="pb-8" aria-label="Breadcrumb">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft
              size={12}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            All Articles
          </Link>
        </nav>

        {/* ── HERO SECTION ── */}
        <header className="max-w-4xl mb-12">
          {blog.category && (
            <div className="mb-5">
              <CategoryBadge category={blog.category} />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-5 mb-6">
            {blog.author && (
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-black flex-shrink-0 shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}, #06b6d4)`,
                  }}
                >
                  {blog.author.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-semibold text-gray-600">
                  {blog.author}
                </span>
              </div>
            )}

            {formattedDate && (
              <span className="flex items-center gap-1.5 text-sm text-gray-400 font-medium">
                <Calendar size={14} /> {formattedDate}
              </span>
            )}

            {blog.readTime && (
              <span className="flex items-center gap-1.5 text-sm text-gray-400 font-medium">
                <Clock size={14} /> {blog.readTime}
              </span>
            )}
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6 text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            {blog.title}
          </h1>

          {blog.excerpt && (
            <div className="flex gap-4 mb-10 max-w-2xl">
              <div
                className="w-[4px] rounded-full flex-shrink-0"
                style={{
                  background: `linear-gradient(180deg, ${accentColor}, #06b6d4)`,
                }}
              />
              <p className="text-lg text-gray-500 leading-relaxed font-medium text-pretty">
                {blog.excerpt}
              </p>
            </div>
          )}
        </header>

        {/* Hero Image - Natural Size & No Cropping */}
        {blog.image && (
          <div className="mb-16 rounded-2xl overflow-hidden shadow-lg w-full bg-gray-100 flex items-center justify-center">
            <img
              src={blog.image}
              alt={blog.title}
              loading="eager"
              decoding="async"
              className="w-full h-auto max-h-[600px] object-contain"
            />
          </div>
        )}

        {/* ── BODY & SIDEBAR (Switched to CSS Grid to prevent squishing) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Article Content (Spans 8 columns) */}
          <article className="lg:col-span-8 w-full min-w-0 overflow-hidden break-words">
            {blog.content ? (
              <div
                className="
                  prose prose-lg max-w-none prose-slate
                  prose-headings:font-black prose-headings:tracking-tight prose-headings:text-gray-900
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-700 prose-p:leading-loose prose-p:mb-6
                  prose-a:font-semibold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 prose-strong:font-bold
                  prose-li:text-gray-700 prose-li:leading-relaxed
                  prose-ul:space-y-2 prose-ol:space-y-2
                  prose-blockquote:not-italic prose-blockquote:font-semibold prose-blockquote:text-gray-700
                  prose-blockquote:border-l-[4px] prose-blockquote:border-blue-500 prose-blockquote:bg-gray-50 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-xl
                  prose-img:rounded-xl prose-img:shadow-md
                  prose-hr:border-gray-200 prose-hr:my-12
                  [&>p]:mb-6 [&>p]:leading-relaxed /* Fallback just in case typography plugin fails */
                "
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            ) : (
              <p className="text-gray-400 italic text-base">
                No content available.
              </p>
            )}

            {/* Footer CTAs */}
            <div className="mt-16 pt-10 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
              <Link
                href="/blogs"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:shadow-sm transition-all font-semibold"
              >
                <ArrowLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                Browse All Articles
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}, #06b6d4)`,
                }}
              >
                Work With Us <ChevronRight size={16} />
              </Link>
            </div>
          </article>

          {/* Sidebar (Spans 4 columns) */}
          <aside className="lg:col-span-4 w-full">
            {/* Added max-h and overflow-y-auto to prevent clipping on shorter screens, while hiding the ugly scrollbar */}
            <div className="sticky top-32 flex flex-col gap-6 max-h-[calc(100vh-8rem)] overflow-y-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              {/* Author Card */}
              {blog.author && (
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-5">
                    Written by
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-base font-black flex-shrink-0 shadow-sm"
                      style={{
                        background: `linear-gradient(135deg, ${accentColor}, #06b6d4)`,
                      }}
                    >
                      {blog.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-base font-black text-gray-900 leading-tight">
                        {blog.author}
                      </p>
                      <p className="text-xs font-medium text-gray-500 mt-1">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Meta Details Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Article details
                </p>

                {formattedDate && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                      <Calendar size={16} className="text-gray-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                        Published
                      </p>
                      <p className="text-sm font-bold text-gray-800">
                        {formattedDate}
                      </p>
                    </div>
                  </div>
                )}

                {blog.readTime && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-gray-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                        Read time
                      </p>
                      <p className="text-sm font-bold text-gray-800">
                        {blog.readTime}
                      </p>
                    </div>
                  </div>
                )}

                {blog.category && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                      <User size={16} className="text-gray-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                        Category
                      </p>
                      <CategoryBadge category={blog.category} />
                    </div>
                  </div>
                )}
              </div>

              {/* Promotional CTA Card */}
              <div
                className="rounded-2xl p-6 text-white overflow-hidden relative shadow-lg flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, #1e40af, #0e7490)`,
                }}
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/70 mb-3">
                    Get started
                  </p>
                  <h3 className="text-lg font-black mb-3 leading-snug">
                    Ready to build your brand?
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-5">
                    Let&apos;s craft your narrative and grow your influence
                    together.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-xs font-black uppercase tracking-widest hover:bg-gray-50 hover:scale-[1.02] transition-all shadow-sm"
                    style={{ color: accentColor }}
                  >
                    Get in touch <ChevronRight size={14} strokeWidth={3} />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
