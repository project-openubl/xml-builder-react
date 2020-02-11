import * as React from 'react';
import { FormSelect, FormSelectOption } from "@patternfly/react-core";

export interface SelectCatalogControlProps {
  value?: string;
  onChange?: (selected: string) => any;
  error?: any;
}

export interface SelectCatalogProps extends SelectCatalogControlProps {
  options: Map<string, string>;
}

interface State {
  selected: string;
}

export class SelectCatalog extends React.Component<SelectCatalogProps, State> {
  constructor(props: SelectCatalogProps) {
    super(props);
    this.state = {
      selected: props.value || ""
    };
  }

  handleOnChange = (value: string) => {
    const { onChange } = this.props;
    this.setState({ selected: value }, () => {
      if (onChange) {
        onChange(value);
      }
    });
  };

  render() {
    const { selected } = this.state;
    const { value, onChange, error, options, ...rest } = this.props;

    return (
      <React.Fragment>
        <FormSelect
          value={selected}
          onChange={this.handleOnChange}
          isValid={!error}
          aria-label="Select catalog"
          {...rest}
        >
          {Array.from(options.keys()).map((key, index) => {
            const label = options.get(key) || "Invalid key";
            return <FormSelectOption key={index} value={key} label={label} />;
          })}
        </FormSelect>
      </React.Fragment>
    );
  }
}
