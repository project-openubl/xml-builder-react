import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import InputSearchForm from "./InputSearchForm";

console.log("carlos", typeof action('carlos')());
storiesOf("Input | Search", module).add("Default", () => (
  <InputSearchForm
    onSubmit={form => {
      action(JSON.stringify(form));
    }}
  />
));