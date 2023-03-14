import { PerspectiveCamera } from 'three';
import { OrthographicCamera } from 'three';
declare class Camera extends PerspectiveCamera {
    constructor();
    readonly heading: number;
    readonly pitch: number;
    readonly roll: number;
    readonly direction: import("three").Vector3;
}
export { Camera, PerspectiveCamera, OrthographicCamera };
//# sourceMappingURL=Camera.d.ts.map