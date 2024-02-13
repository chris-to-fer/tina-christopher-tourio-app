import mongoose from "mongoose";
import { Comment } from "./Comment";

const { Schema } = mongoose;

const placeSchema = new Schema({
  name: { type: String },
  location: { type: String },
  image: { type: String },
  mapURL: { type: String },
  description: { type: String },
  comments: { type: [Schema.Types.ObjectID], ref: "Comment" },
});
export const Place =
  mongoose.models.Place || mongoose.model("Place", placeSchema, "places");
