import React from "react";
import renderer from "react-test-renderer";
import Form from "../form";
import { Provider } from "react-redux";
import { store } from "../store/store";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Form />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
