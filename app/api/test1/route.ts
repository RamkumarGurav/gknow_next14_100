import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";
import errorHandler from "../_utils/errorHandler";

const sendData = async () => {
  throw new ApiError(401, "Forbidden");
};

export async function GET(req: NextRequest, res: NextResponse) {
  console.log(process.env.RECAPTCHA_SECRET_KEY2);
  try {
    // Example error handling

    // await sendData();
    // throw new Error("generated error");

    return NextResponse.json(
      {
        status: true,
        statusCode: 200,
        message: "Welcome to our api",
      },
      {
        status: 200, // Explicitly set the status code to 200
      }
    );
  } catch (err) {
    return errorHandler(err, req, res);
  }
}
