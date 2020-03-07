import { randRange } from './math'

export const shuffle = arr => arr.slice().sort(() => randRange(1))
export const sortAsc = arr => arr.slice().sort((a, b) => a - b)
export const sortDesc = arr => arr.slice().sort((a, b) => b - a)
