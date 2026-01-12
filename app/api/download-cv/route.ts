import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import React from "react";
import CVDocument from "@/components/CVDocument";

export async function GET() {
  try {
    const stream = await renderToStream(React.createElement(CVDocument));

    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set("Content-Disposition", 'attachment; filename="Suhail_Ahmed_Aamro_CV.pdf"');

    return new NextResponse(stream as any, {
      headers,
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
