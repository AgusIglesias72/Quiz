import Link from 'next/link'
// import { opinions } from '../../mocks/opinions'

const opinions = [
  {
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    name: 'Agustin Iglesias',
    text: 'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
    position: '6 Months ExQuizIt User 🚀',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    name: 'Santiago Wencelblat',
    text: 'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
    position: '8 Months ExQuizIt User 🚀',
  },
  {
    image:
      'https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    name: 'Lionel Messi',
    text: 'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
    position: '6 Months ExQuizIt User 🚀',
  },
  {
    image:
      'https://images.unsplash.com/photo-1509988892867-8bf3ee9e3afa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    name: 'Lebron James',
    text: 'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
    position: '2 Months ExQuizIt User 🚀',
  },
]

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
        <Link href="#" className="relative block">
          <img
            alt="profile"
            src={image}
            className="mx-auto object-cover rounded-full h-10 w-10 "
          />
        </Link>
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
  // const op = opinions.sort(() => Math.random() - 0.5)

  return (
    <div className="flex flex-col items-center w-full gap-4 p-8 my-0 md:flex-row md:my-4 flex-between">
      {opinions.slice(0, 3).map((opinion, index) => (
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
