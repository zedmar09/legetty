import EmptyState from '@components/EmptyState/EmptyState';
import ErrorState from '@components/ErrorState/ErrorState';
import SelectAllCheckbox from '@components/SelectAllCheckbox/SelectAllCheckbox';
import SelectRowCheckbox from '@components/SelectRowCheckbox/SelectRowCheckbox';
import Typography from '@components/Typography/Typography';
import { breakpoints, paginationConfig } from '@core/config/app';
import { cn } from '@utils/style';
import React, { useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Column, useTable } from 'react-table';

export interface Pagination {
  totalRecords: number;
  onPageChange?: (page: number) => void;
}

interface TableProps {
  loading?: boolean;
  error?: Error;
  columns: Column<any>[];
  data: any[] | undefined;
  className?: string;
  title?: string;
  primaryFieldsIndexes: number[];
  pagination?: Pagination;
  selectable?: boolean;
  selectedRows?: string;
  onRowClick?: (data: any) => void;
  renderHeader?: () => React.ReactNode;
  onSelect?: (selectedRows: string) => void;
  emptyTitle?: string;
  emptyImageUrl?: string;
  emptyActionText?: string;
  emptyActionClick?: () => void;
  rowClassName?: string;
  singleDataClassName?: string;
}

const Table: React.FC<TableProps> = (props) => {
  const {
    title,
    data = [],
    loading,
    error,
    className,
    pagination,
    primaryFieldsIndexes,
    selectable,
    selectedRows,
    onSelect,
    emptyActionClick,
    emptyActionText,
    emptyImageUrl,
    emptyTitle,
    onRowClick,
    renderHeader,
    rowClassName,
    singleDataClassName,
  } = props;
  const [currentPage, setCurrentPage] = useState(paginationConfig.defaultPage);
  const isMobile = useMediaQuery({ query: `(max-width: ${breakpoints.lg})` });

  const columns = useMemo(() => {
    if (selectable) {
      return [
        ...props.columns,
        {
          isSelectField: true,
          accessor: 'id',
          Header: () => {
            return (
              <SelectAllCheckbox
                firstRowId={data?.[0]?.id}
                rowsCount={data.length}
                selectedRows={String(selectedRows)}
                onSelect={onSelect}
              />
            );
          },
          Cell: (props: any) => {
            const { value } = props;

            return (
              <div
                className="py-4 px-4 sm:px-12 lg:px-0 lg:py-0"
                onClick={(e) => e.stopPropagation()}>
                <SelectRowCheckbox
                  value={value}
                  onSelect={onSelect}
                  selectedRows={String(selectedRows)}
                  rowIds={data.map((family) => family.id)}
                />
              </div>
            );
          },
        },
      ];
    }

    return props.columns;
  }, [onSelect, props.columns, selectable, selectedRows]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  let content: React.ReactNode = null;

  if (isMobile) {
    content = rows.map((row) => {
      prepareRow(row);
      const selectCell = row.cells.find((cell) => (cell.column as any).isSelectField);

      return (
        <tr
          {...row.getRowProps()}
          key={row.id}
          onClick={() => onRowClick?.(row.original)}
          className="cursor-pointer hover:bg-lightest4">
          <div
            key={row.id}
            className={`${cn(
              'flex justify-between items-center px-4',
              !selectable && 'pb-3 pt-4'
            )} `}>
            <div className="py-4">
              {primaryFieldsIndexes.map((index, _index) => {
                return (
                  <div key={index}>
                    <Typography
                      variation={_index === 0 ? 'title3' : 'description1'}
                      className={`${cn(_index === 0 ? 'text-darker' : 'text-dark')}`}>
                      {row.cells[index].render('Cell')}
                    </Typography>
                  </div>
                );
              })}
            </div>
            {selectCell && selectCell.render('Cell')}
          </div>
        </tr>
      );
    });
  } else {
    content = rows.map((row, index) => {
      prepareRow(row);
      return (
        <tr
          {...row.getRowProps()}
          key={row.id}
          onClick={() => !isMobile && onRowClick?.(row.original)}
          className="cursor-pointer hover:bg-lightest4">
          {row.cells.map((cell) => {
            return (
              <td {...cell.getCellProps()} key={cell.column.id} className={`text-dark`}>
                {cell.render('Cell')}
              </td>
            );
          })}
        </tr>
      );
    });
  }

  const totalPages = pagination && Math.ceil(pagination?.totalRecords / paginationConfig.pageSize);

  return (
    <div className={cn('sm:px-6 py-4 bg-white rounded-lg h-full flex flex-col', className)}>
      <div className="flex-grow flex flex-col">
        {renderHeader?.()}

        {title && (
          <div className="my-4">
            <Typography variation="title2">{title}</Typography>
          </div>
        )}

        <table className="table" {...getTableProps()}>
          <thead className={cn('text-left', isMobile && 'hidden')}>
            {headerGroups.map((headerGroup) => {
              const { key } = headerGroup.getHeaderGroupProps();
              return (
                <tr key={key} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    const { key } = column.getHeaderProps();
                    return (
                      <th
                        {...column.getHeaderProps()}
                        key={key}
                        className="text-title3 text-darker font-normal">
                        {column.render('Header')}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>{!loading && content}</tbody>
        </table>

        {loading && (
          <div className="w-full flex py-56 flex-1 justify-center items-center">
            <span className="loader" />
          </div>
        )}

        {error && <ErrorState errorMessage={error.message} onActionClick={emptyActionClick} />}
        {!loading && data.length < 1 && !error && (
          <EmptyState
            title={emptyTitle}
            imageUrl={emptyImageUrl}
            actionText={emptyActionText}
            onActionClick={emptyActionClick}
          />
        )}
      </div>

      {!loading && data.length > 0 && pagination && totalPages && totalPages > 1 && (
        <div className="flex justify-center space-x-2 py-4">
          {Array.from({ length: totalPages }).map((_, index) => {
            const handlePageChange = () => {
              if (currentPage !== index + 1) {
                pagination?.onPageChange?.(index + 1);
              }
              setCurrentPage(index + 1);
            };

            return (
              <button
                key={index}
                onClick={handlePageChange}
                className={cn(
                  'h-6 w-6 rounded-full flex justify-center items-center text-mainBlue cursor-pointer border border-lightest3',
                  currentPage === index + 1 && 'bg-mainBlue text-white'
                )}>
                {index + 1}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Table;
