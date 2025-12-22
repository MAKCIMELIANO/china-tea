import Joi from 'joi';

export const teaSchema = Joi.object({
  teaName: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  category: Joi.string().required(),
  originCountry: Joi.string().required(),
  teaStockInGrams: Joi.number().required(),
  deliveryPricePerGramInDollars: Joi.number().required(),
  purchasePricePerGramInChinaInDollars: Joi.number().required(),
  costPricePerGram: Joi.number().required(),
  salePriceInUkrainePerGramInDollars: Joi.number().required(),
});

export const updateTeaSchema = Joi.object({
  teaName: Joi.string(),
  description: Joi.string(),
  image: Joi.string(),
  category: Joi.string(),
  originCountry: Joi.string(),
  teaStockInGrams: Joi.number(),
  deliveryPricePerGramInDollars: Joi.number(),
  purchasePricePerGramInChinaInDollars: Joi.number(),
  costPricePerGram: Joi.number(),
  salePriceInUkrainePerGramInDollars: Joi.number(),
});
