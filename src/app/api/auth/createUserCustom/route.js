import { NextResponse } from "next/server";

export async function POST(req) {
  const userData = req.json();
  //console.log(userData);

  try {
    return NextResponse.json({ message: "user created!" });
  } catch (error) {
    return NextResponse.json({ message: "An error happened!" });
  }
}
