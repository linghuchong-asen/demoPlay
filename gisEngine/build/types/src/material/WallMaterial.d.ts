import { Color } from '@/math/Color';
declare class WallMaterial {
    material: any;
    type: string;
    _isFluid: boolean;
    color: Color;
    constructor(color: Color);
    private createWall;
    private fluidWall;
    set isFluid(value: boolean);
    get isFluid(): boolean;
}
export { WallMaterial };
//# sourceMappingURL=WallMaterial.d.ts.map