const parseCategory = (category) => {
  const isString = typeof category === 'string';
  if (!isString || category.trim() === '') return;
  return category.trim();
};

export const parseFilterParams = (query) => {
  const { category } = query;

  const parsedCategory = parseCategory(category);

  return {
    category: parsedCategory,
  };
};
