export class CreateOrganizationDto {
  readonly organizationName: string;
  readonly role: string;
  readonly group: string;
  readonly organizationId: string;
  readonly password: string;
}
