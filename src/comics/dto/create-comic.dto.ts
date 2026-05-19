import { IsString } from "class-validator";

export class CreateComicDto {
    @IsString()
    public isbn: string;
    @IsString()
    public title: string;
    @IsString()
    public author: string;
}
