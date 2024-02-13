import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema({
  name: { type: String },
  comment: { type: String },
});
export const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
