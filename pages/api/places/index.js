import connectDB from "../../../db/connect";
import { Place } from "../../../db/models/Place";
import { db_places } from "../../../lib/db_places.pjs";

export default async function handler(request, response) {
  await connectDB();

  if (request.method === "GET") {
    const places = await Place.find();
    return response.status(200).json(places);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
