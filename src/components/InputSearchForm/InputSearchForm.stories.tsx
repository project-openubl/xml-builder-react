import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SearchBoxForm } from "./InputSearchForm";

storiesOf("Input | Search", module).add("Default", () => (
  <SearchBoxForm
    onSubmit={form => {
      action("submit")(JSON.stringify(form));
    }}
  />
));
