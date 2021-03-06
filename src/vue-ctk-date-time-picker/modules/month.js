import Moment from 'moment'
import { extendMoment } from 'moment-range'
const moment = extendMoment(Moment)

export default class Month {
  constructor (month, year) {
    this.start = moment([year, month])
    this.end = this.start.clone().endOf('month')
    this.month = month
    this.year = year
  }

  getWeekStart () {
    return this.start.weekday()
  }

  getDays () {
    return Array.from(moment.range(this.start, this.end).by('days'))
  }

  getFormatted (locale) {
    return this.start.locale(locale).format('MMMM YYYY')
  }

  getWeeks () {
    return this.end.week() - this.start.week() + 1
  }

  getMonthDays () {
    const r1 = moment.range(this.start, this.end).by('days')
    return Array.from(r1)
  }
}

export const getWeekDays = function (locale) {
  return moment.localeData(locale).weekdaysMin()
}
