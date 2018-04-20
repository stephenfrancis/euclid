
import GenerationConstraint from "./GenerationConstraint";
import Point from "./Point";


export default class IsBoundedBy implements GenerationConstraint {
    private point: Point;

    constructor(point: Point) {
        this.point = point;
    }


    public isPointAtEndOfLine(other_point: Point): boolean {
        return (other_point === this.point) ? true : null;
    }


    public isPointOnLine(other_point: Point): boolean {
        return (other_point === this.point) ? true : null;
    }

}