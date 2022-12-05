import { SELECT } from "../constants";

// eslint-disable-next-line
export default (selected = false, action) => {
  return action.type === SELECT ? !selected : selected;
};
