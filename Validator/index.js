exports.createPostValidator = (req, res, next) => {
    //title

    req.check("title", "Write a title").notEmpty();
    req.check("title", "Title must be between 4 to 150 characters").isLength({
        min: 4,
        max: 150
    });
    // body
    req.check("body", "write a body").notEmpty();
    req.check("body", "body must be between 4 to 2000 characters").isLength({
        min: 4,
        max: 2000
    });

    const errors = req.validationErrors();
//  if error lshow the first one as they happen
    if(errors) {
        const firstError = errors.map(error => error.msg [0]);
        return res.status(400).json({error: firstError});
    }

    next();
};

exports.userSignupValidator = (req, res, next) => {
    // name is not null and between 4-10 characters
    req.check("name", "Name is required").notEmpty();

    // email is not null
    req.check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
        min: 4,
        max: 2000
    })
    // check for password
    req.check("password", "password is required").notEmpty();
    req.check('password')
    .isLength({min: 6})
    .withMessage()
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number")

    // check for errors
const errors = req.validationErrors();
// if erros show the first one as they happen
if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
}

// proceed to next middleware
next();

}