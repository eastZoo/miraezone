import styled from "styled-components";

export const GridBox = styled.div`
  overflow: auto;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 147px;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;

  .ag-theme-quartz {
    width: 100%;
    height: calc(100% - 48px);
    min-height: 100px;

    --ag-row-height: 56px;
    --ag-header-height: 44px;

    .ag-overlay-panel {
      padding-top: 40px;
    }

    // 추가
    .ag-header-container,
    .ag-body-viewport {
      min-width: 100% !important;
    }

    .ag-header-viewport {
      overflow: hidden !important;
    }

    .ag-center-cols-viewport {
      overflow-x: auto !important;
    }
  }
`;

export const GridWrapper = styled.div<{
  rowHeight?: number;
  headerHeight?: number;
  groupHeaderHeight?: number;
}>`
  
  height: 100%;
  .ag-root-wrapper {
    border: none;

    // GRID 헤더 배경색/높이 변경
    .ag-header {
      background: #eeeeee;
      border: none;

      .ag-header-row {
        .ag-header-cell {
          padding: 0 12px;
          border-right: 1px solid #e5e5e5;

          &:last-child {
            border-right: none;
          }

          .ag-header-cell-resize {
            &::after {
              width: 1px;
              background: ${(props) => props.theme.colors.black5};
            }
          }

          .ag-header-cell-label {
            display: flex;
            align-items: center;
            justify-content: center;

            .ag-header-cell-text {
              color: #333;
              font-size: 1.4rem;
              letter-spacing: 0;
            }
          }
        }

        .ag-header-group-cell {
          justify-content: center;
          color: #333;
          font-size: 1.4rem;
          letter-spacing: 0;
          border-right: 1px solid #e5e5e5;

          &:last-child {
            border-right: none;
          }
        }
      }
    }

    // GRID 내용 높이/border color 지정
    .ag-body {
      min-height: 50px;

      .ag-row {
        border-color: #e5e5e5;
        border-bottom: 1px solid #e5e5e5;

        &:last-child {
          border-bottom: none;
        }

        &:nth-child(even) {
          background-color: #f7f7f7;
        }
        &.ag-row-hover:not(.ag-full-width-row)::before,
        &.ag-row-hover.ag-full-width-row.ag-row-group::before {
          background-color: #ddd !important;
        }

        &.ag-row-selected {
          background-color: transparent !important;
        }

        &.ag-row-selected::before {
          background-color: transparent !important;
        }

        .ag-cell {
          padding: 12px;
          height: auto;
          color: #333;
          font-size: 1.4rem;
          letter-spacing: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #e5e5e5;

          &:last-child {
            border-right: none;
          }

          .ag-selection-checkbox {
            margin-right: 0;
          }
        }
      }
    }
  }
`;
