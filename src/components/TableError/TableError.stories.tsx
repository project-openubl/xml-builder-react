import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { TableError } from "./index";

storiesOf("Table | Error", module)
  .add("With retry", () => (
    <TableError
      columns={["column1", "column2", "column3", "column4"]}
      onRetry={event => {
        action("event")(event);
      }}
    />
  ))
  .add("Without retry", () => (
    <TableError columns={["column1", "column2", "column3", "column4"]} />
  ));
