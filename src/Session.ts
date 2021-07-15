import { Deck, Session } from "./types.ts";
import { deal } from "./core.ts";

const createSession: (id: number, deck: Deck) => { getSession: () => Session } =
  (
    id,
    deck,
  ) => {
    const state: Session = {
      id,
      deal: sessionDeal,
      deck,
      storyOnBoard: undefined,
      graveyard: [],
      participants: [],
    };

    function sessionDeal() {
      const { deck, story } = deal(state.deck);
      state.deck = deck;
      state.storyOnBoard = story;
      return story;
    }

    return {
      getSession: () => state,
    };
  };

export { createSession };
