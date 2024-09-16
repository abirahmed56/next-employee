import { HttpError } from "../lib/http-error";
import Users from "../model/user";

export async function getUsers(req, res) {
  const {
    search,
    page = 1,
    size = 6,
    sort_by = "createdAt",
    order = 1,
  } = req.query;
  const searchCriteria = {};
  if (search) {
    const regex = { $regex: search, $options: "i" };
    searchCriteria.$or = [
      { firstName: regex },
      {
        lastName: regex,
      },
      {
        phone: search,
      },
      {
        email: regex,
      },
    ];
  }

  const users = await Users.find(searchCriteria)
    .sort({ [sort_by]: +order })
    .skip((page - 1) * size)
    .limit(size);

  const totalCount = await Users.find(searchCriteria).countDocuments();

  return {
    users,
    totalPage: Math.ceil(totalCount / size),
    isLastPage: totalCount <= page * size,
  };
}

export async function getUser(req, res) {
  const { userId } = req.query;

  const user = await Users.findById(userId);
  if (!user) {
    throw new HttpError(404, "User not found");
  }

  return user;
}

export async function postUser(req, res) {
  const { firstName, avatar, lastName, email, phone, date } = req.body;

  if (!firstName || !lastName || !avatar || !email || !phone || !date) {
    throw new HttpError(400, "Missing form data");
  }

  const userData = { firstName, lastName, avatar, email, phone, date };

  return await Users.create(userData);
}

export async function putUser(req, res) {
  const { userId } = req.query;
  const userData = req.body;

  const user = await Users.findByIdAndUpdate(userId, userData, {
    new: true,
  });
  if (!user) {
    throw new HttpError(404, "User not found");
  }
  return user;
}

export async function deleteUser(req, res) {
  const { userId } = req.query;

  const user = await Users.findByIdAndDelete(userId);
  if (!user) {
    throw new HttpError(404, "User not found");
  }

  return { message: "User deleted successfully", user };
}

export async function searchUsers(req, res) {
  const { name, email, phone, date } = req.body;

  const searchCriteria = {};

  if (name) {
    searchCriteria.name = { $regex: name, $options: "i" }; 
  }
  if (email) {
    searchCriteria.email = { $regex: email, $options: "i" };
  }
  if (phone) {
    searchCriteria.phone = { $regex: phone, $options: "i" };
  }
  if (date) {
    searchCriteria.date = new Date(date); 
  }

  const users = await Users.find(searchCriteria);

  return users;
}
