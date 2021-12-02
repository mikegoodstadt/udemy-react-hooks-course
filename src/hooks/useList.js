import { useState } from 'react';

function useList(init) {
  const [list, setList] = useState(init);

  return {
    list,
    removeItem(item) {
      const filteredList = list.filter((v) => v.name !== item);
      setList(filteredList);
    },
    saveItem(index, newVal) {
      setList(
        list.map((item, k) => (k === index ? { ...item, name: newVal } : item))
      );
    },
  };
}

export default useList;
