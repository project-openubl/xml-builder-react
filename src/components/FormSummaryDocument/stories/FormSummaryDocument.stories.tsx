import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { FormSummaryDocument } from "../FormSummaryDocument";

storiesOf("Forms | Summary document", module).add("Default", () => (
  <FormSummaryDocument
    onSubmit={(form, input) => {
      action("submit")(form, input);
    }}
  />
));
