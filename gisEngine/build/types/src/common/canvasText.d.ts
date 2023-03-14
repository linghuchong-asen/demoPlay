import { CanvasTexture } from 'three';
import { Color } from '@/math/Color';
interface CreateCanvasTextParam {
    text?: string;
    font?: string;
    fillColor?: Color;
    outlineColor?: Color;
    isFill?: boolean;
    isOutline?: boolean;
    outlineWidth?: number;
}
declare const createCanvasText: (param: CreateCanvasTextParam) => CanvasTexture;
export { createCanvasText };
//# sourceMappingURL=canvasText.d.ts.map