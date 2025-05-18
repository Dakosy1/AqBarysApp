import { useNavigate } from 'react-router-dom'


const mockLevels = [
  {
    id: 'a1',
    title: 'Уровень A1',
    lessons: [
      'Приветствие и знакомство',
      'Семья и друзья',
      'Цифры и даты',
    ]
  },
  {
    id: 'a2',
    title: 'Уровень A2',
    lessons: [
      'Работа и профессии',
      'Еда и напитки',
      'Путешествия',
    ]
  }
]

export default function Courses() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Твой курс</h1>

      <div className="grid gap-6 max-w-3xl mx-auto">
        {mockLevels.map((level) => (
          <div key={level.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{level.title}</h2>
            <ul className="space-y-2">
              {level.lessons.map((lesson, idx) => (
                <li
                  key={idx}
                  onClick={() => navigate(`/lesson/${level.id}-${idx}`)}
                  className="... cursor-pointer"
                >
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
