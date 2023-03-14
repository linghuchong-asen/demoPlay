import { Scene as ThreeScene } from 'three';
import { PerspectiveCamera } from './Camera';
import { PrimitiveGroup } from '../primitive/PrimitiveGroup';
import { DirectionalLight } from '../lights/DirectionalLight';
declare const camera: PerspectiveCamera;
declare class Scene extends ThreeScene {
    constructor();
    camera: PerspectiveCamera;
    light: DirectionalLight;
    primitives: PrimitiveGroup;
    getPrimitiveById(id: string): any;
}
export { Scene, camera };
//# sourceMappingURL=Scene.d.ts.map