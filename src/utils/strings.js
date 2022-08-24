import { v4 } from 'uuid'

export function generateId() {
  const uuid = v4()

  return uuid.replaceAll('-', '')
}
