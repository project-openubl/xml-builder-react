import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import EmptyTable from "./index";

storiesOf("EmptyTable", module).add("Default", () => (
  <EmptyTable
    columns={["column1", "column2", "column3", "column4"]}
    onClearAllFilters={event => {
      action(event);
    }}
  />
));
