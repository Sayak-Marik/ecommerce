import axiosInstance from "../../helpers/axios";

const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post('/auth/register', payload);
    return response.data
  } catch (error) {
    console.error('Registration error:', error.response || error.message);
    return error
  }
};

export default registerUser;
