export enum DtoPrefix {
  NAME = 'Name',
  LAST_NAME = 'LastName',
  IDENTITY_NUMBER = 'IdentityNumber',
  EMAIL_OR_PHONE = 'EmailOrPhone',
  PASSWORD = 'Password',
}

export enum ValidationType {
  IS_NOT_EMPTY = 'IsNotEmpty',
  MUST_BE_NUMBER = 'MustBeNumber',
  MUST_BE_STRING = 'MustBeString',
  MIN_LENGTH = 'MinLength',
  MAX_LENGTH = 'MaxLength',
  NOT_STRONG = 'NotStrong',
}

export function getValidationMessage(
  prefix: DtoPrefix,
  ValidationType: ValidationType,
  ...args: any[]
): string {
  const message = `${prefix}_${ValidationType}${args.length > 0 ? `| ${args.join('|')}` : ''}`;
  return message;
}
