import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { Mesh } from 'three/src/objects/Mesh.js';
interface LineDottedParams {
    x1?: number;
    y1?: number;
    z1?: number;
    x2?: number;
    y2?: number;
    z2?: number;
    lineDottedWidth?: number;
    lineDottedColor?: number;
}
declare class LineDottedSymbol extends Mesh {
    isLine: boolean;
    type: string;
    geometry: LineSegmentsGeometry;
    material: LineMaterial;
    x1?: number;
    y1?: number;
    z1?: number;
    x2?: number;
    y2?: number;
    z2?: number;
    color?: number;
    width?: number;
    constructor(params: LineDottedParams);
    setPoints(pointArray: number[]): void;
    setColor(color: string): void;
    setWidth(width: number): void;
}
export { LineDottedSymbol };
//# sourceMappingURL=LineDottedSymbol.d.ts.map