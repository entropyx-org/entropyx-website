const API_BASE = `${process.env.REACT_APP_API_BASE_URL || 'https://api.entropyx.org'}/api/`;

export async function getCoinSupply() {
    const res = await fetch(`${API_BASE}info/coinsupply`, {headers: {'Access-Control-Allow-Origin': '*'}})
        .then((response) => response.json())
        .then(data => {
            return data
        })
    return res
}


export async function getTotalBurnedAmount() {
    const res = await fetch(`${API_BASE}burn/get-total-burned-amount`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'content-type': 'application/json'
        },
        method: "GET"
    })
        .then((response) => response.json())
        .then(data => {
            return data
        })
    return res
}

export async function queryBurnRecords(request) {
    const response = await fetch(`${API_BASE}burn/query-burn-records?limit=${request.limit}&offset=${request.offset}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    if (!response.ok) {
        throw await response.text();
    }
    
    return await response.json();
}