import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function LessonPage() {
  const { id } = useParams()
  const [words, setWords] = useState([])
  const [title, setTitle] = useState('')
  const [step, setStep] = useState(0)
  const [showTranslation, setShowTranslation] = useState(false)
  const [error, setError] = useState(null)

  const baseLang = 'kk'
  const targetLang = 'en'

  useEffect(() => {
    setError(null) // сбрасываем ошибку при новой загрузке
    fetch(`/data/${baseLang}-${targetLang}/${id}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка ${res.status}: ${res.statusText}`)
        }
        return res.json()
      })
      .then((data) => {
        setWords(data.words)
        setTitle(data.title)
      })
      .catch((err) => {
        setError(err.message)
        setWords([])
        setTitle('Ошибка')
      })
  }, [id])

  const current = words[step]

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Произошла ошибка</h1>
          <p className="text-lg text-red-500">{error}</p>
        </div>
      </div>
    )
  }

  if (!current) return <p className="text-center mt-10">Загрузка...</p>

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-6 text-center">
        <h1 className="text-xl font-bold text-purple-800 mb-4">{title}</h1>

        <div className="w-full max-w-sm perspective">
  <div className={`relative w-full h-48 transition-transform duration-500 transform-style preserve-3d ${showTranslation ? 'rotate-y-180' : ''}`}>
    <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-blue-100 text-3xl font-bold rounded-xl shadow">
      {current.word}
    </div>
    <div className="absolute w-full h-full backface-hidden back flex items-center justify-center bg-green-100 text-2xl font-semibold rounded-xl shadow">
      {current.translation}
    </div>
  </div>

  <div className="mt-4 space-x-4">
    {!showTranslation && (
      <button
        onClick={() => setShowTranslation(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Показать перевод
      </button>
    )}
    {showTranslation && (
      <button
        onClick={() => {
          setShowTranslation(false)
          setStep((prev) => (prev + 1 < words.length ? prev + 1 : 0))
        }}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Следующее слово
      </button>
    )}
  </div>
</div>

    </div>
  )
}
