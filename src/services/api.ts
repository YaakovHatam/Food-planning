

export async function makeApiCall(data: any) {
    return fetch('http://localhost:3001/cart', {
        method: 'POST',
        body: JSON.stringify(data.payload)
    });
}   