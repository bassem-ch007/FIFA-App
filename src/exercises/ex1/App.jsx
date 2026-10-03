import PlayerCard from '../../components/PlayerCard.jsx'

export default function App() {
  return (
    <main className="page-container exercise-page">
      <p className="section-label">Exercise 1 · Component</p>
      <h1>A first player card</h1>
      <p className="exercise-description">One reusable React-Bootstrap Card with fictitious information built into PlayerCard.</p>
      <div className="single-player">
        <PlayerCard />
      </div>
    </main>
  )
}
