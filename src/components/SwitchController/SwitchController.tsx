import React from "react";
import { Switch } from "@patternfly/react-core";

interface ControlProps {
  value?: boolean;
  onChange?: (isChecked: boolean) => any;
}

export interface SwitchControllerProps extends ControlProps {
  id: string;
  error?: any;
  labelOn?: string;
  labelOff?: string;
}

interface State {
  isChecked: boolean;
}

export class SwitchController extends React.Component<
  SwitchControllerProps,
  State
> {
  constructor(props: SwitchControllerProps) {
    super(props);
    this.state = {
      isChecked: props.value ? props.value : false
    };
  }

  handleOnChange = (value: boolean) => {
    this.setState({
      isChecked: value
    });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  render() {
    const { id, labelOn, labelOff } = this.props;
    const { isChecked } = this.state;

    return (
      <React.Fragment>
        <Switch
          id={id}
          label={labelOn}
          labelOff={labelOff}
          isChecked={isChecked}
          onChange={this.handleOnChange}
          aria-label="Switch controller"
        />
      </React.Fragment>
    );
  }
}
