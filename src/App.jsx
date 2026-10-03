import Exercise1 from './exercises/ex1/App.jsx'
import Exercise2 from './exercises/ex2/App.jsx'
import Exercise3 from './exercises/ex3/App.jsx'
import Exercise4 from './exercises/ex4/App.jsx'

export default function App() {
  const exercise = new URLSearchParams(window.location.search).get('ex')
  let CurrentExercise = Exercise4

  if (exercise === '1') CurrentExercise = Exercise1
  if (exercise === '2') CurrentExercise = Exercise2
  if (exercise === '3') CurrentExercise = Exercise3

  return (
    <>
      <header className="exercise-navigation">
        <div className="exercise-nav-container">
          <span className="course-label">REACT TP2 · Components & Props</span>
          <nav className="exercise-links" aria-label="Exercises">
            <a href="?ex=1" aria-current={CurrentExercise === Exercise1 ? 'page' : undefined}>Exercise 1</a>
            <a href="?ex=2" aria-current={CurrentExercise === Exercise2 ? 'page' : undefined}>Exercise 2</a>
            <a href="?ex=3" aria-current={CurrentExercise === Exercise3 ? 'page' : undefined}>Exercise 3</a>
            <a href="?ex=4" aria-current={CurrentExercise === Exercise4 ? 'page' : undefined}>Exercise 4</a>
          </nav>
        </div>
      </header>
      <CurrentExercise />
    </>
  )
}
