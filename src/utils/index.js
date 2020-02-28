
const readDropDownFile = (file) => {
    return new Promise(resolve => {
        const reader = new FileReader();

        reader.onload = evn => {
            if (!evn.target || !evn.target.result) {
                return resolve('');
            }

            return resolve(evn.target.result);
        };

        reader.readAsDataURL(file);
    });
};

const fetchWithTimeout = (url, options) => {
    const { timeout = 15000, ...rest } = options;

    if (rest.signal) {
        throw new Error('Signal not supported in timeoutable fetch');
    }

    const controller = new AbortController();
    const { signal } = controller;

    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('Timeout for Promise'));
            controller.abort();
        }, timeout);

        return fetch(url, { signal, ...rest })
            .finally(() => clearTimeout(timer))
            .then(resolve, reject);
    });
};

export {
    readDropDownFile,
    fetchWithTimeout
}