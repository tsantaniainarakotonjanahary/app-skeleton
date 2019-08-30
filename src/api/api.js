const baseUrl = 'https://play.dhis2.org/2.31.5/api/'

export const get = async endpoint =>
    await (await fetch(baseUrl + endpoint, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
        },
    })).json()

export const put = async (endpoint, data) =>
    await (await fetch(baseUrl + endpoint, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
    })).json()
