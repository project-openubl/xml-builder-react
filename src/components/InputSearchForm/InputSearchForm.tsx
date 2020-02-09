import React from "react";
import {
  Form,
  TextInput,
  InputGroup,
  Button,
  ButtonVariant
} from "@patternfly/react-core";
import { SearchIcon } from "@patternfly/react-icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export type FormData = {
  filterText: string;
};

export interface Props {
  placeholder?: string;
  onSubmit: (data: FormData) => void;
}

const SearchBoxForm: React.FC<Props> = ({ placeholder, onSubmit }) => {
  const validationSchema = yup.object().shape({
    filterText: yup
      .string()
      .trim()
      .max(250, "Este campo debe de contener menos de 250 caracteres.")
  });

  const { register, errors, handleSubmit } = useForm<FormData>({
    validationSchema
  });

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <TextInput
            type="search"
            placeholder={placeholder}
            name="filterText"
            aria-label="Filter text"
            aria-describedby="Filter text"
            ref={register}
            isValid={!errors.filterText}
          />
          <Button
            type="submit"
            variant={ButtonVariant.tertiary}
            aria-label="search button for search input"
          >
            <SearchIcon />
          </Button>
        </InputGroup>
      </Form>
    </React.Fragment>
  );
};

export default SearchBoxForm;
