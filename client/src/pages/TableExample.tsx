import React, { useState } from 'react'
import MockDataTable from "../components/MockDataTable";
import { InputNumber } from 'antd';
import { NumRecords } from '../types/tableExample';

export default function TableExample() {
    const [numRecords, setNumRecords] = useState(5)

    return (
        <div className="tableExample">
            <div>
                <span>Number of Rows:</span>
                <InputNumber 
                    min={1} 
                    max={100} 
                    size={"small"}
                    defaultValue={numRecords} 
                    onChange={(newNum: NumRecords)=>setNumRecords(newNum)}
                />
            </div>
            <MockDataTable numRecords={numRecords}/>
        </div>
    )
}
