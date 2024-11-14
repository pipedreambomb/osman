type BasicContestantDetails = {
    colour: string;
    name: string;
}

type Contestant = BasicContestantDetails & {
    score: number;
    attempts: number;
};

function createContestant(bcd: BasicContestantDetails): Contestant { return { name: bcd.name, colour: bcd.colour, score: 0, attempts: 0 } }

export { createContestant };
export type { Contestant };
