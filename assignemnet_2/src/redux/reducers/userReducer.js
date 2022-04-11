import { SAMPLE_DATA } from "../../constants";
const INITIA_STATE = SAMPLE_DATA;

const userReducer = (state = INITIA_STATE, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      const newUpdatedEmpList = state.data.slice();
      const key = action.payload[0].id;
      newUpdatedEmpList[key].name = action.payload[0].name;
      newUpdatedEmpList[key].email = action.payload[0].email;
      newUpdatedEmpList[key].phone = action.payload[0].phone;
      newUpdatedEmpList[key].website = action.payload[0].website;
      return { ...state, data: newUpdatedEmpList };
    case "DELETE_USER":
      const newUserList = state.data.filter((x) => x.id !== action.payload);
      return { ...state, data: newUserList };
    default:
      return state;
  }
};

export default userReducer;
