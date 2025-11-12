const MOVE = {
  UP: "(",
  DOWN: ")",
} as const;

const BASEMENT = -1;
const DIRECTIONS = Object.values(MOVE) as readonly string[];

type Direction = (typeof MOVE)[keyof typeof MOVE];

const moveUp = (floor: number) => floor + 1;
const moveDown = (floor: number) => floor - 1;
const isBasement = (floor: number) => floor === BASEMENT;
const isDirection = (d: string): d is Direction => DIRECTIONS.includes(d);

const updatePosition = (position: number) => position + 1;

export class Building {
  currentFloor: number;
  currentPosition: number;
  isBasementReached: boolean;
  basementPosition: number | null; // position when the basement was first reached

  constructor(
    currentFloor = 0,
    currentPosition = 0,
    isBasementReached = false,
    basementPosition: number | null = null
  ) {
    this.currentFloor = currentFloor;
    this.currentPosition = currentPosition;
    this.isBasementReached = isBasementReached;
    this.basementPosition = basementPosition;
  }

  move(direction: Direction): void {
    this.currentPosition = updatePosition(this.currentPosition);
    this.currentFloor =
      direction === MOVE.UP
        ? moveUp(this.currentFloor)
        : moveDown(this.currentFloor);
    if (isBasement(this.currentFloor) && !this.isBasementReached) {
      this.isBasementReached = true;
      this.basementPosition = this.currentPosition;
    }
  }

  followDirections(directions: string): void {
    for (const d of directions) {
      if (isDirection(d)) this.move(d);
    }
  }

  getCurrentFloor() {
    return this.currentFloor;
  }

  getBasementPosition() {
    return this.basementPosition;
  }

  logCurrentFloor() {
    console.log(`Current floor is ${this.currentFloor}`);
  }

  logBasementPosition() {
    this.basementPosition == null
      ? console.log(`Basement was never reached`)
      : console.log(`First basement reached at ${this.basementPosition}`);
  }
}
