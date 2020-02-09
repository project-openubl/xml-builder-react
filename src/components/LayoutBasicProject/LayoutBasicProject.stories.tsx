import * as React from "react";

import { storiesOf } from "@storybook/react";
import LayoutBasicProject from "./LayoutBasicProject";

import {
  PageSection,
  Bullseye,
  EmptyState,
  EmptyStateVariant,
  Title,
  EmptyStateIcon,
  Nav,
  NavItem,
  NavGroup
} from "@patternfly/react-core";
import { MusicIcon } from "@patternfly/react-icons";

storiesOf("Project. Layout Basic", module).add("Default", () => (
  <LayoutBasicProject
    version="1.0.0"
    productName="Mi producto"
    githubSourceCodeURL="https://github.com/project-openubl/xml-builder"
    githubIssuesURL="https://github.com/project-openubl/xml-builder/issues"
    documentationURL="https://project-openubl.gitbook.io/xml-builder/"
    swaggerApiURL="https://app.swaggerhub.com/organizations/project-openubl"
    sidebar={
      <Nav id="nav-primary-simple" aria-label="Nav" theme="dark">
        <NavGroup title="Group">
          <NavItem className="pf-m-current">My menu</NavItem>
        </NavGroup>
      </Nav>
    }
  >
    <PageSection>
      <Bullseye>
        <EmptyState variant={EmptyStateVariant.full}>
          <EmptyStateIcon icon={MusicIcon} />
          <Title headingLevel="h5" size="lg">
            Your content
          </Title>
        </EmptyState>
      </Bullseye>
    </PageSection>
  </LayoutBasicProject>
));
