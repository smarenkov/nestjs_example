import { IsDataURI, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	firstName: string;

	@IsString()
	@IsNotEmpty()
	lastName: string;

	@IsDateString()
	birthDate?: Date;
}