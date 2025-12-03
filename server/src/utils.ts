import type { GetSolutionParams } from "./types.js";

export const getSolution = async ({
  year,
  day,
  input,
  part,
}: GetSolutionParams) => {
  try {
    const module = await import(`./${year}/${day}.js`);

    if (typeof module.getSolution !== "function") {
      throw new Error(`getSolution is not found in module ./${year}/${day}.js`);
    }

    const solution = await module.getSolution({ input, part });

    return solution;
  } catch (error) {
    console.error(`[getSolution]`, error);

    throw error;
  }
};
