import { NextRequest, NextResponse } from "next/server";
import { db, app, storage } from "../../firebaseConfig";

import { collection, addDoc, getDocs } from "firebase/firestore";

//get user
export async function GET(req) {
  try {
    const querySnapshot = await getDocs(
      collection(db, "restaurants")
    );
    let data = [];

    querySnapshot.forEach(doc => {
      data.push({
        restaurantId: doc.id,
        restaurantData: doc.data(),
      });
    });
    return NextResponse.json({
      msg: "Successfully got the data of restaurants ",
      status: 200,
      restaurantList: data,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 404 });
  }
}

//create user
export async function POST(req) {
  const payload = await req.json();
  //console.log(payload);
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
