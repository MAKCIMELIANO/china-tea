import {
  getAllTeas,
  getTeaById,
  createTea,
  deleteTea,
  updateTea,
} from '../services/teas.js';
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

export const deleteTeaController = async (req, res, next) => {
  const { id } = req.params;

  const tea = await deleteTea(id);

  if (!tea) {
    throw createHttpError(404, `Tea with id ${id} not found!`);
  }

  res.status(204).send();
};

export const upsertTeaController = async (req, res, next) => {
  const { id } = req.params;

  const result = await updateTea(id, req.body, {
    upsert: true,
  });

  if (!result) {
    next(createHttpError(404, `Tea with id ${id} not found!`));
    return;
  }

  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: `Successfully ${
      result.isNew ? 'created' : 'updated'
    } tea with id ${id}!`,
    data: result.tea,
  });
};

export const patchTeaController = async (req, res, next) => {
  const { id } = req.params;
  const result = await updateTea(id, req.body);

  if (!result) {
    next(createHttpError(404, `Tea with id ${id} not found!`));
    return;
  }

  res.status(200).json({
    status: 200,
    message: `Successfully updated tea with id ${id}!`,
    data: result.tea,
  });
};
