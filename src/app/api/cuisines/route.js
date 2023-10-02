import { NextRequest, NextResponse } from "next/server";
import { db, storage, app } from "../../firebaseConfig";

import { collection, addDoc, getDocs } from "firebase/firestore";

//get user
export async function GET(req) {
  try {
    const querySnapshot = await getDocs(collection(db, "cuisines"));
    let data = [];

    querySnapshot.forEach(doc => {
      data.push({
        cuisineId: doc.id,
        cuisineData: doc.data(),
      });
    });
    return NextResponse.json({
      status: 200,
      cuisineList: data,
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
