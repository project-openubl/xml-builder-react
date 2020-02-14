import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from "@patternfly/react-core";
import { HeartbeatIcon } from "@patternfly/react-icons";
import { HeaderProject } from "../HeaderProject";
import navBrandImageSrc from "../../../styles/assets/images/logo-navbar.svg";

storiesOf("Project | Header", module).add("Default", () => (
  <React.Fragment>
    <div style={{ backgroundColor: "black" }}>
      <HeaderProject
        navBrandImageSrc={navBrandImageSrc}
        aboutButton={
          <Button id="aboutButton" aria-label="About button" variant="plain">
            <HeartbeatIcon />
          </Button>
        }
      />
    </div>
  </React.Fragment>
));
