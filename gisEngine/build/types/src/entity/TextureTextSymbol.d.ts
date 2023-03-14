import { Vector2 } from 'three/src/math/Vector2.js';
import { SpriteMaterial } from 'three/src/materials/SpriteMaterial.js';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Object3D } from 'three/src/core/Object3D.js';
interface Params {
    x?: number;
    y?: number;
    z?: number;
    text?: string;
    fontFamily?: string;
    fontSize?: string;
    fontColor?: string;
    fontOpacity?: number;
    backgroundColor?: string;
}
declare class TextureTextSymbol extends Object3D {
    isSprite: boolean;
    geometry: BufferGeometry;
    material: SpriteMaterial;
    center: Vector2;
    isTextureTextSymbol: boolean;
    x?: number;
    y?: number;
    z?: number;
    text?: string;
    fontFamily?: string;
    fontSize?: string;
    fontColor?: string;
    fontOpacity?: number;
    backgroundColor?: string;
    constructor(params: Params);
    setFontColor(color: string): void;
    setBgColor(color: string): void;
    getSize(): string;
    getOpacity(): number;
}
export { TextureTextSymbol };
//# sourceMappingURL=TextureTextSymbol.d.ts.map