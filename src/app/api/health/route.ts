import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok", service: "atlas-core", timestamp: new Date().toISOString() });
}
