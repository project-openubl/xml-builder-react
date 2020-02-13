import * as React from "react";
import {
  Card,
  CardBody,
  Stack,
  StackItem,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  Button,
  Tabs,
  Tab,
  CardHeader
} from "@patternfly/react-core";
import { DownloadIcon } from "@patternfly/react-icons";
import ReactJson from "react-json-view";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-xcode";

export interface DocumentRequestResponseProps {
  requestObj?: any;
  responseXML?: {
    xml: any;
    filename: string;
  };
  responseEnrichedObj?: any;
}

interface State {
  activeTab: number | string;
}

export class DocumentRequestResponseViewer extends React.Component<
  DocumentRequestResponseProps,
  State
> {
  constructor(props: DocumentRequestResponseProps) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  handleOnDownloadXml = () => {
    const { responseXML } = this.props;
    if (responseXML) {
      const downloadUrl = window.URL.createObjectURL(
        new Blob([responseXML.xml])
      );
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", responseXML.filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  handleOnTabClick = (event: any, tabIndex: number | string) => {
    this.setState({
      activeTab: tabIndex
    });
  };

  render() {
    const { requestObj, responseEnrichedObj, responseXML } = this.props;
    const { activeTab } = this.state;
    return (
      <Card>
        <CardBody>
          <Stack gutter="sm">           
            <StackItem>
              <Card>
                <CardHeader>Request</CardHeader>
                <CardBody>
                  {requestObj ? (
                    <ReactJson src={requestObj} name={false} />
                  ) : (
                    <small>No hay datos que mostrar</small>
                  )}
                </CardBody>
              </Card>
            </StackItem>
            <StackItem>
              <Card>
                <CardHeader>
                  <Toolbar>
                    <ToolbarGroup>
                      <ToolbarItem className="pf-u-mr-xl">Response</ToolbarItem>
                    </ToolbarGroup>
                    <ToolbarGroup>
                      <ToolbarItem className="pf-u-mx-md">
                        <Button
                          variant="plain"
                          onClick={this.handleOnDownloadXml}
                          isDisabled={!responseXML}
                        >
                          <DownloadIcon /> XML
                        </Button>
                      </ToolbarItem>
                    </ToolbarGroup>
                  </Toolbar>
                </CardHeader>
                <CardBody>
                  <Tabs
                    isFilled
                    activeKey={activeTab}
                    onSelect={this.handleOnTabClick}
                  >
                    <Tab eventKey={0} title="XML">
                      {responseXML ? (
                        <AceEditor
                          mode="xml"
                          theme="xcode"
                          onChange={() => {}}
                          name="xml"
                          editorProps={{ $blockScrolling: false }}
                          readOnly={true}
                          value={responseXML ? responseXML.xml : ""}
                          width="100" // This value does not really affect but avoid horizontal overflow
                        />
                      ) : (
                        <small>No hay datos que mostrar</small>
                      )}
                    </Tab>
                    <Tab eventKey={1} title="Enriched">
                      {responseEnrichedObj ? (
                        <ReactJson src={responseEnrichedObj} name={false} />
                      ) : (
                        <small>No hay datos que mostrar</small>
                      )}
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </StackItem>
          </Stack>
        </CardBody>
      </Card>
    );
  }
}
