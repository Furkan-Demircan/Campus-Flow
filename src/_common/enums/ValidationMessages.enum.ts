export enum DtoPrefix {
  NAME = 'Name',
  LAST_NAME = 'LastName',
  IDENTITY_NUMBER = 'IdentityNumber',
}

export enum ValidationType {
  IS_NOT_EMPTY = 'IsNotEmpty',
  MUST_BE_NUMBER = 'MustBeNumber',
  MUST_BE_STRING = 'MustBeString',
}

export function getValidationMessage(
  prefix: DtoPrefix,
  ValidationType: ValidationType,
  ...args: any[]
): string {
  const message = `${prefix}_${ValidationType}${args.length > 0 ? `| ${args.join('|')}` : ''}`;
  return message;
}
