function getFromStorage(itemName) {
  if(!isStorageAvailible('localStorage')) return;
  const res = localStorage.getItem(itemName);
  if (res === null) return [];
  return JSON.parse(res);
}

function storeToStorage(name, value) {
  if(!isStorageAvailible('localStorage')) return;
  localStorage.setItem(name, JSON.stringify([...value]));
}

function isStorageAvailible(type) {
  try {
    let storage = window[type],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return false;
  }
}

export { getFromStorage, storeToStorage }