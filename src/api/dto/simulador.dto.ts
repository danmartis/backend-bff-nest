import { MaxLength, IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SimuladorDTO {

    @IsString()
    @ApiProperty()
    suc: string;

    @IsString()
    @ApiProperty()
    codPro: string;
    @IsString()
    @ApiProperty()
    tipPro: string;

    @IsString()
    @ApiProperty()
    tipOpe: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    monto: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    plazo: number;

    @IsString()
    @ApiProperty()
    moneda: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    mesesGracia: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    mesesCuotaZero: number;

    @IsString()
    @ApiProperty()
    segDegr: string;

    @IsString()
    @ApiProperty()
    segITP: string;

    @IsString()
    @ApiProperty()
    segCes: string;

    @IsString()
    @ApiProperty()
    notario: string;

    @IsString()
    @ApiProperty()
    proyeccion: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    tasaMensual: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    tasaAnual: number;

}





