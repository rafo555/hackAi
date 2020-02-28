export const readDropDownFile = (file) => {
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