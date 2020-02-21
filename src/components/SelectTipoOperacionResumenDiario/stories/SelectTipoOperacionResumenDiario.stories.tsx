import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SelectTipoOperacionResumenDiario } from "../SelectTipoOperacionResumenDiario";

storiesOf("Select | Tipo operación resumen diario", module).add("Default", () => (
  <SelectTipoOperacionResumenDiario onChange={action} />
));
