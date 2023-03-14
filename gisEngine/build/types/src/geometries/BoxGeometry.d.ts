import { Vector3 } from 'three/src/math/Vector3.js';
import { BufferGeometry } from 'three';
interface BoxGeometryParams {
    minimum: Vector3;
    maximum: Vector3;
    widthSegments?: number;
    heightSegments?: number;
    depthSegments?: number;
}
declare class BoxGeometry extends BufferGeometry {
    minimum: Vector3;
    maximum: Vector3;
    constructor(params: BoxGeometryParams);
    private scope;
    private indices;
    private vertices;
    private normals;
    private uvs;
    private numberOfVertices;
    private groupStart;
    private buildPlane;
}
export { BoxGeometry };
//# sourceMappingURL=BoxGeometry.d.ts.map