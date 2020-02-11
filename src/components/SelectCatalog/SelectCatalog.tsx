import * as React from 'react';
import { FormSelect, FormSelectOption } from "@patternfly/react-core";

export interface SelectCatalogControlProps {
  value?: string;
  onChange?: (selected: string) => any;
  error?: any;
}

export interface Props extends SelectCatalogControlProps {
  options: Map<string, string>;
}

export interface State {
  selected: string;
}

class SelectCatalog extends React.Component<Props, State> {
  constructor(props: Props) {
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

export default SelectCatalog;
