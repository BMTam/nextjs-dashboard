import { NextResponse } from "next/server";
import vehicle_data_test from "@/app/lib/data_test/vehicle.json"

/**
 * Lấy toàn bộ thông tin xe.
 * @return {NextResponse} - Toàn bộ thông tin xe.
 */
export async function GET() : Promise<NextResponse> {
    return NextResponse.json({
        "vehicle" : vehicle_data_test
    });
}