import * as React from "react";
import { shallow } from "enzyme";
import { ButtonAboutProject } from "../ButtonAboutProject";
import brandImageSrc from "../../../styles/assets/images/logo.png";

it("Renders without crashing", () => {
  const wrapper = shallow(
    <ButtonAboutProject
      version="1.0.0"
      productName="Mi producto"
      githubSourceCodeURL="https://github.com/project-openubl/xml-builder"
      githubIssuesURL="https://github.com/project-openubl/xml-builder/issues"
      documentationURL="https://project-openubl.gitbook.io/xml-builder/"
      swaggerApiURL="https://app.swaggerhub.com/organizations/project-openubl"
      brandImageSrc={brandImageSrc}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
