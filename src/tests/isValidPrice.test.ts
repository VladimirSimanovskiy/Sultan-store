import {describe, expect, test} from '@jest/globals';
import { isValidPrice } from '../functions/isValidPrice';

describe('Валидация цены', () => {
  test('Корректная цена', () => {
    expect(isValidPrice('123.12')).toBe(true);
  });
  test('"," вместо "."', () => {
    expect(isValidPrice('4233,22')).toBe(true);;
  });
  test('Целое число', () => {
    expect(isValidPrice('34253')).toBe(false);;
  });
  test('Один знак после "."', () => {
    expect(isValidPrice('123.2')).toBe(false);;
  });
  test('Более 2-х знаков после "."', () => {
    expect(isValidPrice('123.232')).toBe(false);;
  });
  test('Без целой части', () => {
    expect(isValidPrice('.12')).toBe(false);;
  });
});
