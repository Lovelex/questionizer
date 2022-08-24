import { v4 } from 'uuid'

export function generateId(size = 32) {
  const uuid = v4()

  return uuid.replaceAll('-', '').slice(0, size)
}
