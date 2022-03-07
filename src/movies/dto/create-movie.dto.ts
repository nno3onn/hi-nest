// DTO (Data Transfer Object)
// 사람들이 보낼 수 있는 데이터
import { IsNumber, IsOptional, isString, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
