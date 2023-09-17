import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  // Get the initial value from local storage or use the provided initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error getting item from local storage:', error);
      return initialValue;
    }
  });

  // Function to update the local storage value and the state value
  const setValue = (value) => {
    try {
      // Allow value to be a function (useful for complex state updates)
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Save state
      setStoredValue(valueToStore);

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting item in local storage:', error);
    }
  };

  return [storedValue, setValue];
}
