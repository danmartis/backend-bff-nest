export declare class DetailDesembolso {
    codigoTipoDesembolso: string;
    estado: string;
    detalleEstado: string;
    fechaEjecucion: Date;
}
export declare class DesembolsoResponse {
    idDesembolso: string;
    resultado: string;
    montoDesembolsado: number;
    montoPendiente: number;
    detalleDesembolsos: DetailDesembolso[];
}
