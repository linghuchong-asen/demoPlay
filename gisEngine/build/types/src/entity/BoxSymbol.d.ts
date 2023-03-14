import { BoxGeometry } from 'three/src/geometries/BoxGeometry.js';
import { Object3D } from 'three/src/core/Object3D.js';
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial.js';
interface BoxSymbolParams {
    width?: number;
    height?: number;
    depth?: number;
    boxColor?: number;
    boxMap?: string;
}
declare class BoxSymbol extends Object3D {
    type: string;
    geometry: BoxGeometry;
    material: MeshBasicMaterial;
    isBoxSymbol: boolean;
    isMesh: boolean;
    morphTargetInfluences: any;
    morphTargetDictionary: any;
    width?: number;
    height?: number;
    depth?: number;
    boxColor?: number;
    boxMap?: string;
    constructor(params: BoxSymbolParams);
    updateMorphTargets(): void;
    setColor(color: string): void;
    setWidth(width: number): void;
    setHeight(height: number): void;
    setDepth(depth: number): void;
    setTexture(texturePath: string): void;
    raycast(raycaster: any, intersects: any): void;
}
export { BoxSymbol };
//# sourceMappingURL=BoxSymbol.d.ts.map