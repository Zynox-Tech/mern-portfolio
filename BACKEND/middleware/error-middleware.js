const errorMiddleware = (err, req, res, next) => {
  console.log("Error object received:", err); // Log the full error object

  const status = err.status || 500;
  const message = err.message || "Backend Error";
  const extraDetails = Array.isArray(err.extraDetails)
    ? err.extraDetails.join(", ")
    : err.extraDetails || "Error from the Backend";

  console.error(
    `[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}, Extra Details:: ${extraDetails}`
  );

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
