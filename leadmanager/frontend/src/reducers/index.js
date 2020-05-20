import { combineReducers } from "redux";
import leads from "./leads";
import errors from "./error";
import messages from "./messages";

export default combineReducers({ leads, errors, messages });
