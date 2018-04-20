
import GenerationConstraint from "./GenerationConstraint";
import Point from "./Point";


export default class IsNotAt implements GenerationConstraint {
    private point: Point;

    constructor(point: Point) {
        this.point = point;
    }


    public isAtSamePlace(other_point: Point): boolean {
        return (other_point === this.point) ? false : null;
    }

}