import { useState, useEffect } from 'react'
import { opinions } from '../../mocks/opinions'

const Testimonial = ({ image, name, text, position }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-lg mx-auto rounded-xl p-4 
    md:w-96 
    "
    >
      <p className="text-gray-600 dark:text-white">
        <span className="text-lg font-bold text-indigo-500">“</span>
        {text}
        <span className="text-lg font-bold text-indigo-500">”</span>
      </p>
      <div className="flex items-center mt-4">
        <a href="#" className="relative block">
          <img
            alt="profil"
            src={image}
            className="mx-auto object-cover rounded-full h-10 w-10 "
          />
        </a>
        <div className="flex flex-col justify-between ml-2">
          <span className="text-sm font-semibold text-indigo-500">{name}</span>
          <span className="flex items-center text-xs dark:text-gray-400">
            {position}
          </span>
        </div>
      </div>
    </div>
  )
} // returns the card component for the testimonials

export default function Testimonials() {
  const [op, setOp] = useState([])

  useEffect(() => {
    return setOp(opinions.sort(() => Math.random() - 0.5))
  }, [])

  return (
    <div className="flex flex-col items-center w-full gap-4 p-8 mb-8 md:flex-row md:mb-0 flex-between">
      {op.slice(0, 3).map((opinion, index) => (
        <Testimonial
          key={index}
          image={opinion.image}
          name={opinion.name}
          text={opinion.text}
          position={opinion.position}
        />
      ))}
    </div>
  )
}

// export async function getServerSideProps() {
//   const opin = opinions
//   return {
//     props: {
//       opin,
//     },
//   }
// }
