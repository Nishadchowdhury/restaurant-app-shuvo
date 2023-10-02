import { NextRequest, NextResponse } from "next/server";
import { db, storage, app } from "../../firebaseConfig";
import { headers } from "next/headers";
import { getDoc, doc } from "firebase/firestore";

//get user
export async function GET() {
  const headersList = headers();
  const foodId = headersList.get("foodId");

  try {
    const docRef = doc(db, "cuisines", foodId);

    const querySnapshot = await getDoc(docRef);
    let data = querySnapshot.data();

    return NextResponse.json({
      status: 200,
      food: data,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 404 });
  }
}

//create user
export async function POST(req) {
  const payload = await req.json();

  try {
    // const docRef = await addDoc(collection(db, "users"), {
    //   first: "Alan fv",
    //   middle: "Mathison",
    //   last: "Turing",
    //   born: 1912,
    // });

    return NextResponse.json({
      message: "user created name:- Alan",
      data: req,
    });
  } catch (error) {
    return new Response("An error hua tha");
  }
}
