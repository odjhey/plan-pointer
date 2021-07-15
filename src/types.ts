type None = undefined;

type Point = 1 | 2 | 3 | 5 | 8 | 13;
type Points = Point[];

type Story = Readonly<{ id: number; description: string; points: Points }>;
type Deck = Story[];

// Note, make all inputs read-only
type Deal = (
  deck: Readonly<Deck>,
) => { story: Story; deck: Deck };

type Vote = (story: Readonly<Story>, point: Readonly<Point>) => Story;

export type { Deal, Deck, Point, Points, Story, Vote };

type Participant = { id: number; vote: Vote };
type Participants = Participant[];
type Session = {
  id: number;
  deck: Deck;
  graveyard: Deck;
  participants: Participants;
  storyOnBoard: Story | None;
  deal: Function;
};

export type { Session };
