// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPaginatedPost } from "lib/api";

export default async function handler(req, res) {
  const page = parseInt(req.query.page, 10);
  const limit = parseInt(req.query.limit, 10);
  console.log("page", page);
  console.log("req.query", req.query);
  console.log("limit", limit);
  const posts = await getPaginatedPost(page, limit);
  res.status(200).json(posts);
}
