import { DateTime } from 'luxon'

export function milisToDate(value) {
  return new DateTime(Date.now()).setLocale('br').toFormat("D")
}
