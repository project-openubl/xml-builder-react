import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SelectNotaDebito from "./SelectNotaDebito";

storiesOf("Select. Nota débito", module).add("Default", () => (
  <SelectNotaDebito onChange={action} />
));
