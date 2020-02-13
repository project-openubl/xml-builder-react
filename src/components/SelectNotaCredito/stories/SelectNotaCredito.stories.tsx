import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SelectNotaCredito } from "../SelectNotaCredito";

storiesOf("Select | Nota crédito", module).add("Default", () => (
  <SelectNotaCredito onChange={action} />
));
