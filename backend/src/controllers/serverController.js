export const serverCheck = (req, res) => {
    console.log("Server check endpoint hit");
  res.status(200).json({
    success: true,
    message: "🚀 Server is running fine!",
    timestamp: new Date().toISOString(),
  });
};