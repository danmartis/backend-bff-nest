import { MaxLength, IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TasaResponseDTO {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    tasaAnual: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    tasaMensual: number;

}