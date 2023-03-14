import { Color } from '@/math/Color';
declare class PointMaterial {
    material: any;
    type: string;
    constructor();
    _size: number;
    _color: Color;
    get color(): Color;
    set color(value: Color);
    get size(): number;
    set size(size: number);
    setOpacity(opacity: number): void;
}
export { PointMaterial };
//# sourceMappingURL=PointMaterial.d.ts.map