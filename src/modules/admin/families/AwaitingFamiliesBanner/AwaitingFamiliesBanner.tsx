import Button from '@components/Button/Button';
import BallIcon from '@components/Icons/BallIcon';
import Typography from '@components/Typography/Typography';
import { breakpoints } from '@core/config/app';
import API from '@core/services';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface AwaitingFamiliesBannerProps {
  onClick: () => void;
}

const AwaitingFamiliesBanner: React.FC<AwaitingFamiliesBannerProps> = (props) => {
  const { onClick } = props;

  const { isLoading, data } = useQuery(
    ['families/not-requested-help'],
    API.admin.family.familyCountWithoutAgents
  );

  const isMobile = useMediaQuery({ query: `(max-width: ${breakpoints.lg})` });

  return (
    <div className="shadow-xl border-b border-gray-100 bg-white px-4">
      <div className="max-w-7xl mx-auto py-2 flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0">
        <div className="flex items-center">
          <BallIcon />
          <Typography variation="title3" className="text-darker ml-2">
            {isLoading ? 'loading..' : data?.count || 0} families await financial assistance without
            assigned financial agent.
          </Typography>
        </div>
        <Button onClick={onClick} size="small" variation={isMobile ? 'link' : 'dashboard'}>
          Show Families
        </Button>
      </div>
    </div>
  );
};

export default AwaitingFamiliesBanner;
