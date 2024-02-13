import connectDB from "../../../db/connect";
import { Place } from "../../../db/models/Place";

export default async function handler(request, response) {
  await connectDB();
  const { id } = request.query;

  if (request.method === "GET") {
    const places = await Place.find();
    return response.status(200).json(places);
  }

  if (request.method === "POST") {
    try {
      const placeData = request.body;
      await Place.create(placeData);

      response.status(201).json({ status: "Place created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "DELETE") {
    await Place.findByIdAndDelete(id);
    response.status(200).json({ status: `Place ${id} successfully deleted.` });
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
