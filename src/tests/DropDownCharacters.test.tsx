import React from "react";
import '@testing-library/jest-dom/extend-expect'; 
import { render, screen, fireEvent } from "@testing-library/react";
import DropDownCharacters from "../components/ProductCard/DropDownCharacters";

const testItem = {
    id: 1,
    URL: "https://www.podrygka.ru/upload/iblock/d0f/d0f4fbc5d6f1bb1ed6addc9171be88e5.jpg",
    name: "крем для рук",
    size_type: "объем",
    size: 60,
    barcode: 4604049097510,
    producer: "Grifon",
    brand: "бархатные ручки",
    description: "Насыщенный питательный крем устраняет сухость кожи и делает ее заметно мягче. Интенсивно разглаживая кожу, придает рукам ухоженный вид.",
    price: 533.35,
    types: ["уход за руками"]
}

describe('<DropDownCharacters />', () => {
  test('render DropDownCharacters', () => {
    render(<DropDownCharacters item={testItem} />);
    const dropDownDescriptionTitle = screen.getByText(/описание/i);
    const dropDownCharactersTitle = screen.getByText(/характеристики/i);
    expect(dropDownDescriptionTitle).toBeInTheDocument();
    expect(dropDownCharactersTitle).toBeInTheDocument();
  }),
  test('hendles onClick', () => {
    render(<DropDownCharacters item={testItem} />);

    expect(screen.queryByTestId('test_description')).toBeNull();
    expect(screen.queryByTestId('test_characters')).toBeNull();

    fireEvent.click(screen.getByTestId('description_title'));
    fireEvent.click(screen.getByTestId('characters_title'));

    expect(screen.queryByTestId('test_description')).toBeInTheDocument();
    expect(screen.queryByTestId('test_characters')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('description_title'));
    fireEvent.click(screen.getByTestId('characters_title'));

    expect(screen.queryByTestId('test_description')).toBeNull();
    expect(screen.queryByTestId('test_characters')).toBeNull();
  })
})



