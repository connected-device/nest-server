export class CreateUserDto {
  readonly userName: string;
  readonly role: string;
  readonly group: string;
  readonly userId: string;
  readonly password: string;
  readonly organizationId: string;
}