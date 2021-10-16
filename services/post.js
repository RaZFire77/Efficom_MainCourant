import axios from "axios"

const url = "https://apimaincourante.herokuapp.com/posts"

export const saveComment = async data => {
  try {
    const response = await axios.post(url, data)
    return {
      sucess: true,
      response,
    }
  } catch (e) {
    console.log(e)
  }
}

export const editComment = async (data, id) => {
  try {
    const response = await axios.patch(`${url}/${id}`, data)
    return {
      sucess: true,
      response,
    }
  } catch (e) {
    console.log(e)
  }
}

export const deleteComment = async id => {
  try {
    const response = await axios.delete(`${url}/${id}`)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const getComments = async data => {
  try {
    const response = await axios.get(url, data)
    return response.data
  } catch (e) {
    console.log(e)
  }
}
