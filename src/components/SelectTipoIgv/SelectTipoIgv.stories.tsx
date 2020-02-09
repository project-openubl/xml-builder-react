import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SelectTipoIgv from "./SelectTipoIgv";

storiesOf("Select | Tipo IGV", module).add("Default", () => (
  <SelectTipoIgv onChange={action} />
));
