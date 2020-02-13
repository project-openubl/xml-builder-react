import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SelectTipoComprobanteBasico } from "../SelectTipoComprobanteBasico";

storiesOf("Select | Tipo comprobante basico", module).add("Default", () => (
  <SelectTipoComprobanteBasico onChange={action} />
));
