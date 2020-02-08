import React from "react";
import { FormSelect, FormSelectOption } from "@patternfly/react-core";

export interface ControlProps {
  value?: string;
  onChange?: (selected: string) => any;
}

export interface Props extends ControlProps {
  error?: any;
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
    const { error, options } = this.props;
    const { selected } = this.state;

    return (
      <React.Fragment>
        <FormSelect
          value={selected}
          onChange={this.handleOnChange}
          isValid={!error}
          aria-label="Tipo comprobante Select"
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
