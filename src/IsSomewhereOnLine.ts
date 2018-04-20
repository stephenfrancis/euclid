
import GenerationConstraint from "./GenerationConstraint";
import Line from "./Line";


export default class IsSomewhereOnLine implements GenerationConstraint {
    private line: Line;

    constructor(line: Line) {
        this.line = line;
    }


    public isPointOnLine(line: Line): boolean {
    return (line === this.line) ? true : null;
    }

}