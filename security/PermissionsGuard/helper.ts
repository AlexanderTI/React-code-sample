export const contains = (where: Array<string>, what: Array<string>): boolean => {
  for (let i = 0; i < what.length; i++) {
    if (!where.includes(what[i])) return false
  }
  return true
}
