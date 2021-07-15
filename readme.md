story: string
deck: story list

point: 1 2 3 5 8

participant: name: string, hand: hand
session: deck:deck; participants:participant list;

deal : (deck) -> deck, story
