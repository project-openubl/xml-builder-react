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

export interface Props {
  columns: (ICell | string)[];
  onClearAllFilters?: (event?: any) => void;
}

export interface State {}

class TableEmpty extends React.Component<Props, State> {
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
                  búsqueda selecionado. Elimine todos los filtros para ver los
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

export default TableEmpty;
