import { NextRequest, NextResponse } from "next/server";
import { POST as contactPOST } from "../contact/route";

export async function POST(request: NextRequest) {
  return contactPOST(request);
}
