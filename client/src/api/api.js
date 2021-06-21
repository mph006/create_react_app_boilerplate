

export async function getFakeData(queryObj) {
    const numRecords = queryObj.queryKey[1].params.numRecords || 5 
    const response = await fetch('/api/fakeData',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({numRecords})
    });
    const message = await response.json();
    return message;
}