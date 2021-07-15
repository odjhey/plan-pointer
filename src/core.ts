import { Deal, Vote } from "./types.ts";

const deal: Deal = (deck) => {
  const copy = [...deck];
  const [story] = copy.splice(0, 1);
  return { story, deck: copy };
};
const vote: Vote = (story, point) => {
  return { ...story, points: [...story.points, point] };
};

export { deal, vote };
