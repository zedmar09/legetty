import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import API from '@core/services';
import { useMutation } from '@tanstack/react-query';
import React from 'react';

interface Props {
  text: string;
}

const DetailsFooter: React.FC<Props> = (props) => {
  const { text } = props;

  const { mutate: talkTOExport } = useMutation(
    ['/family/profile/done-onboarding'],
    API.family.college.talkTOExport
  );

  return (
    <div className="bg-lightest4">
      <div className="max-w-5xl mx-auto text-darker px-4 sm:px-10 lg:px-0 flex flex-col sm:flex-row sm:items-center space-y-4 lg:space-y-0 py-6 justify-between">
        <Typography variation="title3">{text}</Typography>
        <Button
          size="small"
          onClick={() => {
            talkTOExport();
            window.open('https://meetings.hubspot.com/lancemorgan/college-cost-secrets', '_blank');
          }}>
          Talk To an expert
        </Button>
      </div>
    </div>
  );
};

export default DetailsFooter;
