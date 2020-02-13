import * as React from "react";

import { storiesOf } from "@storybook/react";
import { PageForbidden403 } from "../PageForbidden403";

storiesOf("Page | 403 Forbidden", module).add("Default", () => (
  <PageForbidden403 />
));
