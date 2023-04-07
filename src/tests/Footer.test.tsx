import React from "react";
import '@testing-library/jest-dom/extend-expect'; 
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer/Footer";


test('render footer', () => {
  render(<Footer />);
  const titleElement = screen.getByText(/меню/i);
  const linkElement = screen.getByText(/посуда/i);
  const contactsElement = screen.getByText(/в любое время/i);
  const inputEMail = screen.getByPlaceholderText(/e-mail/i);

  expect(titleElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
  expect(contactsElement).toBeInTheDocument();
  expect(inputEMail).toBeInTheDocument();
})

