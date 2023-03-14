import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
interface LineSymbolParams {
    x1?: number;
    y1?: number;
    z1?: number;
    x2?: number;
    y2?: number;
    z2?: number;
    lineWidth?: number;
    lineColor?: number;
}
declare class LineSymbol extends LineSegments2 {
    isLine: boolean;
    type: string;
    geometry: LineGeometry;
    material: LineMaterial;
    x1?: number;
    y1?: number;
    z1?: number;
    x2?: number;
    y2?: number;
    z2?: number;
    color?: number;
    width?: number;
    constructor(params: LineSymbolParams);
    setPoints(pointArray: number[]): void;
    setColor(color: string): void;
    setWidth(width: number): void;
}
export { LineSymbol };
//# sourceMappingURL=LineSolidSymbol.d.ts.map