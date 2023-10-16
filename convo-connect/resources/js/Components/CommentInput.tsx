import React, {useState} from 'react';
import { router } from '@inertiajs/react';


const CommentInput = () => {
  const [values, setValues] = useState({

    body: ""
});

function handleChange(e) {
  const key = e.target.id;
  const value = e.target.value
  setValues(values => ({
      ...values,
      [key]: value,
  }))
}
function handleSubmit(e) {
  e.preventDefault()
  router.post('/post', values)
}

console.log()


  return (
    <form className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md sm:flex justify-center my-5 sm:mx-5" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className=" text-gray-700 text-sm font-bold mb-2">
          What's on your mind?
        </label>
         <input id="body" value={values.body} onChange={handleChange}  className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
        
      </div>
      <div className="text-center mx-10 my-auto">
        <button
          type="submit"
          className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          Comment
        </button>
      </div>
    </form>
  );
};

export default CommentInput;
