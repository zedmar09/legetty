import Typography from '@components/Typography/Typography';
import React from 'react';

interface EmptyStateProps {
  imageUrl?: string;
  title?: string;
  actionText?: string;
  onActionClick?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = (props) => {
  const {
    imageUrl = '/empty-states/default.svg',
    title = 'No data found!',
    actionText = 'Refresh',
    onActionClick,
  } = props;

  const handleActionClick = () => {
    onActionClick?.();
  };

  return (
    <div className="w-full flex flex-1 flex-col justify-center py-10 items-center">
      <img src={imageUrl} alt="not content" />
      <Typography variation="title2" className="text-darker mt-8">
        {title}
      </Typography>
      <button onClick={handleActionClick}>
        <Typography variation="title3" className="text-mainBlue mt-2 cursor-pointer">
          {actionText}
        </Typography>
      </button>
    </div>
  );
};

export default EmptyState;
