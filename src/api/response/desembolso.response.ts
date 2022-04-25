import { IsNotEmpty, IsString, IsNumber, IsArray, ArrayMinSize, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';


export class DetailDesembolso {

    @IsString()
    @ApiProperty()
    codigoTipoDesembolso: string;


    @IsString()
    @ApiProperty()
    estado: string;

    @IsString()
    @ApiProperty()
    detalleEstado: string;

    @Type(() => Date)
    @IsDate()
    fechaEjecucion: Date;


}

export class DesembolsoResponse {


    @IsString()
    @ApiProperty()
    idDesembolso: string;

    @IsString()
    @ApiProperty()
    resultado: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    montoDesembolsado: number;


    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    montoPendiente: number;


    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(1)
    @IsArray()
    @ApiProperty({
        isArray: true,
        type: DetailDesembolso,
    })
    detalleDesembolsos: DetailDesembolso[];


}

