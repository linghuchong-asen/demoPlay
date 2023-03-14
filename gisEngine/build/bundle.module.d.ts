import * as three from 'three';
import { PerspectiveCamera, Object3D, Scene as Scene$1, DirectionalLight, WebGLRenderer, Vector2 as Vector2$1, ShapeGeometry, Vector3 as Vector3$1, Matrix3 as Matrix3$1, Matrix4 as Matrix4$1 } from 'three';
export { OrthographicCamera, PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Vector2 } from 'three/src/math/Vector2.js';
export { Vector2 } from 'three/src/math/Vector2.js';
import { Vector3 } from 'three/src/math/Vector3.js';
export { Vector3 } from 'three/src/math/Vector3.js';
import { Color as Color$1 } from 'three/src/math/Color.js';
import { Sources } from '@/typings/index';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
export { DirectionalLight } from 'three/src/lights/DirectionalLight.js';
export { PointLight } from 'three/src/lights/PointLight.js';
export { Clock } from 'three/src/core/Clock.js';
export { BufferAttribute, Float32BufferAttribute } from 'three/src/core/BufferAttribute.js';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
export { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Color as Color$2 } from '@/math/Color';
export { Box3 } from 'three/src/math/Box3.js';
export { CatmullRomCurve3 } from 'three/src/extras/curves/CatmullRomCurve3.js';
export { BoxHelper } from 'three/src/helpers/BoxHelper.js';
export { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { PointsMaterial } from 'three/src/materials/PointsMaterial.js';
import { Object3D as Object3D$1 } from 'three/src/core/Object3D.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { Mesh } from 'three/src/objects/Mesh.js';
import { SpriteMaterial } from 'three/src/materials/SpriteMaterial.js';
import { BoxGeometry } from 'three/src/geometries/BoxGeometry.js';
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial.js';
import { Appearance } from '@/appearance/Appearance';

declare class Camera extends PerspectiveCamera {
    constructor();
    readonly heading: number;
    readonly pitch: number;
    readonly roll: number;
    readonly direction: three.Vector3;
}
//# sourceMappingURL=Camera.d.ts.map

declare const primitiveArr: any;
declare class PrimitiveGroup extends Object3D {
    type: string;
    constructor();
    append(obj: any): void;
    private appendFun;
}

declare const camera: PerspectiveCamera;
declare class Scene extends Scene$1 {
    constructor();
    camera: PerspectiveCamera;
    light: DirectionalLight;
    primitives: PrimitiveGroup;
    getPrimitiveById(id: string): any;
}
//# sourceMappingURL=Scene.d.ts.map

declare class EntityGroup {
    constructor();
}
//# sourceMappingURL=EntityGroup.d.ts.map

declare class Color extends Color$1 {
    alpha: number;
    constructor(r: number, g: number, b: number, a?: number);
    rValue: number;
    gValue: number;
    bValue: number;
}
//# sourceMappingURL=Color.d.ts.map

declare const scene: Scene;
declare const renderer: WebGLRenderer;
declare const composer: EffectComposer;
declare const controls: OrbitControls;
declare class Viewer {
    container: HTMLElement | null;
    constructor(id: string);
    private renderer;
    scene: Scene;
    camera: three.PerspectiveCamera;
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
//# sourceMappingURL=Viewer.d.ts.map

declare class PolygonGeometry {
    positionArr: Vector2$1[];
    geometry: ShapeGeometry;
    height: number;
    outline: any;
    wall: any;
    constructor(positionArr: Vector2$1[]);
    type: string;
    private shape;
    private createShape;
    private createGeometry;
    stretch(height: number): void;
    setHole(positionArr: Vector2$1[]): void;
}
//# sourceMappingURL=PolygonGeometry.d.ts.map

interface Options$2 {
    geometry: any;
    translate?: Vector3$1;
    rotation?: Vector3$1;
    scale?: Vector3$1;
    heading?: number;
    pitch?: number;
    roll?: number;
}
declare class GeometryInstance {
    geometry: any;
    translate: Vector3$1;
    rotation: Vector3$1;
    scale: Vector3$1;
    heading: number;
    pitch: number;
    roll: number;
    constructor(options: Options$2);
}
//# sourceMappingURL=GeometryInstance.d.ts.map

declare class PolylineGeometry {
    geometry: any;
    type: string;
    constructor();
    setPath(path: Vector3$1[]): void;
}
//# sourceMappingURL=PolylineGeometry.d.ts.map

declare class WallGeometry {
    positionArr: Vector2$1[];
    geometry: ShapeGeometry;
    height: number;
    hasEdge: boolean;
    openFluidWll: boolean;
    type: string;
    constructor(positionArr: Vector2$1[]);
    private shape;
    private createShape;
    private createGeometry;
    stretch(thickness: number): void;
}
//# sourceMappingURL=WallGeometry.d.ts.map

declare class PointGeometry {
    geometry: any;
    type: string;
    constructor();
    _position: Vector3$1;
    get position(): Vector3$1;
    set position(value: Vector3$1);
}
//# sourceMappingURL=PointGeometry.d.ts.map

declare class LabelGeometry {
    type: string;
    position: Vector3$1;
    scale: Vector3$1;
    offset: Vector3$1;
    constructor();
}
//# sourceMappingURL=LabelGeometry.d.ts.map

declare class BillboardGeometry {
    type: string;
    position: Vector3$1;
    constructor();
}
//# sourceMappingURL=BillboardGeometry.d.ts.map

declare class ModelGeometry {
    constructor();
    type: string;
    position: Vector3$1;
    isModelReady: boolean;
}
//# sourceMappingURL=ModelGeometry.d.ts.map

declare class PolygonMaterial {
    material: any;
    constructor(color: Color$2, height?: number);
    private createOpacityHeightMat;
    private createMaterial;
}
//# sourceMappingURL=PolygonMaterial.d.ts.map

declare class PolylineMaterial {
    material: any;
    _color: Color$2;
    _lineWidth: number;
    constructor();
    set lineWidth(value: number);
    get lineWidth(): number;
    set color(value: Color$2);
    get color(): Color$2;
}
//# sourceMappingURL=PolylineMaterial.d.ts.map

declare class WallMaterial {
    material: any;
    type: string;
    _isFluid: boolean;
    color: Color$2;
    constructor(color: Color$2);
    private createWall;
    private fluidWall;
    set isFluid(value: boolean);
    get isFluid(): boolean;
}
//# sourceMappingURL=WallMaterial.d.ts.map

declare class PointMaterial {
    material: any;
    type: string;
    constructor();
    _size: number;
    _color: Color$2;
    get color(): Color$2;
    set color(value: Color$2);
    get size(): number;
    set size(size: number);
    setOpacity(opacity: number): void;
}
//# sourceMappingURL=PointMaterial.d.ts.map

declare class LabelMaterial {
    type: string;
    material: any;
    _text: string | undefined;
    _font: string | undefined;
    _isFill: boolean | undefined;
    _isOutline: boolean | undefined;
    _fillColor: Color$2 | undefined;
    _outlineColor: Color$2 | undefined;
    _outlineWidth: number | undefined;
    _show: boolean | undefined;
    constructor();
    get text(): string | undefined;
    set text(value: string | undefined);
    get font(): string | undefined;
    set font(value: string | undefined);
    get fillColor(): Color$2 | undefined;
    set fillColor(value: Color$2 | undefined);
    get outlineColor(): Color$2 | undefined;
    set outlineColor(value: Color$2 | undefined);
    get isFill(): boolean | undefined;
    set isFill(value: boolean | undefined);
    get isOutline(): boolean | undefined;
    set isOutline(value: boolean | undefined);
    get outlineWidth(): number | undefined;
    set outlineWidth(value: number | undefined);
}
//# sourceMappingURL=LabelMaterial.d.ts.map

declare class BillboardMaterial {
    type: string;
    material: any;
    _image: string;
    constructor();
    set image(url: string);
    get image(): string;
}
//# sourceMappingURL=BillboardMaterial.d.ts.map

declare class ModelMaterial {
    constructor();
    type: string;
    url: string;
}
//# sourceMappingURL=ModelMaterial.d.ts.map

declare class Matrix3 extends Matrix3$1 {
    constructor();
}
//# sourceMappingURL=Matrix3.d.ts.map

declare class Matrix4 extends Matrix4$1 {
    constructor();
}
//# sourceMappingURL=Matrix4.d.ts.map

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
//# sourceMappingURL=LineSolidSymbol.d.ts.map

interface params {
    x?: number;
    y?: number;
    z?: number;
    color?: string;
    size?: number;
    opacity?: number;
}
declare class PointSymbol extends Object3D$1 {
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
//# sourceMappingURL=PointSymbol.d.ts.map

interface LineDottedParams {
    x1?: number;
    y1?: number;
    z1?: number;
    x2?: number;
    y2?: number;
    z2?: number;
    lineDottedWidth?: number;
    lineDottedColor?: number;
}
declare class LineDottedSymbol extends Mesh {
    isLine: boolean;
    type: string;
    geometry: LineSegmentsGeometry;
    material: LineMaterial;
    x1?: number;
    y1?: number;
    z1?: number;
    x2?: number;
    y2?: number;
    z2?: number;
    color?: number;
    width?: number;
    constructor(params: LineDottedParams);
    setPoints(pointArray: number[]): void;
    setColor(color: string): void;
    setWidth(width: number): void;
}
//# sourceMappingURL=LineDottedSymbol.d.ts.map

interface Prams {
    left?: number;
    top?: number;
    text?: string;
    fontFamily?: string;
    fontSize?: string;
    fontColor?: string;
    fontOpacity?: string;
    backgroundColor?: string;
}
declare class DOMTextSymbol {
    dom: HTMLDivElement;
    left?: string;
    top?: string;
    text?: string;
    fontFamily?: string;
    fontSize?: string;
    fontColor?: string;
    fontOpacity?: string;
    backgroundColor?: string;
    constructor(params: Prams);
    setFontSize(size: string): void;
    setFontFamily(fontFamily: string): void;
    setColor(color: string): void;
    setOpacity(opacity: string): void;
    setBackgroundColor(backgroundColor: string): void;
    setWidth(width: string): void;
    setHeight(height: string): void;
    setPositionLeft(left: string): void;
    setPositionTop(top: string): void;
}
//# sourceMappingURL=DOMTextSymbol.d.ts.map

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
declare class TextureTextSymbol extends Object3D$1 {
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
//# sourceMappingURL=TextureTextSymbol.d.ts.map

interface BoxSymbolParams {
    width?: number;
    height?: number;
    depth?: number;
    boxColor?: number;
    boxMap?: string;
}
declare class BoxSymbol extends Object3D$1 {
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
//# sourceMappingURL=BoxSymbol.d.ts.map

interface Options$1 {
    geometryInstances: any;
    appearance: any;
    id: string;
    show: boolean;
    select: boolean;
}
declare class Primitive {
    geometryInstances: any;
    appearance: any;
    id: undefined | string;
    geometryType: string;
    show: boolean;
    select: boolean;
    constructor(options: Options$1);
    type: string;
}
//# sourceMappingURL=Primitive.d.ts.map

interface Options {
    material: any;
}
declare class MaterialAppearance extends Appearance {
    material: any;
    constructor(options: Options);
}
//# sourceMappingURL=MaterialAppearance.d.ts.map

export { BillboardGeometry, BillboardMaterial, BoxSymbol, Camera, Color, DOMTextSymbol, GeometryInstance, LabelGeometry, LabelMaterial, LineDottedSymbol, LineSymbol, MaterialAppearance, Matrix3, Matrix4, ModelGeometry, ModelMaterial, PointGeometry, PointMaterial, PointSymbol, PolygonGeometry, PolygonMaterial, PolylineGeometry, PolylineMaterial, Primitive, PrimitiveGroup, Scene, TextureTextSymbol, Viewer, WallGeometry, WallMaterial, camera, composer, controls, primitiveArr, renderer, scene };
