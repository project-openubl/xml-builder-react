import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { FormStandardDocument } from "../FormStandardDocument";

storiesOf("Forms | Standard document", module).add("Default", () => (
  <FormStandardDocument
    onSubmit={(form, input) => {
      action("submit")(form, input);
    }}
  />
));
