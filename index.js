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
