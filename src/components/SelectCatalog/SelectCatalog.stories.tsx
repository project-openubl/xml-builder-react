import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SelectCatalog from "./SelectCatalog";

const options: Map<string, string> = new Map();
options.set("key1", "value1");
options.set("key2", "value2");
options.set("key3", "value3");

storiesOf("Select - Catalog", module)
  .add("Default", () => <SelectCatalog options={options} onChange={action} />)
  .add("Default value", () => (
    <SelectCatalog options={options} onChange={action} value={"key3"} />
  ))
  .add("Error", () => (
    <SelectCatalog options={options} onChange={action} error={true} />
  ));
