import React from "react";
import renderer from "react-test-renderer";
import Home from "../Screens/home";
import { Provider } from "react-redux";
import { store } from "../store/store";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
