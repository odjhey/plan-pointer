import { assertEquals } from "../dev_deps.ts";
import { deal, vote } from "./core.ts";

Deno.test("should increase points when voted", () => {
  const givenStory = {
    id: 1,
    description: "story 1",
    points: [],
  };

  const actualStory = vote(givenStory, 2);
  const expectedStory = {
    id: 1,
    description: "story 1",
    points: [2],
  };
  assertEquals(expectedStory, actualStory);

  const actualStory2 = vote(actualStory, 13);
  const expectedStory2 = {
    id: 1,
    description: "story 1",
    points: [2, 13],
  };
  assertEquals(expectedStory2, actualStory2);
});

Deno.test("should be able to deal and reduce deck after", () => {
  const givenDeck = Object.freeze([{
    id: 1,
    description: "story1",
    points: [],
  }, {
    id: 2,
    description: "story2",
    points: [],
  }]);

  const { deck, story } = deal(givenDeck);
  assertEquals(story, { id: 1, description: "story1", points: [] });
  assertEquals(deck.length, 1);
});
