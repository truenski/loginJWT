const Joi = require('@hapi/joi');

const registerValidate = (data) => {

    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string().required().min(3).max(50),
        password: Joi.string().required().min(6).max(50),
    })
    return schema.validate(data)
        //vai trazer um erro, se houver

}

const loginValidate = (data) => {

    const schema = Joi.object({
        email: Joi.string().required().min(3).max(50),
        password: Joi.string().required().min(6).max(50),
    })
    return schema.validate(data)
    //vai trazer um erro, se houver
}




module.exports.loginValidate = loginValidate;
module.exports.registerValidate = registerValidate;
