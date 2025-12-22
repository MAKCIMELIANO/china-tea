import { getAllTeas, getTeaById, createTea } from '../services/teas.js';
import createHttpError from 'http-errors';

export const getTeasController = async (req, res, next) => {
  const teas = await getAllTeas();

  res.json({
    status: 200,
    message: 'Successfully found teas!',
    data: teas,
  });
};

export const getTeaByIdController = async (req, res, next) => {
  const { id } = req.params;
  const tea = await getTeaById(id);

  if (!tea) {
    throw createHttpError(404, `Tea with id ${id} not found!`);
  }

  res.json({
    status: 200,
    message: `Successfully found tea with id ${id}!`,
    data: tea,
  });
};

export const createTeaController = async (req, res) => {
  const tea = await createTea(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created tea!',
    data: tea,
  });
};
