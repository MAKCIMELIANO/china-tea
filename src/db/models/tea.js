import { model, Schema } from 'mongoose';

const teaSchema = new Schema(
  {
    teaName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: 'Описание отсутствует.',
    },
    image: {
      type: String,
      default: 'Изображение отсутствует.',
    },
    category: {
      type: String,
      default: 'Неизвестно',
    },
    originCountry: {
      type: String,
      default: 'Страна происхождения отсутствует.',
    },
    teaStockInGrams: {
      type: Number,
      required: true,
    },
    deliveryPricePerGramInDollars: {
      type: Number,
      required: true,
    },
    purchasePricePerGramInChinaInDollars: {
      type: Number,
      required: true,
    },
    costPricePerGram: {
      type: Number,
      required: true,
    },
    salePriceInUkrainePerGramInDollars: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const TeaCollection = model('teas', teaSchema);
