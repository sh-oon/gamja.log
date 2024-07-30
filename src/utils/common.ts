export const uniqueTags = (arr: string[][]): string[] => {
  const tags = arr.flat()
  return [...new Set(tags)]
}

/**
 * @description 날짜를 포맷에 맞게 변환합니다.
 * @param date
 * @param format
 * @param defaultValue
 */
export type DateFormat =
  | 'YYYY-MM-DD'
  | 'YYYY-MM-DD hh:mm:ss'
  | 'YY-MM-DD'
  | 'YY-MM-DD hh:mm:ss'
  | 'MM-DD'
  | 'MM-DD hh:mm:ss'
  | 'kr'
  | 'YYMMDD'

export function formatDate(date: string | number | Date, format: string, defaultValue: string = ''): string {
  if (!date) return defaultValue
  date = new Date(date)
  const pad = (num: number) => (num < 10 ? '0' + num : num)

  // 연도는 두 글자만 사용
  const yearFull = date.getFullYear()
  const year = yearFull.toString().substr(-2) // 연도의 마지막 두 자리
  const month = pad(date.getMonth() + 1) // 월은 0부터 시작하므로 +1이 필요합니다.
  const day = pad(date.getDate())
  const hour = pad(date.getHours())
  const minute = pad(date.getMinutes())
  const second = pad(date.getSeconds())

  if (format === 'YYYY-MM-DD') return `${yearFull}-${month}-${day}`
  if (format === 'YYYY-MM-DD hh:mm:ss') return `${yearFull}-${month}-${day} ${hour}:${minute}:${second}`
  if (format === 'YY-MM-DD') return `${year}-${month}-${day}`
  if (format === 'YYMMDD') return `${year}${month}${day}`
  if (format === 'YY-MM-DD hh:mm:ss') return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  if (format === 'MM-DD') return `${month}-${day}`
  if (format === 'MM-DD hh:mm:ss') return `${month}-${day} ${hour}:${minute}:${second}`
  if (format === 'kr') return `${yearFull}년 ${date.getMonth() + 1}월 ${date.getDate()}일`

  return format
    .replace(/YYYY/g, yearFull.toString())
    .replace(/EE/g, year)
    .replace(/MM/g, month.toString())
    .replace(/DD/g, day.toString())
    .replace(/hh/g, hour.toString())
    .replace(/mm/g, minute.toString())
    .replace(/ss/g, second.toString())
}
