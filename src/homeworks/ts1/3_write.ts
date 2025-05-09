import { Operation } from '../../types/Operation.type';
import { Category } from '../../types/Category.type';
import { Product } from '../../types/Product.type';

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (): Product => {
  alert('1');
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
const genereteName = (type: string): string => `${type} ${Math.random()}`;

/**
 * Создает случайную ссылку на фото.
 * */
const generetePhotoLink = (): string => `www.random.com/${Math.random()}`;

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
