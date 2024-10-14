export function getHumanDate(inputDate: string) {
  const currentDate = new Date();
  const inputDateObj = new Date(inputDate);

  // Calculate the time difference in milliseconds
  //@ts-ignore
  const timeDifference = currentDate - inputDateObj;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeek = 7 * oneDay;
  const oneMonth = 30 * oneDay;

  if (timeDifference < oneDay) {
    return 'Today';
  } else if (timeDifference < 2 * oneDay) {
    return 'Yesterday';
  } else if (timeDifference < oneWeek) {
    const daysAgo = Math.floor(timeDifference / oneDay);
    return `${daysAgo} days ago`;
  } else if (timeDifference < 2 * oneWeek) {
    return 'a week ago';
  } else if (timeDifference < oneMonth) {
    const weeksAgo = Math.floor(timeDifference / oneWeek);
    return `more than ${weeksAgo} week${weeksAgo > 1 ? 's' : ''} ago`;
  } else if (timeDifference >= oneMonth) {
    const formattedDate = inputDateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    return formattedDate;
  }
}
