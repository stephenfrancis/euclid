
import GenerationConstraint from "./GenerationConstraint";
import IsNotAt from "./IsNotAt";


export default class Point {
  private name: string;
  private generation_constraints: Array<GenerationConstraint>;


  public static createSomePoint(name: string) {
      return new Point(name);
  }


  constructor(name: string) {
      this.name = name;
      this.generation_constraints = [];
  }


  public toString(): string {
    return this.name;
  }


  public addGenerationConstraint(generation_constraint: GenerationConstraint) {
    this.generation_constraints.push(generation_constraint);
  }


  public isCongruent(other_point: Point): boolean {
    return true; // points are all congruent!
  }


  public createPointSomewhereElse(name: string): Point {
    const point = new Point(name);
    point.addGenerationConstraint(new IsNotAt(this));
    return point;
  }


  public isAtSamePlace(other_point: Point): boolean {
    let determination = this.isAtSamePlaceInner(other_point);
    if (determination === null) {
      determination = other_point.isAtSamePlaceInner(this);
    }
    return determination;
  }


  private isAtSamePlaceInner(other_point: Point) {
    let determination: boolean = null;
    this.generation_constraints.forEach(function (generation_constraint: GenerationConstraint) {
      if (generation_constraint instanceof IsNotAt && determination === null) {
        determination = generation_constraint.isAtSamePlace(other_point);
      }
    });
    return determination;
  }
}
