export function zip (value) {
  if (!value) {
    return value
  }
  
  const num = value.replace(/[^\d]/g, '')
  
  switch (true) {
    case ((num.length >= 1) && (num.length <= 5)):
      return `${num}`
      break
    case ((num.length >= 5) && (num.length <= 8)):
    case ((num.length > 8)):
      return `${num.slice(0, 5)}-${num.slice(5, 8)}`
      break
  }
}

export function date (value) {
  if (!value) {
    return value
  }

  const num = value.replace(/[^\d]/g, '')

  switch (true) {
    case (num.length === 1 || num.length === 2):
      return `${num}`

    case ((num.length >= 3) && (num.length <= 4)):
      return `${num.slice(0, 2)}/${num.slice(2)}`

    case (num.length >= 5):
      return `${num.slice(0, 2)}/${num.slice(2, 4)}/${num.slice(4, 8)}`
  }
}
