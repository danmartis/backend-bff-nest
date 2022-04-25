import { MaxLength, IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AprobadoDTO {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    rutPer: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    rutEmp: number;

    @IsString()
    @ApiProperty()
    nombreEmp: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    antiguedad: number;

    @IsString()
    @ApiProperty()
    sucemp: string;

    @IsString()
    @ApiProperty()
    tipoAfil: string;

    @IsString()
    @ApiProperty()
    codPro: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    montoMax: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    plazoMin: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    rentaLprom: number;
}