import { IsString, IsInt, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateSuperheroDto {
    @IsString({ message: 'Name must be a string' })
    @IsNotEmpty({ message: 'Name is required' })
    name: string;

    @IsString({ message: 'Superpower must be a string' })
    @IsNotEmpty({ message: 'Superpower is required' })
    superpower: string;

    @IsInt({ message: 'Humility score must be an integer' })
    @Min(1, { message: 'Humility score must be at least 1' })
    @Max(10, { message: 'Humility score must be at most 10' })
    @IsNotEmpty({ message: 'Humility score is required' })
    humilityScore: number;
}