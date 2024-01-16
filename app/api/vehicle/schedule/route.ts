import { NextResponse } from "next/server";
import vehicle_schedule_data_test from "@/app/lib/data_test/vehicle_schedule.json"

/**
 * Lấy toàn bộ thông tin lịch xe.
 * @return {NextResponse} - Toàn bộ thông tin lịch xe.
 */
export async function GET() : Promise<NextResponse> {
    return NextResponse.json({
        "vehicle_schedule" : vehicle_schedule_data_test
    });
}