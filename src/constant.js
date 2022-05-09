const day = new Date()
const thisYear = day.getFullYear()
export const years = []

for (let i = 0; i < 100; i++) {
  const year = thisYear - i
  years.push(year)
}

export const groupArr = [
  {
    value: 'dog',
    label: '汪汪組'
  },
  {
    value: 'cat',
    label: '喵喵組'
  }
]
