import React from 'react';
import { FlatList } from 'react-native';
import { Category } from './Category';

const categories = [
  { id: '1', title: 'Ranqueada', icon: 'trophy' },
  { id: '2', title: 'Duelo 1x1', icon: 'flash' },
  { id: '3', title: 'Diversão', icon: 'happy' },
  { id: '4', title: 'Cooperativo', icon: 'people' },
];

export function CategorySelect({ selected, setSelected, selectable = false }) {
  function handleSelect(categoryId) {
    if (!setSelected) return;
    setSelected(categoryId === selected ? '' : categoryId);
  }

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{ paddingHorizontal: 24, paddingRight: 40 }}
      renderItem={({ item }) => (
        <Category
          title={item.title}
          icon={item.icon}
          isSelected={item.id === selected}
          dimmed={selectable}
          onPress={() => handleSelect(item.id)}
        />
      )}
    />
  );
}
