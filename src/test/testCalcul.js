import React from "react";
import { render, screen } from "@testing-library/react";
import Calculatrice, { add, sub, mul, div } from "../components/calculatrice";

test("renders calculator component", () => {
    render(<Calculatrice />);
    const titleElement = screen.getByText(/Calculatrice/i);
    expect(titleElement).toBeInTheDocument();
});

test("adds two numbers", () => {
    expect(add(5, 3)).toBe(8);
});

test("subtracts two numbers", () => {
    expect(sub(2, 3)).toBe(-1);
});

test("multiplies two numbers", () => {
    expect(mul(2, 3)).toBe(6);
});

test("divides two numbers", () => {
    expect(div(2, 3)).toBeCloseTo(0.67, 2);
});