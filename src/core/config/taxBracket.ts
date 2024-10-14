import { FilingStatus } from '@typings/model/family';

const taxRates = {
  [FilingStatus.Jointly]: [
    { min: 0, max: 20550, rate: 0.1 },
    { min: 20551, max: 83550, rate: 0.12 },
    { min: 83551, max: 178150, rate: 0.22 },
    { min: 178151, max: 340100, rate: 0.24 },
    { min: 340101, max: 431900, rate: 0.32 },
    { min: 431901, max: 647850, rate: 0.35 },
    { min: 647851, max: Infinity, rate: 0.37 },
  ],
  [FilingStatus.Head]: [
    { min: 0, max: 14650, rate: 0.1 },
    { min: 14651, max: 55900, rate: 0.12 },
    { min: 55901, max: 89050, rate: 0.22 },
    { min: 89051, max: 170050, rate: 0.24 },
    { min: 170051, max: 215950, rate: 0.32 },
    { min: 215951, max: 539900, rate: 0.35 },
    { min: 539901, max: Infinity, rate: 0.37 },
  ],
  [FilingStatus.Separately]: [
    { min: 0, max: 10275, rate: 0.1 },
    { min: 10276, max: 41775, rate: 0.12 },
    { min: 41776, max: 89075, rate: 0.22 },
    { min: 89076, max: 170050, rate: 0.24 },
    { min: 170051, max: 215950, rate: 0.32 },
    { min: 215951, max: 323925, rate: 0.35 },
    { min: 323926, max: Infinity, rate: 0.37 },
  ],
};

export function getTaxRate(filingStatus: FilingStatus, income: number) {
  const brackets = taxRates[filingStatus];
  for (const bracket of brackets) {
    if (income >= bracket.min && income <= bracket.max) {
      return bracket.rate;
    }
  }
  return 0; // Default rate if income doesn't fall into any bracket
}
