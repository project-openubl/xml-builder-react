import * as React from "react";
import {
  PageHeader,
  Brand,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from "@patternfly/react-core";
import { css } from "@patternfly/react-styles";
import accessibleStyles from "@patternfly/react-styles/css/utilities/Accessibility/accessibility";
import imgBrandNavBar from "../../../styles/assets/images/logo-navbar.svg";

export interface HeaderProjectProps {
  aboutButton: React.ReactNode;
}

interface State {}

export class HeaderProject extends React.Component<HeaderProjectProps, State> {
  renderPageToolbar = () => {
    const { aboutButton } = this.props;
    return (
      <React.Fragment>
        <Toolbar>
          <ToolbarGroup
            className={css(
              accessibleStyles.screenReader,
              accessibleStyles.visibleOnLg
            )}
          >
            <ToolbarItem>{aboutButton}</ToolbarItem>
          </ToolbarGroup>
        </Toolbar>
      </React.Fragment>
    );
  };

  render() {
    return (
      <PageHeader
        logo={<Brand src={imgBrandNavBar} alt="Project OpenUBL" />}
        toolbar={this.renderPageToolbar()}
        showNavToggle
      />
    );
  }
}
