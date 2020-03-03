const DATA_ENTRIES = 84;

const { createStore, combineReducers } = Redux;
const { Provider, connect } = ReactRedux;

const entryAttr = {
  evos: [
    "assault",
    "tank",
    "ranger",
    "mage",
    "healer",
  ],
  boss: [
    "assault",
    "tank",
    "ranger",
    "mage",
    "healer",
  ],
  sUnit: [
    "assault",
    "tank",
    "ranger",
    "mage",
    "healer",
  ],
  material: [
    "bov", 
    "enchants", 
    "runes", 
    "aot",
  ],
};

/**
 * Actions
 **/
const addFilter = (name, value) => {
  return {
    type: "ADD_FILTER",
    name,
    value
  };
};

const removeFilter = (name, value) => {
  return {
    type: "REMOVE_FILTER",
    name,
    value
  };
};

const clearFilters = () => {
  return {
    type: "CLEAR_FILTERS"
  };
};

const setContent = entries => {
  return {
    type: "SET_CONTENT",
    entries
  };
};

/**
 * Reducers
 **/
const filters = (state = { filters: {} }, action) => {
  switch (action.type) {
    case "ADD_FILTER":
      let currentAddFilter =
        state.filters[action.name] && state.filters[action.name].length
          ? state.filters[action.name]
          : [];
      currentAddFilter.push(action.value);
      const newAddState = Object.assign({}, state.filters, {
        [action.name]: currentAddFilter
      });
      return Object.assign({}, state, { filters: newAddState });
    case "REMOVE_FILTER":
      let currentRemoveFilter =
        state.filters[action.name] && state.filters[action.name].length
          ? state.filters[action.name]
          : [];
      currentRemoveFilter = _.pull(currentRemoveFilter, action.value);

      const newRemoveState = Object.assign({}, state.filters, {
        [action.name]: currentRemoveFilter
      });
      return Object.assign({}, state, { filters: newRemoveState });
    case "CLEAR_FILTERS":
      return Object.assign({}, state, { filters: {} });
    default:
      return state;
  }
};

const content = (state = { entries: [] }, action) => {
  switch (action.type) {
    case "SET_CONTENT":
      return Object.assign({}, state, { entries: action.entries });
    default:
      return state;
  }
};

const reducers = combineReducers({
  filters,
  content
});