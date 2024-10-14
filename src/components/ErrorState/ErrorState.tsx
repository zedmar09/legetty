import Typography from '@components/Typography/Typography';
import React from 'react';

interface ErrorStateProps {
  errorMessage?: string;
  onActionClick?: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = (props) => {
  const { onActionClick, errorMessage } = props;

  return (
    <div className="w-full flex flex-1 justify-center items-center text-center">
      <div>
        <Typography variation="title2" className="my-2 font-bold text-negativeAction">
          Error fetching data
        </Typography>
        {errorMessage && <Typography className="text-dark">{errorMessage}</Typography>}
        <button onClick={onActionClick}>
          <Typography variation="title3" className="text-mainBlue mt-2 cursor-pointer">
            Try again to refresh
          </Typography>
        </button>
      </div>
    </div>
  );
};

export default ErrorState;
