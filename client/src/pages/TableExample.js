import React, { useState } from 'react'
import MockDataTable from "../components/MockDataTable";
import { InputNumber } from 'antd';

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
                onChange={newNum=>setNumRecords(newNum)}
                />
            </div>
            <MockDataTable numRecords={numRecords}/>
        </div>
    )
}
