import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  id?: StringFilter;
  state?: StringNullableFilter;
  userReference?: UserWhereUniqueInput;
  zipCode?: StringNullableFilter;
};
