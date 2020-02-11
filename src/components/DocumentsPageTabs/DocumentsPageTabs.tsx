import * as React from 'react';
import {
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
  Tabs,
  Tab
} from "@patternfly/react-core";

export interface DocumentsPageTabsProps {
  activeKey: number;
  onTabSelect: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    eventKey: number | string
  ) => void;
  topPageSection?: React.ReactNode;
}

export const DocumentsPageTabs: React.FC<DocumentsPageTabsProps> = ({
  activeKey,
  onTabSelect,
  topPageSection,
  children
}) => {
  return (
    <React.Fragment>
      {topPageSection}
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">Comprobantes electrónicos</Text>
          <Text component="small">
            Acá podras simular la creación de comprobantes electrónicos.
          </Text>
        </TextContent>
        <br />
        <Tabs isFilled activeKey={activeKey} onSelect={onTabSelect}>
          <Tab eventKey={0} title="Documentos básicos"></Tab>
          <Tab eventKey={1} title="Baja"></Tab>
        </Tabs>
      </PageSection>
      <PageSection>{children}</PageSection>
    </React.Fragment>
  );
};
