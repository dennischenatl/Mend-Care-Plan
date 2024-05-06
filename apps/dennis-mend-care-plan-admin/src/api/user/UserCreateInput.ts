import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  addresses?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
