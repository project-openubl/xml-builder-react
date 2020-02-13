import * as React from 'react';
import { Table, TableHeader, TableBody, ICell } from "@patternfly/react-table";
import { ErrorCircleOIcon } from "@patternfly/react-icons";
import {
  Card,
  CardBody,
  Bullseye,
  EmptyState,
  EmptyStateIcon,
  Title,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  Button
} from "@patternfly/react-core";

export interface TableErrorProps {
  columns: (ICell | string)[];
  onRetry?: (event?: any) => void;
}

interface State {}

export class TableError extends React.Component<TableErrorProps, State> {
  render() {
    const { columns, onRetry } = this.props;
    return (
      <React.Fragment>
        <Table cells={columns} rows={[]} aria-label="Error table">
          <TableHeader />
          <TableBody />
        </Table>
        <Card>
          <CardBody>
            <Bullseye>
              <EmptyState>
                <EmptyStateIcon icon={ErrorCircleOIcon} />
                <Title headingLevel="h5" size="lg">
                  ¡Ocurrió un error durante la extracción de datos
                </Title>
                <EmptyStateBody>
                  Intente de nuevo o refresque la página.
                </EmptyStateBody>
                {onRetry && (
                  <EmptyStateSecondaryActions>
                    <Button variant="link" onClick={onRetry}>
                      Intentar de nuevo
                    </Button>
                  </EmptyStateSecondaryActions>
                )}
              </EmptyState>
            </Bullseye>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
