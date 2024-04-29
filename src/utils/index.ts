export function dateFormatter(_date: string): string {
  const date = new Date(_date)
  const year = date.getFullYear()
  let month = (date.getMonth() + 1).toString()
  if (month.length === 1) month = `0${month}`
  const day = date.getDate();
  return `${day}.${month}.${year}`;
}