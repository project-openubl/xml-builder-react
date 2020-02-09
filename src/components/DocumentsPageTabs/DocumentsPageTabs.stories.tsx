import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import DocumentsPageTabs from "./DocumentsPageTabs";

storiesOf("Tabs. Documents", module)
  .add("Tab0 selected", () => (
    <DocumentsPageTabs
      activeKey={0}
      onTabSelect={event => {
        action("event");
      }}
    >
      <p>Document form</p>
    </DocumentsPageTabs>
  ))
  .add("Tab1 selected", () => (
    <DocumentsPageTabs
      activeKey={1}
      onTabSelect={event => {
        action("event");
      }}
    >
      <p>Document form</p>
    </DocumentsPageTabs>
  ))
  .add("Add top section", () => (
    <DocumentsPageTabs
      activeKey={0}
      onTabSelect={event => {
        action("event");
      }}
      topPageSection={<p>Additional section on top</p>}
    >
      <p>Document form</p>
    </DocumentsPageTabs>
  ));
