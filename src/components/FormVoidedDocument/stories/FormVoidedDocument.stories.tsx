import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { FormVoidedDocument } from "../FormVoidedDocument";

storiesOf("Forms | Voided document", module).add("Default", () => (
  <FormVoidedDocument
    onSubmit={(form, input) => {
      action("submit")(form, input);
    }}
  />
));
