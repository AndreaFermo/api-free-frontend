import { Link } from "react-router-dom"

const Post = ({index, post}) => {
    return (
        <div className="bg-white rounded shadow-lg overflow-hidden" key={index}>
            <img src="https://www.tmedical.net/wp-content/uploads/2020/04/IMMAGINE-NON-DISPONIBILE.gif" alt={post.title} className="w-full h-25 object-cover" />
            <div className="pc-4 pt-2 pb-4">
                <h2 className="text font-semibold">{post.title}</h2>
                <div className="text-sm">{post.content}</div>
                <div className="mt-2 flex gap-4">
                    <Link className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer">Edit</Link>  
                    <Link className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer">Delete</Link>  

                </div>
            </div>
           
        </div>
    )
}

export default Post