import * as React from "react";
import { shallow } from "enzyme";
import { LayoutBasicProject } from "../LayoutBasicProject";
import { Nav, NavGroup, NavItem } from "@patternfly/react-core";

it("Renders without crashing", () => {
  const wrapper = shallow(
    <LayoutBasicProject
      version="1.0.0"
      productName="Mi producto"
      githubSourceCodeURL="https://github.com/project-openubl/xml-builder"
      githubIssuesURL="https://github.com/project-openubl/xml-builder/issues"
      documentationURL="https://project-openubl.gitbook.io/xml-builder/"
      swaggerApiURL="https://app.swaggerhub.com/organizations/project-openubl"
      sidebarNav={
        <Nav id="nav-primary-simple" aria-label="Nav" theme="dark">
          <NavGroup title="Group">
            <NavItem className="pf-m-current">My menu</NavItem>
          </NavGroup>
        </Nav>
      }
    />
  );

  expect(wrapper).toMatchSnapshot();
});
