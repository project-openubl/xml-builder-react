import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ErrorTable from "./index";

storiesOf("ErrorTable", module).add("Error table", () => (
  <ErrorTable
    columns={["column1", "column2", "column3", "column4"]}
    onRetry={event => {
      action(event);
    }}
  />
));
