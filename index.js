const fetch = require('node-fetch');
const readlineSync = require('readline-sync');
const CryptoJS = require("crypto-js");

const ApiKey = '7QDiLsLeJA1voZ1pUprHEzDB4EeWp0lMd5RUdQ';
const SecretKey = 'DHH4kAjbICQjlTkJ5trltGY4bfULYeEc5iXZeVs95KLWHsOWDwOuXQTW5E6YSn_6dIokZQ';
const baseUrl = 'https://data.azbit.com/api';


const signature = (requestUrl, requestBodyString) => {
    if(!requestBodyString){
        requestBodyString = "";
    }
    return CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(ApiKey+requestUrl+requestBodyString, SecretKey));
    // return '1b788d9b22efd7e535f14f2fa0d7013cf5e07ad73fd654d13402ce73c1c62e43';
    // return ApiKey+requestUrl+requestBodyString;
}

// CURRENCIES
const currencies = () => new Promise((resolve, reject) => {
    let url = new URL(baseUrl+'/currencies');
    fetch(url, {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json',
            'API-PublicKey' : ApiKey,
            'API-Signature': signature(url)
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            resolve(res);

        })
        .catch(err => {
            reject(err)
        })
});

const currenciesPair = () => new Promise((resolve, reject) => {
    let url = new URL(baseUrl+'/currencies/pairs');
    fetch(url, {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json',
            'API-PublicKey' : ApiKey,
            'API-Signature': signature(url)
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            resolve(res);

        })
        .catch(err => {
            reject(err)
        })
});

const currenciesCommission = () => new Promise((resolve, reject) => {
    let url = new URL(baseUrl+'/currencies/commissions');
    fetch(url, {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json',
            'API-PublicKey' : ApiKey,
            'API-Signature': signature(url)
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            resolve(res);

        })
        .catch(err => {
            reject(err)
        })
});
// CURRENCIES

//DEALS
const deals = () => new Promise((resolve, reject) => {
    let url = new URL(baseUrl+'/deals');
    let params = {
        currencyPairCode:'',
        sinceDate:'',
        endDate:'',
        pageNumber:1,
        pageSize:20,
    };
    url.search = new URLSearchParams(params).toString();

    fetch(url, {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json',
            'API-PublicKey' : ApiKey,
            'API-Signature': signature(url)
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            resolve(res);
        })
        .catch(err => {
            reject(err)
        })
});

const userDeals = () => new Promise((resolve, reject) => {
    let url = new URL(baseUrl+'/user/deals');
    let params = {
        currencyPairCode:'',
        sinceDate:'',
        endDate:'',
        pageNumber:1,
        pageSize:20,
    };
    url.search = new URLSearchParams(params).toString();

    fetch(url, {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json',
            'API-PublicKey' : ApiKey,
            'API-Signature': signature(url)
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            resolve(res);
        })
        .catch(err => {
            reject(err)
        })
});
//DEALS

//HEALTHCHECK
const healthCheck = () => new Promise((resolve, reject) => {
    let url = new URL(baseUrl+'/healthcheck');

    fetch(url, {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json',
            'API-PublicKey' : ApiKey,
            'API-Signature': signature(url)
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            resolve(res);
        })
        .catch(err => {
            reject(err)
        })
});
//HEALTHCHECK

// MARKET
const tickers = () => new Promise((resolve, reject) => {
    let url = new URL(baseUrl+'/tickers');
    let params = {
        currencyPairCode:'BTC_USDT' //sesuaikan sendiri
    };
    url.search = new URLSearchParams(params).toString();

    fetch(url, {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json',
            'API-PublicKey' : ApiKey,
            'API-Signature': signature(url)
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            resolve(res);
        })
        .catch(err => {
            reject(err)
        })
});

const ohlc = () => new Promise((resolve, reject) => {
    let url = new URL(baseUrl+'/ohlc');
    let params = {
        interval:'minutes5', //year, month, day, hour4, hour, minutes30, minutes15, minutes5, minutes3, minute
        currencyPairCode :'BTC_USDT',
        start:'2021-02-05T14:00:00',
        end:'2021-02-05T15:00:00'
    };
    url.search = new URLSearchParams(params).toString();

    fetch(url, {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json',
            'API-PublicKey' : ApiKey,
            'API-Signature': signature(url)
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            resolve(res);
        })
        .catch(err => {
            reject(err)
        })
});
// MARKET

// ORDER
const orderbook = () => new Promise((resolve, reject) => {
    let url = new URL(baseUrl+'/orderbook');
    let params = {
        currencyPairCode :'BTC_USDT'
    };
    url.search = new URLSearchParams(params).toString();

    fetch(url, {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json',
            'API-PublicKey' : ApiKey,
            'API-Signature': signature(url)
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            resolve(res);
        })
        .catch(err => {
            reject(err)
        })
});

const orderDeals = () => new Promise((resolve, reject) => {
    let orderId = '1';
    let url = new URL(baseUrl+'/orders/'+orderId+'/deals');

    fetch(url, {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json',
            'API-PublicKey' : ApiKey,
            'API-Signature': signature(url)
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            resolve(res);
        })
        .catch(err => {
            reject(err)
        })
});

const userOrders = () => new Promise((resolve, reject) => {
    let url = new URL(baseUrl+'/user/orders');
    let params = {
        currencyPairCode :'BTC_USDT',
        status:'all' //"all" / "active" / "canceled"
    };
    url.search = new URLSearchParams(params).toString();

    fetch(url, {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json',
            'API-PublicKey' : ApiKey,
            'API-Signature': signature(url)
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            resolve(res);
        })
        .catch(err => {
            reject(err)
        })
});

const openOrders = () => new Promise((resolve, reject) => {
    let url = new URL(baseUrl+'/orders');
    let body = {
        "side":"sell",
        "currencyPairCode":"TRX_USDT",
        "amount":10,
        "price":0.5
    };
    fetch(url, {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json',
            'API-PublicKey' : ApiKey,
            'API-Signature': signature(url,JSON.stringify(body))
        },
        body : JSON.stringify(body)
    })
        // .then(res => res.json())
        .then(res => {
            console.log(res);
            resolve(res);
        })
        .catch(err => {
            reject(err)
        })
});
// ORDER


//ruuuun joni
(async () => {
    await openOrders();
})();