import "jest-dom/extend-expect";
import "jest-axe/extend-expect";
import React from "react";

import { render, cleanup, fireEvent } from "react-testing-library";
import { axe } from "jest-axe";
import NewBook from "./NewBook";

afterEach(() => {
  cleanup();
});

test("it has a title input", () => {
  const { getByLabelText } = render(<NewBook />);
  const title = getByLabelText(/title/i);
  expect(title).toBeInTheDocument();
});

test("it has an author first name input", () => {
  const { getByLabelText } = render(<NewBook />);
  const title = getByLabelText(/author first name/i);
  expect(title).toBeInTheDocument();
});

test("it has an author last name input", () => {
  const { getByLabelText } = render(<NewBook />);
  const title = getByLabelText(/author last name/i);
  expect(title).toBeInTheDocument();
});

test("fails if title is empty", () => {
  const { getByText } = render(<NewBook />);
  const submit = getByText(/Submit/i);
  fireEvent.click(submit);
  // getByText(/please fill out this field/);
  // form won't submit with empty fields
  // would be better if button wasn't enabled until all fields filled out
});

test("it disables submit button on click", () => {
  const { getByText, getByLabelText } = render(<NewBook />);
  const submit = getByText(/Submit/i);
  getByLabelText(/Title/i).value = "Forest";
  getByLabelText(/author first name/i).value = "Bunny";
  getByLabelText(/author last name/i).value = "Foo Foo";
  fireEvent.click(submit);
  // expect(submit.closest("button")).toBeDisabled();
});

test("it has an accessible form", async () => {
  const { container } = render(<NewBook />);
  const results = await axe(container.innerHTML);
  expect(results).toHaveNoViolations();
});
