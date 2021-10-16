import Layout from "../components/Layout"
import NewPost from "../components/newPost"
import Post from "../components/Post"
import * as postsServices from "../services/post"
import { useEffect, useState } from "react"

export default function Home() {
  const [data, setData] = useState([])

  const getComments = async () => {
    const response = await postsServices.getComments()
    if (response) {
      setData(response)
    }
  }

  useEffect(getComments, [])

  return (
    <Layout>
      <NewPost />
      <div className="flex py-4 justify-center">
        <button className=" text-lg hover:underline" onClick={() => getComments()}>
          Rafraichir les mains courantes
        </button>
      </div>
      <div className="space-y-6 py-10">
        {data.map((post, key) => (
          <Post key={key} id={post._id} title={post.title} content={post.content} />
        ))}
      </div>
    </Layout>
  )
}
