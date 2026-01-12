import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "CV.pdf");

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "CV file not found" },
        { status: 404 }
      );
    }

    // Read the file
    const fileBuffer = fs.readFileSync(filePath);

    // Return the file with proper headers
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Suhail_Ahmed_CV.pdf"',
      },
    });
  } catch (error) {
    console.error("PDF download error:", error);
    return NextResponse.json(
      { error: "Failed to download PDF" },
      { status: 500 }
    );
  }
}
