export default function MainPageGreen() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%',
        margin: 'auto',
        height: '100%',
        marginBottom: '2rem',
      }}
    >
      <div className="bg-white">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl max-w-lg mx-auto ">
            <span className="block">
              Choose from our 1000 amazing ExQuizIts, or
              <span className="text-indigo-500"> create your own</span>
            </span>
          </h2>
          <p className="text-lg mt-4 max-w-md mx-auto text-gray-400">
            I had noticed that both in the very poor and very rich extremes of
            society the mad were often allowed to mingle freely
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <a href="/login">Start Quizzing</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./dalleMockImage.png"
        alt="dalleMockImage"
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '300px',
          maxHeight: '300px',
        }}
      />
    </main>
  )
}
