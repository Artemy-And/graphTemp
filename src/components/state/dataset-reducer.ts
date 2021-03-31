

let initialState = {
    input: "",
    arrayNew: [] as Array<DatasetReducerType>,
    rangeDate: [] as Array<DatasetReducerType>,
}



export function datasetReducer(state: InitialStateType = initialState, action: AllACTypes): InitialStateType {
    switch (action.type) {
        case SET_NEW_ARR:
            for (let prop in action.dateJSON) {
                action.array.push(action.dateJSON[prop])
            }
            return {...state, arrayNew: action.array}
        case SET_RANGE_DATE:

            return {
                ...state, rangeDate: action.array.filter((obl: any) => {
                    return obl.Date >= action.minDate && obl.Date <= action.maxDate
                })
            }

        default:
            return state
    }
}


export const setNewArrAC = (array: Array<DatasetReducerType>, dateJSON: any): setNewArrACType => ({
    type: SET_NEW_ARR,
    array,
    dateJSON
})
export const setRangeDatesAC = (array: Array<DatasetReducerType>, minDate: string, maxDate: string): setRangeDatesType => ({
    type: SET_RANGE_DATE,
    array,
    minDate,
    maxDate
})



type setNewArrACType = {
    type: typeof SET_NEW_ARR
    array: Array<DatasetReducerType>
    dateJSON: any
}
type setRangeDatesType = {
    type: typeof SET_RANGE_DATE
    array: Array<DatasetReducerType>
    minDate: string,
    maxDate: string
}

type setInputACType = {
    type: typeof SET_INPUT
    value: string
}


type AllACTypes =
    | setNewArrACType
    | setInputACType
    | setRangeDatesType


export const SET_NEW_ARR = "SET_NEW_ARR"
export const SET_INPUT = "SET_INPUT"
export const SET_RANGE_DATE = "SET_RANGE"



export type InitialStateType = {
    input: string,
    arrayNew: Array<DatasetReducerType>
    rangeDate: Array<DatasetReducerType>

}

export type DatasetReducerType = {
    "Date": string
    "Location": string
    "MinTemp": string
    "MaxTemp": string
    "Rainfall": string
    "Evaporation": string
    "Sunshine": string
    "WindGustDir": string
    "WindGustSpeed": string
    "WindDir9am": string
    "WindDir3pm": string
    "WindSpeed9am": string
    "WindSpeed3pm": string
    "Humidity9am": string
    "Humidity3pm": string
    "Pressure9am": string
    "Pressure3pm": string
    "Cloud9am": string
    "Cloud3pm": string
    "Temp9am": string
    "Temp3pm": string
    "RainToday": string
    "RainTomorrow\n": string
}