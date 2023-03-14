import { Color } from '@/math/Color';
declare class LabelMaterial {
    type: string;
    material: any;
    _text: string | undefined;
    _font: string | undefined;
    _isFill: boolean | undefined;
    _isOutline: boolean | undefined;
    _fillColor: Color | undefined;
    _outlineColor: Color | undefined;
    _outlineWidth: number | undefined;
    _show: boolean | undefined;
    constructor();
    get text(): string | undefined;
    set text(value: string | undefined);
    get font(): string | undefined;
    set font(value: string | undefined);
    get fillColor(): Color | undefined;
    set fillColor(value: Color | undefined);
    get outlineColor(): Color | undefined;
    set outlineColor(value: Color | undefined);
    get isFill(): boolean | undefined;
    set isFill(value: boolean | undefined);
    get isOutline(): boolean | undefined;
    set isOutline(value: boolean | undefined);
    get outlineWidth(): number | undefined;
    set outlineWidth(value: number | undefined);
}
export { LabelMaterial };
//# sourceMappingURL=LabelMaterial.d.ts.map