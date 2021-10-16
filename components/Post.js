import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { deleteComment, editComment } from "../services/post"
import classNames from "classnames"

function Post({ title, content, id }) {
  const [hidden, setHidden] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const [newContent, setNewContent] = useState(content)
  const [edit, setEdit] = useState(false)
  const { register, handleSubmit } = useForm()

  const handlePostSubmit = async data => {
    const response = await editComment(data, id)

    if (response) {
      setEdit(false)
      setNewTitle(data.title)
      setNewContent(data.content)
    }
  }

  const handleDeletePost = async id => {
    const res = await deleteComment(id)
    if (res) {
      setHidden(true)
    }
  }

  if (edit) {
    return (
      <form
        onSubmit={handleSubmit(handlePostSubmit)}
        className="bg-gray-200 border shadow-sm p-4 rounded-sm space-y-4"
      >
        <div className="flex justify-between space-x-4 items-center">
          <input
            className="w-full p-4 text-lg focus:outline-none focus:ring-2 border border-gray-300 focus:ring-blue-400 rounded-sm"
            type="text"
            placeholder="Titre de la main courante"
            {...register("title", { required: true })}
            defaultValue={title}
          />

          <button
            type="submit"
            className="p-2 text-white font-medium bg-blue-500 hover:bg-blue-600 rounded-sm "
          >
            Enregister
          </button>
          <button
            onClick={() => setEdit(false)}
            className="p-2 text-white font-medium bg-red-500 hover:bg-red-600 rounded-sm "
          >
            Annuler
          </button>
        </div>
        <div>
          <textarea
            placeholder="Entrez votre main courante"
            className="w-full h-40 p-4 text-lg focus:outline-none focus:ring-2 border border-gray-300 focus:ring-blue-400 rounded-sm"
            {...register("content", { required: true })}
            defaultValue={content}
          />
        </div>
      </form>
    )
  }
  return (
    <div
      className={classNames("bg-gray-200 border shadow-sm p-4 rounded-sm space-y-4", { hidden })}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-xl text-gray-800 ">{newTitle}</p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => setEdit(true)}
            className="p-2 text-white font-medium bg-blue-500 hover:bg-blue-600 rounded-sm "
          >
            Editer
          </button>
          <button
            onClick={() => handleDeletePost(id)}
            className="p-2 text-white font-medium bg-red-500 hover:bg-red-600 rounded-sm "
          >
            Supprimer
          </button>
        </div>
      </div>
      <div className="bg-gray-50 rounded-sm p-2">{newContent}</div>
    </div>
  )
}

export default Post
