export declare class DetailDesembolso {
    codigoTipoDesembolso: string;
    monDesembolso: number;
    rutBenef: number;
    banco: string;
    tipoCuenta: string;
    cajero: string;
    caja: string;
}
export declare class DesembolsoDTO {
    rutPer: number;
    operacion: string;
    montoTotalDsbr: number;
    moneda: string;
    suc: string;
    fechaDesmbolso: Date;
    detalleDesembolso: DetailDesembolso[];
}
