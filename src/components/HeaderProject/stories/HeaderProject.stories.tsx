import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from "@patternfly/react-core";
import { HeartbeatIcon } from "@patternfly/react-icons";
import { HeaderProject } from "../HeaderProject";

storiesOf("Project | Header", module).add("Default", () => (
  <React.Fragment>
    <div style={{ backgroundColor: "black" }}>
      <HeaderProject
        aboutButton={
          <Button id="aboutButton" aria-label="About button" variant="plain">
            <HeartbeatIcon />
          </Button>
        }
      />
    </div>
  </React.Fragment>
));
