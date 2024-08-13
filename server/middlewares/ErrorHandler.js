export const ErrorHandler = async (error, req, res, next) => {
  return res.status(error.status || 500).json({
    data: null,
    message: error.message || "Internal Server Error ! ",
    success: false,
  });
};
