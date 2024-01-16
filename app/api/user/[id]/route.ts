import { NextResponse } from "next/server";
import user_data_test from "@/app/lib/data_test/user.json"

/**
 * Lấy thông tin User theo Id.
 * @param {any} context - Chứa "id" request của User.
 * @return {NextResponse} - Thông tin User hoặc lỗi đăng nhập.
 */
export async function GET(request: Request, context: any) : Promise<NextResponse> {
    const { params } = context;

    const user = user_data_test.find(x => params.id === x.id.toString());

    if (user) {
        return NextResponse.json({
            user
        });
    }
    return NextResponse.json({
        message : "Không tìm thấy thông tin người dùng với ID " + params.id
    },
    {
        status: 404
    });
}