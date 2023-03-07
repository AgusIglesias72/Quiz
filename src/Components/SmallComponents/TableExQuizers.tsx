import React from 'react'
import { TopExquizzers } from '../../mocks/TopExquizzers'

export default function TableExQuizers() {
  return (
    <div className="container mx-auto sm:p-4 dark:text-gray-100 w-full lg:w-2/3">
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="dark:bg-gray-700">
            <tr className="text-center">
              <th className="p-3">Avatar</th>
              <th className="p-3">Name</th>
              <th className="p-3">ExQuizzer since</th>
              <th className="p-3">Quizzes Completed</th>
              <th className="p-3">Score</th>
            </tr>
          </thead>
          <tbody>
            {TopExquizzers.map((item) => (
              <tr
                className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                key={item.id}
              >
                <td className="p-3 flex justify-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={item.avatar}
                    alt="Rounded avatar"
                  />
                </td>
                <td className="p-3 text-center">
                  <p>{item.name}</p>
                </td>
                <td className="p-3 text-center">
                  <p>{item.dateCreated}</p>
                </td>

                <td className="p-3 text-center">
                  <p>{item.completed}</p>
                </td>
                <td className="p-3 text-center">
                  <span
                    className={`px-3 py-1 font-semibold rounded-md  dark:text-gray-900
                    ${
                      item.score > 90
                        ? 'dark:bg-green-700'
                        : item.score > 75
                        ? 'dark:bg-green-500'
                        : 'dark:bg-yellow-500'
                    }`}
                  >
                    <span>{item.score}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
