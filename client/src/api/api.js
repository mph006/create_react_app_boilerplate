

export async function getFakeData(numRecords) {
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