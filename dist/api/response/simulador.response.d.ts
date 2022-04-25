export declare class CuadradoPago {
    numCuo: number;
    montInteres: number;
    monProye: number;
    monCuot: number;
    monAmor: number;
    fecCuo: Date;
    saldoK: number;
}
export declare class SimuladorResponseDTO {
    valorCuo: number;
    cuoMsegCes: number;
    cuoMsegDes: number;
    cuoMsegITP: number;
    caeOrig: number;
    caeSeg: number;
    gastNot: number;
    impTyE: number;
    capitalInicial: number;
    ctc: number;
    cuadroPago: CuadradoPago[];
}
