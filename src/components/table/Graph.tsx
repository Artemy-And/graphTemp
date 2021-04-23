import * as React from 'react';
import {Button} from "@material-ui/core";
import {Bar, BarChart, CartesianGrid, Legend, ReferenceLine, Tooltip, XAxis, YAxis} from "recharts";

type PropsType = {
    onCLickBeginSearch: () => void
    minT: number
    maxT: number
}

export const Graph: React.FC<PropsType> = ({onCLickBeginSearch, minT, maxT}) => {
    const initTemperature = [
        {
            name: 'Average Temperature',
            minTemp: minT,
            maxTemp: maxT,
            amt: 2210,
        },
    ];
    const newFunc = () => {
    return (
        <div className="table">
            <Button variant="contained" color="primary" className='button' onClick={onCLickBeginSearch}>Поиск</Button>
            <div className='graph'>
                <BarChart
                    width={700}
                    height={400}
                    data={initTemperature}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <ReferenceLine y={0} stroke="#000"/>
                    <Bar dataKey="minTemp" fill="blue"/>
                    <Bar dataKey="maxTemp" fill="red"/>
                </BarChart>
            </div>
        </div>
    )

}