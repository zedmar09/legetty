import CloseIcon from '@components/Icons/CloseIcon';
import Select from '@components/Select/Select';
import API from '@core/services';
import { Disclosure } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import { College } from '@typings/model/college';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Props {
  multiSelect?: boolean;
  isSearchIcon?: boolean;
  setAllColleges?: React.Dispatch<React.SetStateAction<College[]>>;
  allColleges?: College[];
}

const CollegeBadge = (props: { name: string; onClick: () => void }) => {
  return (
    <div className="inline-flex items-center justify-between w-full space-x-2 text-description1 px-4 py-1 text-dark mb-2 mr-2">
      <span>{props?.name}</span>
      <button onClick={props?.onClick}>
        <CloseIcon fill="#666666" height="20" width="20" />
      </button>
    </div>
  );
};

const CollegeSearchCombobox = ({
  multiSelect = false,
  // isSearchIcon = false,
  setAllColleges,
  allColleges,
}: Props) => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const { isLoading, data: colleges } = useQuery(['family/colleges', search], () =>
    API.family.college.fetchColleges({ search })
  );

  const handleSelect = (value: string) => {
    const existingCollege = allColleges?.find((item) => item.id === value);
    if (!existingCollege) {
      const college = colleges?.data.find((item) => item.id === value);
      setAllColleges([...allColleges, college]);
    }
  };

  const onBadgeCloseIconClick = (id: string) => {
    const collegeArr = allColleges.filter((item) => item.id !== id);
    setAllColleges(collegeArr);
  };

  const options =
    colleges?.data.map((college) => ({
      label: college.name,
      value: college.id,
    })) || [];

  const handleSearch = (newValue: string) => {
    setSearch(newValue);
  };

  useEffect(() => {
    if (router && router.query.college && colleges) {
      handleSelect(router.query.college.toString());
    }
  }, [router, colleges]);

  return (
    <div>
      <Select
        placeholder="Enter College Name"
        options={options}
        value={
          router.query?.college?.toString() ||
          (allColleges && allColleges[allColleges?.length - 1]?.id) ||
          null
        }
        onChange={handleSelect}
        isLoading={isLoading}
        onInputChange={handleSearch}
      />

      {allColleges?.length > 0 && (
        <Disclosure>
          {({ open }) => (
            <div className="">
              <Disclosure.Panel className="mt-5">
                {allColleges?.map((college) => (
                  <CollegeBadge
                    key={college.id}
                    name={college.name}
                    onClick={() => onBadgeCloseIconClick(college.id)}
                  />
                ))}
              </Disclosure.Panel>
              {!open && (
                <div className="mt-5">
                  {allColleges?.slice(0, 8)?.map((college) => (
                    <CollegeBadge
                      key={college.id}
                      name={college.name}
                      onClick={() => onBadgeCloseIconClick(college.id)}
                    />
                  ))}
                </div>
              )}
              <Disclosure.Button className="text-description1 text-mainBlue cursor-pointer">
                <span>
                  {open
                    ? 'Show Less'
                    : `${allColleges?.length - 8 > 0 ? `+${allColleges?.length - 8} More` : ''} `}
                </span>
              </Disclosure.Button>
            </div>
          )}
        </Disclosure>
      )}
    </div>
  );
};

export default CollegeSearchCombobox;
