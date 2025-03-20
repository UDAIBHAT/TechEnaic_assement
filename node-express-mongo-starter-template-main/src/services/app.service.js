const User = require("../models/app.model");

const AppService = {
  registerUser: async (body) => {
    try {
      
      const {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        profilePicture,
        birthdate,
      } = body;

     
      if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !phoneNumber ||
        !profilePicture ||
        !birthdate
      ) {
        throw new Error("All fields are required");
      }

      
      const user = new User({
        firstName,
        lastName,
        email,
        password, 
        phoneNumber,
        profilePicture,
        birthdate: new Date(birthdate), 
      });

      await user.save();
      console.log("User registered successfully");
      return user.toJSON();
    } catch (err) {
      console.error("Error registering user:", err);
      throw err;
    }
  },
  getUser: async (body) => {
    const { email, password } = body;

    if (!email || !password) {
      return null;
    }

    try {
      
      const user = await User.findOne({ email, password });

      console.log({ user });
      return user ? user.toJSON() : null;
    } catch (err) {
      console.error("Error retrieving user:", err);
      return null;
    }
  },
};

module.exports = AppService;
