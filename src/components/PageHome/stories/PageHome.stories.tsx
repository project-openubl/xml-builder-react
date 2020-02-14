import * as React from "react";

import { storiesOf } from "@storybook/react";
import { PageHome } from "../PageHome";
import { Button } from "@patternfly/react-core";

storiesOf("Page | Home", module).add("Default", () => (
  <PageHome
    welcomeMessage="Bienvenido a mi aplicación"
    buttonAdministrarServidor={<Button>My button</Button>}
  />
));
