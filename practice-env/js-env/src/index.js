function promisify(fn) {
    return function (...args) {
        return new Promise(function (resolve, reject) {
            args.push(function (err, ...rest) {
                if(err){
                    reject(err)
                    return
                }

                resolve(...rest)
            })

            fn.apply(null, args)
        })
    }
}

promisify((payload, cb) => cb(payload))('test').then(res => console.log(res)).catch(err => console.log(err))

