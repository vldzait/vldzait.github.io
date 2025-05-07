import { Operation } from 'src/types/Operation.type';
import { Category } from 'src/types/Category.type';
import { Product } from 'src/types/Product.type';

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (): Product => {
  return {
    id: genereteID(),
    name: genereteName('Продукт'),
    photo: generetePhotoLink(),
    desc: genereteDesc(),
    createdAt: new Date().toDateString(),
    oldPrice: Math.floor(Math.random() * 1000),
    price: Math.floor(Math.random() * 1000),
    category: createRandomCategory(),
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (): Operation => {
  const type = Math.floor(Math.random() * 2) === 0 ? 'Cost' : 'Profit';
  return {
    id: genereteID(),
    name: genereteName(type),
    desc: genereteDesc(),
    createdAt: new Date().toDateString(),
    amount: Math.floor(Math.random() * 1000),
    category: createRandomCategory(),
    type: type,
  };
};

// services
/**
 * Создает случайный id.
 * */
const genereteID = (): string => Math.random().toString(36).substring(2, 9);

/**
 * Создает случайный name.
 * Принимает тип для чего создается name (строка)
 * */
const genereteName = (type: string): string => `${type} ${Math.floor(Math.random() * 101)}`;

/**
 * Создает случайную ссылку на фото.
 * */
const generetePhotoLink = (): string => `https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg`;

/**
 * Создает случайное описание.
 * */
const genereteDesc = (): string => `Описание ${Math.random()}`;

/**
 * Создает случайный продукт (Category).
 * */
export const createRandomCategory = (): Category => {
  return {
    id: genereteID(),
    name: genereteName('Категория'),
    photo: generetePhotoLink(),
  };
};
