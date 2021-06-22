

export async function getFakeData(key, numRecords=5) {
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