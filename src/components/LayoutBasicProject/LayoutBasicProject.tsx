import * as React from 'react';
import { Page, PageSidebar, SkipToContent } from "@patternfly/react-core";
import ButtonAboutProject from "../ButtonAboutProject";
import HeaderProject from "../HeaderProject";

export interface Props {
  version: string;
  productName: string;
  swaggerApiURL: string;
  githubIssuesURL: string;
  documentationURL: string;
  githubSourceCodeURL: string;
  sidebar: React.ReactNode;
}

export interface State {}

class LayoutBasicProject extends React.Component<Props, State> {
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
      githubSourceCodeURL
    } = this.props;

    return (
      <ButtonAboutProject
        version={version}
        productName={productName}
        githubSourceCodeURL={githubSourceCodeURL}
        githubIssuesURL={githubIssuesURL}
        documentationURL={documentationURL}
        swaggerApiURL={swaggerApiURL}
      />
    );
  };

  render() {
    const { sidebar, children } = this.props;

    return (
      <React.Fragment>
        <Page
          header={<HeaderProject aboutButton={this.renderAboutButton()} />}
          sidebar={<PageSidebar nav={sidebar} theme="dark" />}
          isManagedSidebar
          skipToContent={this.renderPageSkipToContent()}
        >
          {children}
        </Page>
      </React.Fragment>
    );
  }
}

export default LayoutBasicProject;
