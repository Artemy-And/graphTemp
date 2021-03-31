import {combineReducers, createStore} from 'redux';

import {datasetReducer} from "./dataset-reducer";



const reducers = combineReducers({
    dataset: datasetReducer,
})


export const store = createStore(reducers)
export type RootStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;