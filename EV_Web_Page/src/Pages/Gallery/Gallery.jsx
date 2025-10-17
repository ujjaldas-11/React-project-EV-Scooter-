import data from '../../data.json'
import {Link} from "react-router-dom"

function Gallery() {
  return (
    <>
      <div className="mt-20 h-[100%] p-4 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 mb-10 gap-2 place-items-center">
        {data.items.map((item, index) => (
          <div className="border border-gray-300 p-3 rounded-lg flex flex-col items-center gap-2 mt-4">
            <img
              className="h-[12rem] w-[18rem] border border-gray-700 rounded-2xl shadow shadow-gray-800 mt-4"
              src={item.image}
              alt={`image no ${index}`}
            />
            <h3 className="text-center font-semibold ">{item.title}</h3>
            <Link to={'/pages/details'}> 
              <button className="bg-[#1f2937] p-2 mt-2 text-white rounded-sm cursor-pointer">Show Details</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
