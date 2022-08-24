const ITEMS = "items"

export function getParsedStorage(data) {
  return JSON.parse(localStorage.getItem(data))
}

export function saveStringifiedStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}

export function saveItems(items) {
  saveStringifiedStorage(ITEMS, JSON.stringify(items))
}

export function loadItems() {
  return getParsedStorage(ITEMS);
}
