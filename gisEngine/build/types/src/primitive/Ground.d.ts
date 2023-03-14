import { Color } from '../math/Color';
import { MeshBasicMaterial } from '../material/MeshBasicMaterial';
import { PlaneGeometry } from '../geometries/PlaneGeometry';
import { Mesh } from '../mesh/Mesh';
declare class Ground {
    constructor();
    color: Color;
    private groundGeometryInit;
    private groundMaterialInit;
    ground: Mesh<PlaneGeometry, MeshBasicMaterial>;
}
export { Ground };
//# sourceMappingURL=Ground.d.ts.map