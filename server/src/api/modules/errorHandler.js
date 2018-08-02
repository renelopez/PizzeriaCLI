export const apiErrorHandler = (error,req,res,next) => {
  console.log(error.stack);
  res.status(500).send(error.message || error.toString());
};
