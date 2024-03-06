"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";
import Tag from "@/database/tag.model";

export async function getTopInteracttedTags(
  params: GetTopInteractedTagsParams
) {
  try {
    connectToDatabase();
    const { userId } = params;
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }
    return [
      { _id: "1", name: "tag1" },
      { _id: "2", name: "tag2" },
    ]; // TODO implement this method, for now just returning dummy data
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function GetAllTags(params: GetAllTagsParams) {
  try {
    connectToDatabase();

    const tags = await Tag.find({});

    return { tags };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
