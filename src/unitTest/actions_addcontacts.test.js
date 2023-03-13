import { mainReducer } from "../store/reducers";
import { initialState } from "../store/reducers";

import { setName } from "../store/actions";

it("setName()", () => {
  expect(mainReducer(initialState, setName())).toMatchSnapshot();
});
