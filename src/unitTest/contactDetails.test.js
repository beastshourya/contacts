import React from "react";
import renderer from "react-test-renderer";
import ContactDetails from "../contactDetails";
import { Provider } from "react-redux";
import { store } from "../store/store";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ContactDetails navigation={{ getParam: jest.fn() }} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
