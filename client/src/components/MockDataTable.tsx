import { useQuery } from "react-query";
import { getFakeData } from "../api/api";
import {Table} from 'antd'
import { NumRecords, TableData } from '../types/tableExample';
import '../styles/MockDataTable.css';

const formatColumns = (data: TableData) => {
    if(!data){return []}
    return Object.keys(data)
        .filter(d=>d!=='postId' && d!=='key')
        .map((d,i)=>{
            return {
                title: d,
                dataIndex: d,
                key:i
            }
        })
}

const MockDataTable = (props : {numRecords: NumRecords}) => {

    const { numRecords } = props

    const { isLoading, error, data } = useQuery(
        [`helloWorld-${numRecords}`, numRecords], 
        ()=>getFakeData(numRecords), 
        {keepPreviousData:true, enabled:true});

    let retElem = <div>Loading ...</div>

    if(error){
        retElem = <div>Error Fetching Data</div>
    }
    else if(!isLoading && data && data.length > 0){
        retElem = <Table 
            columns={formatColumns(data[0])} 
            dataSource={data} 
            size="small" 
        />
    }

    return (
        <div className="MockDataTable">
            {retElem}
        </div>
    );
}

export default MockDataTable
