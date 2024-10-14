import { paginationConfig } from '@core/config/app';
import API from '@core/services';
import { useInfiniteQuery } from '@tanstack/react-query';
import { CollegeFilters } from '@typings/filters/college';
import { College } from '@typings/model/college';
import { getErrorMessage } from '@utils/error';
import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import CollegeCard from '../CollegeCard/CollegeCard';

interface ScoresSearchProps {
  filters: CollegeFilters;
  allColleges: College[];
}

const ScoresSearch = (props: ScoresSearchProps) => {
  const { filters, allColleges } = props;

  const {
    isLoading,
    isError,
    error,
    data: colleges,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['family/colleges', filters],
    ({ pageParam = 1 }) =>
      API.family.college.fetchColleges({
        ...(filters.state && { state: filters.state }),
        ...(filters.college_level && { college_level: filters.college_level }),
        ...(filters.college_type && { college_type: filters.college_type }),
        ...(filters.gpa && { gpa: filters.gpa }),
        ...(filters.act && { act: filters.act }),
        ...(filters.sat && { sat: filters.sat }),
        ...(filters.major_code && {
          major_code: filters.major_code,
        }),
        ...(filters.acceptance_rate_min && {
          acceptance_rate_min: filters.acceptance_rate_min,
          acceptance_rate_max: filters.acceptance_rate_max,
        }),
        ...(filters.college_size_min && {
          college_size_min: filters.college_size_min,
          college_size_max: filters.college_size_max,
        }),
        pageParam,
      }),
    {
      getNextPageParam: (lastPage, pages) => {
        const maxAllowedPage = Math.ceil(lastPage.totalRecords / paginationConfig.pageSize);
        return pages.length === maxAllowedPage ? null : pages.length + 1;
      },
    }
  );

  let content: React.ReactNode = null;
  const items = colleges ? colleges.pages.flat() : [];

  if (isLoading) {
    content = (
      <div className="h-[80vh] w-full grid place-items-center">
        <span className="loader" />
      </div>
    );
  } else if (isError) {
    content = (
      <div className="flex justify-center items-center h-full">
        <span className="text-negativeAction">{getErrorMessage(error)}</span>
      </div>
    );
  } else if (colleges.pages.length === 0) {
    content = (
      <div className="flex justify-center items-center h-full">
        <span className="my-6 py-80 w-full rounded-lg text-center text-gray-700">
          No College Found
        </span>
      </div>
    );
  } else {
    content = (
      <div>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={
            <div className="py-16 w-full grid place-items-center">
              <span className="loader" />
            </div>
          }>
          <div className="mt-8 pb-4 md:pb-10 grid  lg:grid-cols-2 gap-6">
            {colleges.pages.map((page, pageIndex) => (
              <Fragment key={pageIndex}>
                {page.data.map((college) => (
                  <CollegeCard key={college.id} college={college} />
                ))}
              </Fragment>
            ))}
          </div>
        </InfiniteScroll>
        <div>{isFetching && !isFetchingNextPage ? 'Background Updating...' : null}</div>
      </div>
    );

    content = <div>{content}</div>;
  }

  return <div>{content}</div>;
};

export default ScoresSearch;
