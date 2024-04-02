import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '9d075f5ff01f409c835ffb496252e8bd'
  }
})