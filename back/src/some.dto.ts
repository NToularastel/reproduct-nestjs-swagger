import { SharedEnum } from 'share';
import { IsEnum, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import {ApiExtraModels} from '@nestjs/swagger'


class BaseDto {
  @IsOptional()
  @IsEnum(SharedEnum)
  prop?: SharedEnum;
}

@ApiExtraModels()
export class SomeDto {
  @ValidateNested()
  @Type(() => BaseDto)
  prop!: BaseDto;
}
