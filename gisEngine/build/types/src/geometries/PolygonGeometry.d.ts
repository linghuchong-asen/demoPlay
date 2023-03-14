import { ShapeGeometry, Vector2 } from 'three';
declare class PolygonGeometry {
    positionArr: Vector2[];
    geometry: ShapeGeometry;
    height: number;
    outline: any;
    wall: any;
    constructor(positionArr: Vector2[]);
    type: string;
    private shape;
    private createShape;
    private createGeometry;
    stretch(height: number): void;
    setHole(positionArr: Vector2[]): void;
}
export { PolygonGeometry };
//# sourceMappingURL=PolygonGeometry.d.ts.map