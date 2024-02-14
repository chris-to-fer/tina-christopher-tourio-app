import { Place } from "../../../../db/models/Place";
import { Comment } from "../../../../db/models/Comment";
import connectDB from "../../../../db/connect";

export default async function handler(request, response) {
  await connectDB();
  const { id } = request.query;

  // console.log("queryID_______", id);

  if (request.method === "GET") {
    const place = await Place.findById(id).populate("comments");

    if (!place) {
      return response.status(404).json({ status: "Not found" });
    }

    const comment = place?.comments;
    const allCommentIds = comment?.map((comment) => comment.$oid) || [];
    // const comments = db_comments.filter((comment) =>
    //   allCommentIds.includes(comment._id.$oid)
    // );

    response.status(200).json({ place: place /*, comments: comments */ });
  }

  if (request.method === "PATCH") {
    const alteredPlace = request.body;
    console.log("body _____", alteredPlace);
    const newPlace = await Place.findByIdAndUpdate(id, {
      $set: alteredPlace,
    });

    response.status(200).json({ status: `Place ${id} updated!` });
  }

  if (request.method === "POST") {
    const commentData = request.body;
    const newComment = await Comment.create(commentData);

    response.status(201).json({ status: "Comment posted" });
    console.log("comment data:", commentData);
    console.log("new comment :", newComment);
  }

  if (request.method === "DELETE") {
    await Place.findByIdAndDelete(id);
    response.status(200).json({ status: `Place ${id} successfully deleted.` });
  }
}
