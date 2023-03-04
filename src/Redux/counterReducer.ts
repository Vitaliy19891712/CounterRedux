export const INCREMENT = "INCREMENT";
export const RESET = "RESET";
export const CHANGE_MAX_VALUE = "CHANGE-MAX-VALUE";
export const CHANGE_START_VALUE = "CHANGE-START-VALUE";

export type CounterSchemaType = {
  maxValue: number;
  startValue: number;
  currentValue: number;
  error: string;
};

type ActionsType = ReturnType<typeof incrementAC> | ReturnType<typeof resetAC> | ReturnType<typeof changeMaxAC> | ReturnType<typeof changeStartAC>;

let initialState: CounterSchemaType = {
  startValue: 0,
  maxValue: 5,
  currentValue: 0,
  error: "",
};

export const counterReducer = (state: CounterSchemaType = initialState, action: ActionsType): CounterSchemaType => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, currentValue: state.currentValue + 1 };
    case RESET:
      return { ...state, currentValue: state.startValue };
    case CHANGE_MAX_VALUE:
      return { ...state, maxValue: action.payload.num };
    case CHANGE_START_VALUE:
      return { ...state, startValue: action.payload.num };
    default:
      return state;
  }
};

export const incrementAC = () => {
  return {
    type: INCREMENT,
  } as const;
};
export const resetAC = () => {
  return {
    type: RESET,
  } as const;
};
export const changeMaxAC = (num: number) => {
  return {
    type: CHANGE_MAX_VALUE,
    payload: {
      num,
    },
  } as const;
};
export const changeStartAC = (num: number) => {
  return {
    type: CHANGE_START_VALUE,
    payload: {
      num,
    },
  } as const;
};
