const apiBaseUrl = 'https://wealthcomp-6f4f.restdb.io/rest/';

export default class ApiFetch {
    static get(url) {
        const promise = new Promise((resolve, reject) => {
            fetch(ApiFetch._buildRequest(apiBaseUrl + url, 'GET'))
                .then((response) => {
                    if (response.status === 204) // NOCONTENT
                        resolve(null);
                    if (response.status === 200) // OK
                        return response.json();
                        
                    reject(`Status code ${response.status} received`);
                })
                .then((json) => {
                    resolve(json);
                })
                .catch((error) => {
                    reject(error);
                });
        });
        return promise;
    }

    static _buildRequest(url, method, body) {
        const headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.set('Content-Type', 'application/json');
        headers.set('x-apikey', '593973434b84c62d01db8a90');
        
        const init = {
            method: method,
            headers: headers,
            mode: 'cors',
            //credentials: 'include',
            body: body == null ? null : JSON.stringify(body)
        };

        return new Request(url, init);
    }    

    static post(url, body) {
        return ApiFetch._executeUpdate(url, 'POST', body);
    }

    static put(url, body) {
        return ApiFetch._executeUpdate(url, 'PUT', body);
    }

    static _executeUpdate(url, method, body) {
        const promise = new Promise((resolve, reject) => {
            let request = ApiFetch._buildRequest(apiBaseUrl + url, method, body);
            fetch(request).then((response) => {
                if (response.status === 204)
                    return resolve(null);
                if (response.status === 200)
                    return response.json().then(x => resolve(x));
                
                reject(`Status code ${response.status} received`);
            }).catch((error) => reject(error));
        });
        return promise;
    }
}
