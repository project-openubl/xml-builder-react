import * as React from 'react';
import { Table, TableHeader, TableBody, ICell } from "@patternfly/react-table";
import { SearchIcon } from "@patternfly/react-icons";
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

export interface TableEmptyProps {
  columns: (ICell | string)[];
  onClearAllFilters?: (event?: any) => void;
}

interface State {}

export class TableEmpty extends React.Component<TableEmptyProps, State> {
  render() {
    return (
      <React.Fragment>
        <Table cells={this.props.columns} rows={[]} aria-label="Empty table">
          <TableHeader />
          <TableBody />
        </Table>
        <Card>
          <CardBody>
            <Bullseye>
              <EmptyState>
                <EmptyStateIcon icon={SearchIcon} />
                <Title headingLevel="h5" size="lg">
                  No se encontraron resultados
                </Title>
                <EmptyStateBody>
                  No se encontraron resultados que correspondan al criterio de
                  búsqueda seleccionado. Elimine todos los filtros para ver los
                  resultados.
                </EmptyStateBody>
                <EmptyStateSecondaryActions>
                  {this.props.onClearAllFilters && (
                    <Button
                      variant="link"
                      onClick={this.props.onClearAllFilters}
                    >
                      Eliminar filtros
                    </Button>
                  )}
                </EmptyStateSecondaryActions>
              </EmptyState>
            </Bullseye>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
