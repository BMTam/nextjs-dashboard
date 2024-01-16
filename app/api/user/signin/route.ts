import { NextResponse } from "next/server";
import user_data_test from "@/app/lib/data_test/user.json"

/**
 * Xử lý yêu cầu đăng nhập.
 * @param {Request} request - Đối tượng Request chứa thông tin từ client.
 * @return {NextResponse} - Thông tin User hoặc lỗi đăng nhập.
 */
export async function POST(request : Request) : Promise<NextResponse> {
    const params = await request.json();
    // Thông tin đăng nhập.
    const user_name = params.user_name;
    const password = params.password;

    // Trường hợp thông tin đăng nhập khác : Blank, Null, Undefined.
    if (user_name && password) {
        // Thực hiện chứng thực.
        const user = user_data_test.find(x => user_name === x.user_name && password == x.password);
        // Trường hợp chứng thực thành công.
        if (user) {
            return NextResponse.json({
                user
            })
        }
    }
    // Trường hợp chứng thực thất bại.
    return NextResponse.json({
        message : "Thông tin đăng nhập không hợp lệ"
    },
    {
        status: 401
    });
}