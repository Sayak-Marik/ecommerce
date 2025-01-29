import axiosInstance from "../../helpers/axios"

const loginUser = async (payload) => {
    const response = await axiosInstance.post('http://localhost:5000/api/auth/login', payload)
    console.log('res', payload)
    return response
}
export default loginUser