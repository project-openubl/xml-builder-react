import React from "react";
import {
  AboutModal,
  TextContent,
  TextList,
  TextListItem,
  Button,
  ButtonVariant
} from "@patternfly/react-core";
import { HelpIcon } from "@patternfly/react-icons";
import brandImg from "../../img/logo.png";

export interface Props {
  version: string;
  productName: string;
  githubSourceCodeURL: string;
  githubIssuesURL: string;
  documentationURL: string;
  swaggerApiURL: string;
}

export interface State {
  isOpen: boolean;
}

class ButtonAboutProject extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleButton = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  render() {
    const {
      version,
      productName,
      githubSourceCodeURL,
      githubIssuesURL,
      documentationURL,
      swaggerApiURL
    } = this.props;

    const { isOpen } = this.state;

    return (
      <React.Fragment>
        <Button
          id="aboutButton"
          aria-label="About button"
          variant={ButtonVariant.plain}
          onClick={this.toggleButton}
        >
          <HelpIcon />
        </Button>
        <AboutModal
          isOpen={isOpen}
          onClose={this.toggleButton}
          trademark="COPYRIGHT © 2020. PROJECT OPENUBL"
          brandImageSrc={brandImg}
          brandImageAlt="Logo"
          productName={productName}
        >
          <TextContent>
            <TextList component="dl">
              <TextListItem component="dt">Version</TextListItem>
              <TextListItem component="dd">{version}</TextListItem>
              <TextListItem component="dt">Source code</TextListItem>
              <TextListItem component="dd">
                <a href={githubSourceCodeURL}>Github</a>
              </TextListItem>
              <TextListItem component="dt">Report issues</TextListItem>
              <TextListItem component="dd">
                <a href={githubIssuesURL}>Github issues</a>
              </TextListItem>
              <TextListItem component="dt">Documentation</TextListItem>
              <TextListItem component="dd">
                <a href={documentationURL}>Documentation</a>
              </TextListItem>
              <TextListItem component="dt">Videos</TextListItem>
              <TextListItem component="dd">
                <a href="https://www.youtube.com/channel/UChq3xxjyDgjcU346rp0bbtA/">
                  Youtube
                </a>
              </TextListItem>
              <TextListItem component="dt">Rest API documentation</TextListItem>
              <TextListItem component="dd">
                <a href={swaggerApiURL}>Swaggerhub</a>
              </TextListItem>
              <TextListItem component="dt">Licence</TextListItem>
              <TextListItem component="dd">
                <a href="https://github.com/project-openubl/xml-builder/blob/master/LICENSE">
                  Eclipse Public License - v 2.0
                </a>
              </TextListItem>
            </TextList>
          </TextContent>
        </AboutModal>
      </React.Fragment>
    );
  }
}

export default ButtonAboutProject;
