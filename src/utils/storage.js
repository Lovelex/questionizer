import { generateRandomNumber } from "./number";

const ITEMS = "items";

export function getParsedStorage(data) {
  return JSON.parse(localStorage.getItem(data));
}

export function setStringifiedStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export function saveItems(items) {
  return setStringifiedStorage(ITEMS, items);
}

export function loadItems() {
  return getParsedStorage(ITEMS);
}

export function getRandomItem() {
  const items = loadItems();

  const randNumber = generateRandomNumber(0, items.length)

  return items[randNumber]
}
