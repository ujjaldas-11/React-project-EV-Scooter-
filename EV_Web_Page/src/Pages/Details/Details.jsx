// import { Link } from 'react-router-dom'
import data from '../../data.json';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  return (
    <>
      <div className='w-[100%] grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-8 h-[100%] mt-20'>
        <img 
          className='w-[60vw]' 
          src={data.items[id].image}
          alt="alt" />
        <div className='w-[40vw] border border-gray-800 '>
          <p>Specificaton</p>
        </div>
        <div className='text-center'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nesciunt labore corporis at architecto? Sunt, tempora quibusdam voluptas magnam corrupti enim esse architecto praesentium exercitationem natus illo voluptates cum vitae.</p>
        </div>
      </div>
    </>
  )
}

export default Details