import { useQuery } from "react-query";
import { getFakeData } from "../api/api";
import {Table} from 'antd'
import '../styles/MockDataTable.css';

const formatColumns = (data) => {
    if(!data){return []}
    return Object.keys(data[0])
        .filter(d=>d!=='postId' && d!=='key')
        .map((d,i)=>{
            return {
                title: d,
                dataIndex: d,
                key:i
            }
        })
}

const MockDataTable = (props) => {

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
        const keyData = data.map((d,i)=>{d['key'] = i; return d})
        retElem = <Table 
            columns={formatColumns(keyData)} 
            dataSource={keyData} 
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
