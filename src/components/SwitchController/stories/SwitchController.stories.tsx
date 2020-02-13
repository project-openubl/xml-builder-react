import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SwitchController } from "../SwitchController";

storiesOf("Switch | Controller", module)
  .add("Default", () => (
    <SwitchController
      id="mySwitch"
      onChange={value => {
        action("changed")(value);
      }}
    />
  ))
  .add("With labels", () => (
    <SwitchController
      id="mySwitch"
      labelOn="On"
      labelOff="Off"
      onChange={value => {
        action("changed")(value);
      }}
    />
  ));
