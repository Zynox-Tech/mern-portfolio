const { z } = require("zod");

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    return next();
  } catch (err) {
    if (err instanceof z.ZodError) {
      const status = 422;
      const message = "Validation Error";
      const extraDetails = err.errors.map((issue) => issue.message);

      console.log({ status, message, extraDetails }); // Log the error object for debugging
      return next({ status, message, extraDetails });
    }
    return next(err);
  }
};

module.exports = validate;
