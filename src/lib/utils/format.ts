const dateFormat = Intl.DateTimeFormat('en-CA', {
  month: 'short',
  year: 'numeric',
});

export const formatDate = (date: Date) => dateFormat.format(date);
