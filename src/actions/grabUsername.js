"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export default async function grabUsername(formData) {
  const username = formData.get("username");
  await mongoose.connect(process.env.MONGODB_URI);

  const existingPageDoc = await Page.findOne({ uri: username });
  if (existingPageDoc) {
    return { success: false };
  } else {
    const session = await getServerSession(authOptions);
    const newPage = await Page.create({
      uri: username,
      owner: session?.user?.email,
    });

    // Solo retornamos las propiedades necesarias
    return {
      success: true,
      page: {
        id: newPage._id.toString(),
        uri: newPage.uri,
      },
    };
  }
}