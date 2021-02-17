import {addDays, format} from 'date-fns';

export const dateSetter = (modifier=0, date = new Date()) => {
  if (modifier) {
    const ourDate = addDays(date, modifier);
    return [format(ourDate, 'MMMM d, yyyy'), ourDate];
  }
  return [format(date, 'MMMM d, yyyy'), date];
}
