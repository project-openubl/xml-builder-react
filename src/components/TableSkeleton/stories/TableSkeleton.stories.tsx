import * as React from "react";

import { storiesOf } from "@storybook/react";
import { TableSkeleton } from "../TableSkeleton";

storiesOf("Table | Skeleton", module)
  .add("With colSize", () => <TableSkeleton colSize={5} rowSize={4} />)
  .add("With columns", () => (
    <TableSkeleton
      columns={[
        { title: "Column1" },
        { title: "Column2" },
        { title: "Column3" },
        { title: "Column4" },
        { title: "Column5" }
      ]}
      rowSize={4}
    />
  ));
