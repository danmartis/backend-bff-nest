import { IsNotEmpty, IsString, IsNumber, IsArray, ArrayMinSize, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CuadradoPago {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    numCuo: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    montInteres: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    monProye: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    monCuot: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    monAmor: number;

    @Type(() => Date)
    @IsDate()
    fecCuo: Date;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    saldoK: number;

}

export class SimuladorResponseDTO {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    valorCuo: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    cuoMsegCes: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    cuoMsegDes: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    cuoMsegITP: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    caeOrig: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    caeSeg: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    gastNot: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    impTyE: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    capitalInicial: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    ctc: number;

    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(1)
    @ApiProperty({
        isArray: true,
        type: CuadradoPago,
    })
    cuadroPago: CuadradoPago[];

}

