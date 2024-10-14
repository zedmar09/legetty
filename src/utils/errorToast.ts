import { showToast } from '@core/config/toast';
import { AxiosError } from 'axios';

interface ErrorToastProps {
  error: unknown;
  name: string;
}

function handleInviteError({ error, name }: ErrorToastProps): void {
  let errorMessage: string = '';

  if (error instanceof AxiosError) {
    if (error?.response?.status === 409) {
      if (
        error?.response?.data?.error?.description ===
        'The email address is already in use by another account.'
      ) {
        errorMessage = 'The email address is already in use by another account.';
      } else {
        errorMessage = 'The email address or phone number is already in use by another account.';
      }
    } else {
      errorMessage = `Unable to invite ${name}, please try again!`;
    }
  } else {
    errorMessage = `Unable to invite ${name}, please try again!`;
  }

  showToast(errorMessage);
}

export default handleInviteError;
