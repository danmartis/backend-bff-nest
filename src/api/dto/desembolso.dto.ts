import { MaxLength, IsNotEmpty, IsString, IsNumber, IsDate, ArrayMinSize, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';


export class DetailDesembolso {

    @IsString()
    @ApiProperty()
    codigoTipoDesembolso: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    monDesembolso: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    rutBenef: number;

    @IsString()
    @ApiProperty()
    banco: string;

    @IsString()
    @ApiProperty()
    tipoCuenta: string;

    @IsString()
    @ApiProperty()
    cajero: string;

    @IsString()
    @ApiProperty()
    caja: string;

}



export class DesembolsoDTO {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    rutPer: number;

    @IsString()
    @ApiProperty()
    operacion: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    montoTotalDsbr: number;

    @IsString()
    @ApiProperty()
    moneda: string;

    @IsString()
    @ApiProperty()
    suc: string;

    @Type(() => Date)
    @IsDate()
    @ApiProperty()
    fechaDesmbolso: Date;

    @IsArray()
    @ApiProperty({
        isArray: true,
        type: DetailDesembolso,
    })
    detalleDesembolso: DetailDesembolso[];

}









