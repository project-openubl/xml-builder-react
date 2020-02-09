import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SelectDocumentoIdentidad from "./SelectDocumentoIdentidad";

storiesOf("Select | Documento identidad", module).add("Default", () => (
  <SelectDocumentoIdentidad onChange={action} />
));
