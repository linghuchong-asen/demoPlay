import { Color } from '@/math/Color';
import { Color as ThreeColor } from 'three';
interface chunkArrayParam {
    arr: any[];
    num: number;
}
export declare const chunkArray: (params: chunkArrayParam) => any[];
export declare const getJpgUrl: (url: string) => string;
export declare const getPngUrl: (url: string) => string;
export declare const hexArr: string[];
export declare const RGBTranslateHex: (param: [number, number, number]) => string;
export declare const arrMaxNum: (arr: Array<any>) => number;
export declare const translateColor: (color: Color) => ThreeColor;
export {};
//# sourceMappingURL=utilFunction.d.ts.map