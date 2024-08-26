const bcrypt = require('bcrypt');

export function hash (password) {

    try {
        const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT));
        return bcrypt.hashSync(password, salt);
    } catch (error) {

        console.log(error);
        return false;
    }
}

export function compare (password, hash) {

    try {

        return bcrypt.compareSync(password, hash);
    } catch (error) {

        console.log(error);
        return false;
    }
}

