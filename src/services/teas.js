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

export const deleteTeaById = async (id) => {
  const tea = await TeaCollection.findByIdAndDelete(id);
  return tea;
};
