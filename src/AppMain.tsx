import * as React from 'react';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./components/state/Store";
import {
    DatasetReducerType,
    setNewArrAC,
    setRangeDatesAC,
} from "./components/state/dataset-reducer";
import {Graph} from "./components/table/Graph";
import {Schedule} from "./components/table/Schedule";


export const AppMain = () => {
    const dateJSON = require("./components/dataset.json")
    const dispatch = useDispatch()
    const arrayDataJSON = useSelector<RootStateType, Array<DatasetReducerType>>(state => state.dataset.arrayNew)
    const rangeDateArray = useSelector<RootStateType, Array<DatasetReducerType>>(state => state.dataset.rangeDate)
    const [minT, setMinT] = useState(0)
    const [maxT, setMaxT] = useState(0)

    useEffect(() => {
        dispatch(setNewArrAC(arrayDataJSON, dateJSON))
        console.log('useEffect')
    }, [arrayDataJSON, dateJSON])

    let temperatures =
        rangeDateArray.map((a: any) => {
            let numberAcc = Number(a.MinTemp)
            return numberAcc
        }).filter((e: any) => !!e)

    const onChangeSetDatesFunc = (range: any) => {
        let minDate2 = range.startDate.toISOString().slice(0, 10)
        let maxDate2 = range.endDate.toISOString().slice(0, 10)
        dispatch(setRangeDatesAC(arrayDataJSON, minDate2!, maxDate2!))
    }

    const onCLickBeginSearch = () => {
        if (temperatures.length > 1) {
            let minTemperature = Math.min.apply(null, temperatures)
            let maxTemperature = Math.max.apply(null, temperatures)
            setMinT(minTemperature)
            setMaxT(maxTemperature)
        } else return
    }

    let minDate = new Date("2008-12-01")
    let maxDate = new Date("2011-09-26")

    return (
        <div className="App">
            <div className="newContainer">

                <Schedule
                    minDate={minDate}
                    maxDate={maxDate}
                    onChangeFunct={onChangeSetDatesFunc}

                />
                <Graph onCLickBeginSearch={onCLickBeginSearch}
                       minT={minT}
                       maxT={maxT}


                />

            </div>
        </div>


    )
}
