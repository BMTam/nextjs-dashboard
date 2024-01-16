import { NextResponse } from "next/server";
import user_data_test from "@/app/lib/data_test/user.json"

/**
 * Lấy toàn bộ thông tin user.
 * @return {NextResponse} - Toàn bộ thông tin user.
 */
export async function GET() : Promise<NextResponse> {
    return NextResponse.json({
        "user" : user_data_test
    });
}