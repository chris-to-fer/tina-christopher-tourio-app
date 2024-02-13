import { db_places } from "../../../../lib/db_places.pjs";
import { db_comments } from "../../../../lib/db_comments";
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

    response.status(200).json(place);
  }

  // if (!id) {
  //   return;
  // }

  //const place = db_places.find((place) => place._id.$oid === id);

  const comment = place?.comments;
  const allCommentIds = comment?.map((comment) => comment.$oid) || [];
  const comments = db_comments.filter((comment) =>
    allCommentIds.includes(comment._id.$oid)
  );

  if (!place) {
    return response.status(404).json({ status: "Not found" });
  }

  response.status(200).json({ place: place, comments: comments });
}
