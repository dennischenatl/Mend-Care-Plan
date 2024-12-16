import { Address } from "../address/Address";
import { JsonValue } from "type-fest";

export type User = {
  addresses?: Address | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
