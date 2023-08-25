export function convertDate(timeStamp: number) {
  const date = new Date(timeStamp * 1000)

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  let monthName = ''

  const year = date.getFullYear()
  const day = date.getDate()

  months.forEach((month, i) => {
    if (i === date.getMonth()) {
      monthName = months[i]
    }
  })

  return `${monthName} ${day}, ${year}`
}
