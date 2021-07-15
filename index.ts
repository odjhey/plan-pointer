import { Node, ServerRequest } from "./deps.ts";

const root = new Node();
root.add("/session/:sessionId/stories", (p: any) => {
  return p.get("sessionId");
});

export default (req: ServerRequest) => {
  // catch all
  req.respond({
    status: 404,
    headers: new Headers({
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${3600}`,
    }),
  });
};
