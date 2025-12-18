import { TeaCollection } from '../db/models/tea.js';

export const getAllTeas = async () => {
  const teas = await TeaCollection.find();
  return teas;
};

export const getTeaById = async (id) => {
  const tea = await TeaCollection.findById(id);
  return tea;
};
