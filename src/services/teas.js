import { SORT_ORDER } from '../constants/index.js';
import { TeaCollection } from '../db/models/tea.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllTeas = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const teasQuery = TeaCollection.find();

  if (filter.category) {
    teasQuery.where('category').equals(filter.category);
  }

  const [teasCount, teas] = await Promise.all([
    TeaCollection.find().merge(teasQuery).countDocuments(),
    teasQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(teasCount, perPage, page);
  return {
    data: teas,
    ...paginationData,
  };
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
