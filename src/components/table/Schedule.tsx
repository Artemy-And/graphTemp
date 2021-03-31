import {DateRangePicker} from "materialui-daterange-picker";
import * as React from "react";

type PropsType = {
    minDate: Date
    maxDate: Date
    onChangeFunct: (value:any)=>void
}

export const Schedule: React.FC<PropsType> = ({minDate, maxDate, onChangeFunct}) => {

    const toggle = () =>{
        return true
    };
    let forDefineRange = [{
        label: 'Доступный диапазон дат',
        startDate: minDate,
        endDate: maxDate,
    }]

    let dateRangeMy = {
        startDate: minDate,
        endDate: maxDate
    }
    return (
        <DateRangePicker
            initialDateRange={dateRangeMy}
            minDate={minDate}
            maxDate={maxDate}
            definedRanges={forDefineRange}
            open={true}
            toggle={toggle}
            onChange={(range) => {
                onChangeFunct(range)
            }}
        />
    )
}