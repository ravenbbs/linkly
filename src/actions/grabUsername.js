"use server"
import { Page } from "@/models/page"
import mongoose from "mongoose"

export default async function grabUsername (formData) {

  const username = formData.get("username")
  mongoose.connect(process.env.MONGO_URI)
  return await Page.create({uri:username})
  
}