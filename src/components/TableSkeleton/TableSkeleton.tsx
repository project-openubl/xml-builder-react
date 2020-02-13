import React from "react";
import { Table, TableHeader, TableBody, ICell } from "@patternfly/react-table";
import Skeleton from "@material-ui/lab/Skeleton";

export interface Props {
  colSize?: number;
  rowSize: number;
  columns?: ICell[];
}

export interface State {}

export class TableSkeleton extends React.Component<Props, State> {
  createColumns = () => {
    const { colSize } = this.props;
    return [...Array(colSize)].map(() => ({
      title: <Skeleton />
    }));
  };

  createRows = () => {
    const { colSize, rowSize, columns } = this.props;
    const numberOfCols = columns ? columns.length : colSize;
    return [...Array(rowSize)].map(() => ({
      cells: [...Array(numberOfCols)].map(() => ({
        title: <Skeleton />
      }))
    }));
  };

  render() {
    return (
      <Table
        cells={this.props.columns || this.createColumns()}
        rows={this.createRows()}
        aria-label="Loading"
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
