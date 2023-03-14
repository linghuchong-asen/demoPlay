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
export { DOMTextSymbol };
//# sourceMappingURL=DOMTextSymbol.d.ts.map