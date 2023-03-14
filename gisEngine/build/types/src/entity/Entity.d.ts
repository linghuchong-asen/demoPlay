import type { Vector3 } from 'three';
import type { ModelGraphics } from './graphics/ModelGraphics';
interface EntityParams {
    model?: ModelGraphics;
    position?: Vector3;
}
declare class Entity {
    position: Vector3 | undefined;
    model: ModelGraphics | undefined;
    constructor(options: EntityParams);
}
export { Entity };
//# sourceMappingURL=Entity.d.ts.map