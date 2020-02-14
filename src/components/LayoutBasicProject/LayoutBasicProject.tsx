import * as React from "react";
import { Page, PageSidebar, SkipToContent } from "@patternfly/react-core";
import { ButtonAboutProject } from "../ButtonAboutProject";
import { HeaderProject } from "../HeaderProject";

export interface LayoutBasicProjectProps {
  version: string;
  productName: string;
  swaggerApiURL: string;
  githubIssuesURL: string;
  documentationURL: string;
  githubSourceCodeURL: string;
  sidebarNav: React.ReactNode;
  brandImageSrc: string;
  navBrandImageSrc: string;
}

interface State {}

export class LayoutBasicProject extends React.Component<
  LayoutBasicProjectProps,
  State
> {
  renderPageSkipToContent = () => {
    return (
      <SkipToContent href="#primary-app-container">
        Skip to Content
      </SkipToContent>
    );
  };

  renderAboutButton = () => {
    const {
      version,
      productName,
      swaggerApiURL,
      githubIssuesURL,
      documentationURL,
      githubSourceCodeURL,
      brandImageSrc
    } = this.props;

    return (
      <ButtonAboutProject
        version={version}
        productName={productName}
        githubSourceCodeURL={githubSourceCodeURL}
        githubIssuesURL={githubIssuesURL}
        documentationURL={documentationURL}
        swaggerApiURL={swaggerApiURL}
        brandImageSrc={brandImageSrc}
      />
    );
  };

  render() {
    const { sidebarNav, navBrandImageSrc, children } = this.props;

    return (
      <React.Fragment>
        <Page
          header={
            <HeaderProject
              navBrandImageSrc={navBrandImageSrc}
              aboutButton={this.renderAboutButton()}
            />
          }
          sidebar={<PageSidebar nav={sidebarNav} theme="dark" />}
          isManagedSidebar
          skipToContent={this.renderPageSkipToContent()}
        >
          {children}
        </Page>
      </React.Fragment>
    );
  }
}
