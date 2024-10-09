import { connectMongoDB } from "@/lib/database";
import Transaction from "@/lib/models/transaction";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const transactions = await Transaction.find().sort({ date: -1 }).limit(5);
    return NextResponse.json({ transactions }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error: couldn't get transactions" },
      { status: 500 }
    );
  }
}
