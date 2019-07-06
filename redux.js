const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    const index = action.index;
    switch(action.type) {
      case 'REMOVE_ITEM':
        const newState = [...state.slice(0, index),
        ...state.slice(index+1)];
        return newState;
      default:
        return state;
    }
  };
  
  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }
  
  const store = Redux.createStore(immutableReducer);