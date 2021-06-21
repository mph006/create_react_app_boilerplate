import { QueryClient, QueryClientProvider} from "react-query";
import React, { useState } from 'react'
import MockDataTable from "./MockDataTable";
import { InputNumber } from 'antd';
import '../styles/App.css';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WrappedComponent />
    </QueryClientProvider>
  );
}

function WrappedComponent() {

  const [numRecords, setNumRecords] = useState(5)

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
      </header>
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
  );
}
