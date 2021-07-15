import { assertEquals } from "../dev_deps.ts";
import { createSession } from "./Session.ts";

Deno.test("should be able to deal in a session", () => {
  const sessionM = createSession(1, [
    {
      id: 1,
      description: "story 1",
      points: [],
    },
    {
      id: 2,
      description: "story 2",
      points: [],
    },
  ]);

  const session = sessionM.getSession();
  const storyOnBoard = session.deal();
  assertEquals(session.storyOnBoard, storyOnBoard);
  assertEquals(session.deck.length, 1);
});
