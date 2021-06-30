import { NumRecords, TableData } from "../types/tableExample";

export async function getFakeData(numRecords: NumRecords) {
    const response = await fetch('/api/fakeData',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({numRecords})
    });
    const message = await response.json();
    return message
        .map((d: TableData, i: number)=>{d['key'] = i; return d}) as TableData[];
}