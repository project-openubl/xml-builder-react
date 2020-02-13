import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { TableEmpty } from "../TableEmpty";

storiesOf("Table | Empty", module).add("Default", () => (
  <TableEmpty
    columns={["column1", "column2", "column3", "column4"]}
    onClearAllFilters={event => {
      action(event);
    }}
  />
));
