import mongoose from "mongoose";
import Order from "../models/Order.js";

const createOrder = async (data) => {
  return await Order.create(data);
};

const getAllOrdersByUser = async (userId) => {
  const result = await Order.aggregate([
    { $match: { userId: new mongoose.Schema.ObjectId(userId) } },

    {
      $lookup: {
        from: "product",
        localField: "productId",
        foreignField: "_id",
        as: "productDetails",
      },
    },

    { $unwind: "$productDetails" },
  ]);

  return result;
};

export default { createOrder, getAllOrdersByUser };
