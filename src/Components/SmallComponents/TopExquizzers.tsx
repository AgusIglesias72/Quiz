import TableExQuizers from './TableExQuizers'

export default function TopExquizzers() {
  return (
    <div
      className="bg-blue py-6 sm:py-8 lg:py-12"
      style={{
        backgroundColor: '#220b42',
      }}
    >
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <p className="text-indigo-500 lg:text-lg font-semibold text-center mb-2 md:mb-3">
          Introducing
        </p>

        <h2 className="text-white text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          Top ExQuizzers
        </h2>

        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto md:w-1/3 pb-2">
          Appearing on this list means you have been a top performer
          ExQuizzer...or maybe you just got lucky.
        </p>
      </div>
      <TableExQuizers />
    </div>
  )
}
