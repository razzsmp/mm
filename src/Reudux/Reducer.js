import * as actionTypes from "./actionTypes";
import { combineReducers } from "redux";

const INITIAL_USER_STATE = {
  user: null
};

const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return {
        ...state,
        user: action.payload.user,
        isLoading: false
      };
    }
    default:
      return state;
  }
};

const INITIAL_SERVER_STATE = {
  currentSelected: null,
  joinedServers: null,
  totalServers: null,
  isLoading: true
};

const serverReducer = (state = INITIAL_SERVER_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOTAL_SERVER: {
      return {
        ...state,
        totalServers: action.payload
      };
    }
    case actionTypes.SET_CURRENT_SELECTED: {
      return {
        ...state,
        currentSelected: action.payload
      };
    }

    case actionTypes.SELECT_SERVER: {
      return {
        ...state,
        currentSelected: action.payload
      };
    }
    case actionTypes.UPDATE_SERVER: {
      const servers = { ...state.joinedServers } || {};
      servers[action.payload.id] = action.payload.server;
      return {
        ...state,
        joinedServers: servers
      };
    }
    case actionTypes.SET_SERVER_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case actionTypes.REMOVE_SERVER: {
      const servers = { ...state.joinedServers } || {};
      delete servers[action.payload];
      return {
        ...state,
        joinedServers: servers
      };
    }
    default:
      return state;
  }
};

const CURRENT_SELECTED_STATE = {
  server: null,
  channel: null,
  extra: "totalServer",
  dm: null
};

// const currentSelectedReducer

const rootReducer = combineReducers({
  user: userReducer,
  server: serverReducer
});

export default rootReducer;