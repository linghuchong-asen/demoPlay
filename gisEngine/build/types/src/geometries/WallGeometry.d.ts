import { ShapeGeometry, Vector2 } from 'three';
declare class WallGeometry {
    positionArr: Vector2[];
    geometry: ShapeGeometry;
    height: number;
    hasEdge: boolean;
    openFluidWll: boolean;
    type: string;
    constructor(positionArr: Vector2[]);
    private shape;
    private createShape;
    private createGeometry;
    stretch(thickness: number): void;
}
export { WallGeometry };
//# sourceMappingURL=WallGeometry.d.ts.map