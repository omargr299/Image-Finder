import axios from 'axios'

export const getRequest = async (search=" ",page) => await axios.get(`http://localhost:4000/&search=${search}&page=${page}`);