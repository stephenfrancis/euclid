import GenerationConstraint from "./GenerationConstraint";
import Point from "./Point";
import IsBoundedBy from "./IsBoundedBy";
import IsSomewhereOnLine from "./IsSomewhereOnLine";


export default class Line {
  private name: string;
  private generation_constraints: Array<GenerationConstraint>;


  public static join(one_end: Point, other_end: Point): Line {
    if (one_end.isAtSamePlace(other_end) !== false) {
      throw new Error("can't be sure the two points aren't in the same place");
    }
    const line = new Line(one_end, other_end);
    line.addGenerationConstraint(new IsBoundedBy(one_end));
    line.addGenerationConstraint(new IsBoundedBy(other_end));
    return line;
  }


  constructor(one_end: Point, other_end: Point) {
      this.name = one_end.toString() + other_end.toString();
      this.generation_constraints = [];
  }


  public toString(): string {
    return this.name;
  }


  public addGenerationConstraint(generation_constraint: GenerationConstraint) {
    this.generation_constraints.push(generation_constraint);
  }


  public createPointSomewhereAlong(name: string): Point {
    const point: Point = new Point(name);
    point.addGenerationConstraint(new IsSomewhereOnLine(this));
    return point;
  }


  public isCongruent(other_point: Point): boolean {
    throw new Error("TODO");
  }


  public isPointAtEndOfLine(other_point: Point): boolean {
    let determination: boolean = null;
    this.generation_constraints.forEach(function (generation_constraint: GenerationConstraint) {
      if (generation_constraint instanceof IsBoundedBy && determination === null) {
        determination = generation_constraint.isPointAtEndOfLine(other_point);
      }
    });
    return determination;
  }

/*
  public isPointOnLine(other_point: Point): boolean {
    let determination: boolean = this.isPointAtEndOfLine(other_point);
    if (determination !== true) {
      other_point.generation_constraints.forEach(function (generation_constraint: GenerationConstraint) {
        if (generation_constraint instanceof IsSomewhereOnLine && determination === null) {
          determination = generation_constraint.isPointOnLine(other_point);
        }
      });
    }
    return determination;
  }
*/

}
