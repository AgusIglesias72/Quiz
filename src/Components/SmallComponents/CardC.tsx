import { mockData } from '../../mocks/categoriesData'
import { useState } from 'react'

const CardComponent = ({ ...props }) => {
  const { title, image, id, quantity, category, description, author, level } =
    props

  return (
    <div
      className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80"
      style={{
        transition: 'all 0.1s ease-in-out',
      }}
    >
      <a href={`/categories/${id}`} className="block w-full h-full">
        <img alt={title} src={image} className="object-cover w-full max-h-40" />
        <div className="w-full p-4 bg-white dark:bg-gray-800">
          <p className="font-medium text-indigo-500 text-md">{category}</p>
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
            {title}
          </p>
          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
            {description}
          </p>
          <div className="flex items-center mt-4">
            <div className="flex flex-col justify-between  text-sm  w-full">
              <p className="text-gray-800 dark:text-white text-center">
                {author}
              </p>
              <div className="flex justify-between w-full">
                <p className="text-gray-400 dark:text-gray-300">
                  {quantity} questions
                </p>
                <p className="text-gray-400 dark:text-gray-300">{level}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

const Filters = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const handleClick = (e) => {
    console.log(e.target.id)
    setActiveFilter(e.target.id)
  }
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2 " onClick={handleClick}>
          <div
            id="all"
            className={
              activeFilter === 'all'
                ? 'inline-block p-4 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active'
                : 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
            }
            style={{ cursor: 'pointer' }}
          >
            All
          </div>
        </li>
        <li className="mr-2" onClick={handleClick}>
          <div
            id="new"
            className={
              activeFilter === 'new'
                ? 'inline-block p-4 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active '
                : 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
            }
            style={{ cursor: 'pointer' }}
            aria-current="page"
          >
            New
          </div>
        </li>
        <li className="mr-2" onClick={handleClick}>
          <div
            id="popular"
            className={
              activeFilter === 'popular'
                ? 'inline-block p-4 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active '
                : 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
            }
            style={{ cursor: 'pointer' }}
          >
            Popular
          </div>
        </li>
        <li className="mr-2" onClick={handleClick}>
          <div
            id="rated"
            className={
              activeFilter === 'rated'
                ? 'inline-block p-4 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active '
                : 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
            }
            style={{ cursor: 'pointer' }}
          >
            Rated
          </div>
        </li>
      </ul>
    </div>
  )
}

export default function CardC() {
  return (
    <div className="flex w-full px-12 bg-white flex-wrap justify-center mt-2">
      <div
        className="flex lg:items-end lg:justify-between lg:flex-row mb-12 header w-full
      flex-col items-center justify-center gap-3"
      >
        <div className="title">
          <p className="mb-4 text-4xl font-bold text-gray-800">ExQuizits</p>

          <span className="block text-2xl font-light text-gray-600">
            Choose the best quiz for you, or check
            <span className="text-indigo-500">
              {' '}
              <a href="/quizzes/categories">categories</a>
            </span>
          </span>
        </div>
        <div></div>
        <div className="text-end">
          <form className="flex flex-col justify-center mb-1 w-full max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0 ">
            <div className=" relative">
              <input
                type="text"
                id='"form-subscribe-Search'
                className=" rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Enter a title"
              />
            </div>
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Search
            </button>
          </form>
          <Filters />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        {mockData.map((item, index) => (
          <CardComponent
            key={index}
            title={item.title}
            category={item.category}
            description={item.description}
            quantity={item.quantity}
            image={item.image}
            id={item.id}
            author={item.author}
            level={item.level}
          />
        ))}
      </div>
    </div>
  )
}
