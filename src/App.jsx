import { useNavigate } from 'react-router-dom'

export default function App() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-green-100 text-center px-4">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-4">AqBarysApp</h1>
      <p className="text-lg text-gray-700 mb-8">Выбери язык, с которого хочешь начать изучение</p>

      <select className="mb-6 px-4 py-2 rounded border border-gray-300 shadow-md">
        <option>С казахского</option>
        <option>С русского</option>
        <option>С английского</option>
      </select>

      <button
        onClick={() => navigate('/courses')}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow"
      >
        Начать обучение
      </button>
    </div>
  )
}
