import * as React from "react";

import { storiesOf } from "@storybook/react";
import ButtonAboutProject from "./ButtonAboutProject";

storiesOf("Button | About Project", module).add("Default", () => (
  <React.Fragment>
    Click me!
    <ButtonAboutProject
      version="1.0.0"
      productName="Mi producto"
      githubSourceCodeURL="https://github.com/project-openubl/xml-builder"
      githubIssuesURL="https://github.com/project-openubl/xml-builder/issues"
      documentationURL="https://project-openubl.gitbook.io/xml-builder/"
      swaggerApiURL="https://app.swaggerhub.com/organizations/project-openubl"
    />
  </React.Fragment>
));
