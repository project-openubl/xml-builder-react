import * as React from "react";

import { storiesOf } from "@storybook/react";
import { ButtonViewModal } from "./ButtonViewModal";

storiesOf("Button | View modal", module).add("Default", () => (
  <ButtonViewModal
    buttonLabel="My Button"
    modalTitle="My modal title"
    modalContent="My modal content"
  />
));
