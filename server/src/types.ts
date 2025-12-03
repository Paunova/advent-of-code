export type SolutionParams = {
  part: number;
  input: string;
};

export type GetSolutionParams = {
  year: number;
  day: number;
} & SolutionParams;
