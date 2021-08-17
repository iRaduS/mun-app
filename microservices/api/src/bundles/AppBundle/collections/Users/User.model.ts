import { Schema, Is, a, an } from "@kaviar/validator-bundle";
import { IPasswordAuthenticationStrategy } from "@kaviar/password-bundle";

@Schema()
export class User {
  @Is(a.objectId().required())
  _id: any;

  profile: { firstName: string; lastName: string };

  password: IPasswordAuthenticationStrategy;

  @Is(an.boolean().required())
  isEnabled: boolean;

  @Is(a.date().required())
  createdAt: Date;
}
