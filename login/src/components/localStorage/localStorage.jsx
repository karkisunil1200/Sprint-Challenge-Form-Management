import React, {useState} from 'react';

function useLocalStorage(key, initialValue) {
  const [storeValue, setStoreValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    setStoreValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storeValue, setValue];
}

export default useLocalStorage;
