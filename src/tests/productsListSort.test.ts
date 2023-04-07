import {describe, expect, test} from '@jest/globals';
import { productsListSort } from '../functions/productsListSort';
import { testItemsList, descendingPrice, ascendingPrice, descendingName, ascendingName } from './productsListSortData';

describe('Сортировка товаров', () => {
  test('По возрастанию цены', () => {
    expect(productsListSort(testItemsList, 'Цена ▲')).toEqual(descendingPrice);
  });
  test('По убыванию цены', () => {
    expect(productsListSort(testItemsList, 'Цена ▼')).toEqual(ascendingPrice);
  });
  test('По возрастанию названия', () => {
    expect(productsListSort(testItemsList, 'Название ▲')).toEqual(descendingName);
  });
  test('По убыванию названия', () => {
    expect(productsListSort(testItemsList, 'Название ▼')).toEqual(ascendingName);
  });
});
