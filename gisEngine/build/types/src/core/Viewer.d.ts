import { Scene } from './Scene';
import { OrbitControls } from '../annex/OrbitControls';
import { WebGLRenderer } from '../renderers/WebglRenderer';
import { EntityGroup } from '../entity/EntityGroup';
import { Vector2 } from '../math/Vector2';
import { Vector3 } from '../math/Vector3';
import { Color } from '../math/Color';
import type { Sources } from '@/typings/index';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
declare const scene: Scene;
declare const renderer: WebGLRenderer;
declare const composer: EffectComposer;
declare const controls: OrbitControls;
declare class Viewer {
    container: HTMLElement | null;
    constructor(id: string);
    private renderer;
    scene: Scene;
    camera: import("three").PerspectiveCamera;
    entities: EntityGroup;
    _axesShow: boolean;
    _axesLength: number;
    _groundColor: Color;
    private groundGeometry;
    private groundMaterial;
    private ground;
    private axesHelper;
    private initScene;
    get groundColor(): Color;
    set groundColor(value: Color);
    get axesShow(): boolean;
    set axesShow(value: boolean);
    get axesLength(): number;
    set axesLength(value: number);
    private skyBoxSource;
    setSkyBox(source?: Sources, show?: boolean): void;
    drillPick(position: Vector2): any[] | null;
    pick(position: Vector2): any;
    pickPosition(windowPosition: Vector2): null | Vector3;
    flyTo(result: any, options?: {
        startTarget?: any;
        during?: number;
        mode?: string;
    }): void;
    highLight(primitives: any): void;
}
export { Viewer, scene, renderer, controls, composer };
//# sourceMappingURL=Viewer.d.ts.map