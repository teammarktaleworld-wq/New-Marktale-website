import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();

    const base64 = Buffer.from(bytes).toString("base64");

    const result = await cloudinary.uploader.upload(
      `data:${file.type};base64,${base64}`,
      {
        folder: "ascentoabacus/blogs",
      },
    );

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
    });
  } catch (error: any) {
    console.error("Cloudinary Upload Error:", error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
