import Link from 'next/link'

export default function InfoExquizit() {
  return (
    <section
      className="bg-indigo-800"
      style={{
        backgroundColor: '#220b68',
        width: '100%',
      }}
    >
      <div className="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-4">
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">50</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Quizzes Availables
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">1000</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            ExQuizers in the world
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">5</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Languages Supported
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">1000</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Questions
          </p>
        </div>
      </div>
      <div className="flex p-4 mx-auto mt-4 w-52">
        <button
          type="button"
          className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          <Link href="/quizzes/play">Quiz It</Link>
        </button>
      </div>
    </section>
  )
}
