import React from 'react';

import Typography, { TypographyProps } from '@components/Typography/Typography';
import { getErrorMessage } from '@utils/error';
import { cn } from '@utils/style';

interface ErrorMessageProps extends Partial<TypographyProps> {
  error: unknown;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { error, className, ...restProps } = props;

  let message = getErrorMessage(error);

  if (!error) message = ' ';

  return (
    <Typography className={cn('text-negativeAction my-2 font-normal', className)} {...restProps}>
      {message}
    </Typography>
  );
};

export default ErrorMessage;
