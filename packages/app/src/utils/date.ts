export const formatDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();

  const h = date.getHours();
  const min = `0${date.getMinutes()}`.slice(-2);

  return `${y}.${m}.${d} ${h}:${min}`;
};
