import { Message } from "../models/messageSchema.js";
import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../middleware/errorMiddleware.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please fill up full form!", 400));
  }
  await Message.create({ firstName, lastName, email, phone, message });
  res.status(200).json({
    success: true,
    message: "Message send successfully!",
  });
});

export const getAllMessage = catchAsyncErrors(async (req, res, next) => {
  const message = await Message.find();
  res.status(200).json({
    success: true,
    message,
  });
});
