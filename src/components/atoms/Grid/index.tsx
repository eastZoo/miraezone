import * as S from "./Grid.style";
import type { ColDef, ColGroupDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import { forwardRef } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([AllCommunityModule]);

interface GridProps {
  columnDefs: (ColDef | ColGroupDef)[];
  rowData: any[];
  height?: number | string;
  rowSelection?: any;
  rowHeight?: number;
  headerHeight?: number;
  groupHeaderHeight?: number;
}

const Grid = forwardRef<any, GridProps>(
  (
    {
      columnDefs,
      rowData,
      height = 400,
      rowSelection,
      rowHeight = 54,
      headerHeight = 45,
      groupHeaderHeight = 60,
    },
    ref
  ) => {
    return (
      <S.GridBox>
        <S.GridWrapper
          rowHeight={rowHeight}
          headerHeight={headerHeight}
          groupHeaderHeight={groupHeaderHeight}
        >
        <div className="ag-theme-quartz" style={{ height, width: '100%' }}>
          <AgGridReact
            ref={ref}
            rowData={rowData}
            columnDefs={columnDefs}
            rowHeight={rowHeight}
            headerHeight={headerHeight}
            groupHeaderHeight={groupHeaderHeight}
            rowSelection={rowSelection}
            suppressColumnVirtualisation={true}
            suppressAutoSize={true}
          />
        </div>
        </S.GridWrapper>
      </S.GridBox>
    );
  }
);

Grid.displayName = "Grid";

export default Grid;
