import {useState} from "react";

const Create = () =>{

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  

    return(
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="font-semibold rext-2x1 mb-4 block text-center">
                Create a Post
            </h2>
            <form action="">
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Title" />
                </div>
                <div>
                    <label>Content</label>
                    <textarea raw="5" value={content} onChange={(e) => setContent(e.target.value)} cols="50" className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Long Content..." />
                </div>
                <div>
                    <label>Image</label>
                    <input type="text" className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Image URL" />
                </div>
                <div className="mt-4">
                    <label>
                        Published
                    </label>
                    <input type="checkbox" className="ml-2"/>
                </div>
                <div>
                    <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Save</button>
                </div>
            </form>
        </div>
    )
}

export default Create