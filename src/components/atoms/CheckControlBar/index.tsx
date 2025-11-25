import Button from "../Button";
import * as S from "./CheckControlBar.style";

interface CheckControllerBarProps {
  allSelected: boolean;
  someSelected: boolean;
  totalCount: number;
  selectedCount: number;
  onToggleAll: (checked: boolean) => void;
  onDeleteSelected: () => void;
  onDeleteAll: () => void;
  onExtraAction?: () => void;
  extraLabel?: string;
  showCheckAll?: boolean;
}

export const CheckControllerBar: React.FC<CheckControllerBarProps> = ({
  allSelected,
  someSelected,
  totalCount,
  selectedCount,
  onToggleAll,
  onDeleteSelected,
  onDeleteAll,
  onExtraAction,
  extraLabel,
  showCheckAll = true,
}) => {
  return (
    <S.ControllerBar>
      {showCheckAll &&
        <S.CheckAll>
          <input
            type="checkbox"
            checked={allSelected}
            ref={(el) => {
              if (el) el.indeterminate = someSelected;
            }}
            onChange={(e) => onToggleAll(e.target.checked)}
          />
          <span>전체선택</span>
        </S.CheckAll>
      }

      <S.ActionGroup>
        <Button
          size="xs"
          variant="outline"
          disabled={selectedCount === 0}
          onClick={onDeleteSelected}
        >
          선택삭제
        </Button>
        <Button
          size="xs"
          variant="outline"
          type="button"
          disabled={totalCount === 0}
          onClick={onDeleteAll}
        >
          전체삭제
        </Button>
        {onExtraAction && (
          <Button
            size="xs"
            variant="primary"
            type="button"
            disabled={selectedCount === 0}
            onClick={onExtraAction}
          >
            {extraLabel}
          </Button>
        )}
      </S.ActionGroup>
    </S.ControllerBar>
  );
};