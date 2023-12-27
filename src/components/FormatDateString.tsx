export const formatDateString = (inputDateString: Date) => {
  console.log(inputDateString);
  const inputDate = new Date(inputDateString);
  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, '0');
  const day = String(inputDate.getDate()).padStart(2, '0');

  console.log(inputDate);
  return `${year}/${month}/${day}`;
};
