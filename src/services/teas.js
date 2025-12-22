import { TeaCollection } from '../db/models/tea.js';

export const getAllTeas = async () => {
  const teas = await TeaCollection.find();
  return teas;
};

export const getTeaById = async (id) => {
  const tea = await TeaCollection.findById(id);
  return tea;
};

export const createTea = async (data) => {
  const tea = await TeaCollection.create(data);
  return tea;
};

export const deleteTea = async (id) => {
  const tea = await TeaCollection.findByIdAndDelete(id);
  return tea;
};

export const updateTea = async (id, data, options) => {
  const tea = await TeaCollection.findOneAndUpdate({ _id: id }, data, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });
  if (!tea || !tea.value) return null;
  return {
    tea: tea.value,
    isNew: Boolean(tea?.lastErrorObject?.upserted),
  };
};
