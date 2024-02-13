import { Place } from "../../../../db/models/Place";
import connectDB from "../../../../db/connect";

export default async function handler(request, response) {
  await connectDB();
  const { id } = request.query;
  console.log("id----------", id);

  if (request.method === "GET") {
    const place = await Place.findById(id);
    if (!place) {
      return response.status(404).json({ status: "Not found" });
    }

    // response.status(200).json(place);
    const comment = place?.comments;
    const allCommentIds = comment?.map((comment) => comment.$oid) || [];
    const comments = db_comments.filter((comment) =>
      allCommentIds.includes(comment._id.$oid)
    );

    response.status(200).json({ place: place, comments: comments });
  }

  if (request.method === "PATCH") {
    const alteredPlace = request.body;
    const newPlace = await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });

    response.status(200).json({ status: `Place ${id} updated!` });
  }
}
