import { MaxLength, IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TasaDTO {

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
    sucemp: string;

    @IsString()
    @ApiProperty()
    codPro: string;

    @IsString()
    @ApiProperty()
    tipoAfil: string;


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

}





