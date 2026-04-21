  import { NextRequest, NextResponse } from "next/server";
  import bcrypt from "bcrypt";
  import {generateBasicToken, comparePassword} from "@/lib/auth"

  export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    const ENV_EMAIL = process.env.TEST_EMAIL;
    const ENV_HASH = process.env.TEST_PASSWORD_HASH;
    function validatePassword(password: string) {
      if (password.length < 6) {
        return "Password must be at least 6 characters";
      }
      // if (!/[A-Z]/.test(password)) {
      //   return "Must include at least one uppercase letter";
      // }
      // if (!/[0-9]/.test(password)) {
      //   return "Must include at least one number";
      // }
      return null;
    }

    if (!email || !password) {
      return NextResponse.json(
        { message: "Missing email or password" },
        { status: 400 }
      );
    }

    if (email !== ENV_EMAIL) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }
    const passwordError = validatePassword(password);

  if (passwordError) {
    return NextResponse.json(
      { message: passwordError },
      { status: 400 }
    );
  }
    const isValid = await comparePassword(password, ENV_HASH!);

    if (!isValid) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }

    const token = generateBasicToken(email)

    return NextResponse.json({
      message: "Login successful",
      status: 200,
      token,
    });
  }