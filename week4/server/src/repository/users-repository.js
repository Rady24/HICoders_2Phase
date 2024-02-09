import User from "../models/user.js";
import { sendWelcomeEmail } from "../utils/emailUtility.js";

const getUsers = async () => {
  return await User.findAll();
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    await sendWelcomeEmail(newUser.email, newUser.name);
    return newUser;
  } catch (error) {
    throw error;
  }
};

export { getUsers, getUserById, createUser };
