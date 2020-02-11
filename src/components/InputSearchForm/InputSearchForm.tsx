import * as React from 'react';
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

export type SearchBoxFormData = {
  filterText: string;
};

export interface SearchBoxFormProps {
  placeholder?: string;
  onSubmit: (data: SearchBoxFormData) => void;
}

export const SearchBoxForm: React.FC<SearchBoxFormProps> = ({ placeholder, onSubmit }) => {
  const validationSchema = yup.object().shape({
    filterText: yup
      .string()
      .trim()
      .max(250, "Este campo debe de contener menos de 250 caracteres.")
  });

  const { register, errors, handleSubmit } = useForm<SearchBoxFormData>({
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
