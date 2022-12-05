import { BOARD_OPEN } from "../constants";

// eslint-disable-next-line
export default (board = true, action) => {
  return action.type === BOARD_OPEN ? !board : board;
};
