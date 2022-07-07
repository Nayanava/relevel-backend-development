const bcrypt = require('bcrypt');
const encryptPassword = async (password) => {
    //const password = req.body.password;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(salt);
    console.log(hashedPassword);

    return hashedPassword;
}

const authenticate = async(password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}

const password = 'pasword_123'
encryptPassword(password)
.then(hashedPassword => {
    return authenticate(password, hashedPassword);
}).then(result => console.log(result))
.catch(err => console.log(err));