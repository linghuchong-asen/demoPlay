import { PointsMaterial } from 'three/src/materials/PointsMaterial.js';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Object3D } from 'three/src/core/Object3D.js';
interface params {
    x?: number;
    y?: number;
    z?: number;
    color?: string;
    size?: number;
    opacity?: number;
}
declare class PointSymbol extends Object3D {
    type: string;
    geometry: BufferGeometry;
    material: PointsMaterial;
    morphTargetInfluences: number[] | undefined;
    morphTargetDictionary: any;
    isPoints: boolean;
    x?: number;
    y?: number;
    z?: number;
    color?: string;
    size?: number;
    opacity?: number;
    constructor(params: params);
    private updateMorphTargets;
    setColor(color: string): void;
    setSize(size: number): void;
    getSize(): number;
    setScale(scale: number): void;
    setOpacity(opacity: number): void;
    raycast(raycaster: any, intersects: any[]): void;
}
export { PointSymbol };
//# sourceMappingURL=PointSymbol.d.ts.map