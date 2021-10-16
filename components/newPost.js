import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { saveComment } from "../services/post"

function NewPost() {
  const { register, handleSubmit, reset } = useForm()
  const [isSaved, setSaved] = useState(false)

  const handlePostSubmit = async data => {
    const response = await saveComment(data)
    if (response) {
      setSaved(true)
      reset()
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handlePostSubmit)}
      className="bg-gray-200 border shadow-sm p-4 rounded-sm space-y-4"
    >
      <div>
        <p className="text-lg font-medium">Créer une main courante</p>
      </div>
      <div>
        <input
          className="w-full p-4 text-lg focus:outline-none focus:ring-2 border border-gray-300 focus:ring-blue-400 rounded-sm"
          type="text"
          placeholder="Titre de la main courante"
          required
          {...register("title", { required: true })}
        />
      </div>
      <div>
        <textarea
          placeholder="Entrez votre main courante"
          className="w-full h-40 p-4 text-lg focus:outline-none focus:ring-2 border border-gray-300 focus:ring-blue-400 rounded-sm"
          required
          {...register("content", { required: true })}
        />
      </div>
      <div className="flex justify-end items-center">
        {isSaved && (
          <div>
            <p className="text-blue-400 font-medium px-4">Main courante enregistrée</p>
          </div>
        )}

        <button
          type="submit"
          className="bg-green-500 p-2 rounded-sm hover:bg-green-600 text-white font-medium"
        >
          Enregistrer main courante
        </button>
      </div>
    </form>
  )
}

export default NewPost
