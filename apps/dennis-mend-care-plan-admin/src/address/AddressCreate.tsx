import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="State" source="state" />
        <ReferenceInput
          source="userReference.id"
          reference="User"
          label="User Reference"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Zip Code" source="zipCode" />
      </SimpleForm>
    </Create>
  );
};
