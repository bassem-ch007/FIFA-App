import MatchesList from '../../components/MatchesList.jsx'

export default function App() {
  const matches = [
    {
      team1: 'Arsenal',
      team2: 'Barcelona',
      logo1: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
      logo2: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
      score: '2 - 1',
      date: '2 October 2026',
      time: '18:00',
      status: 'In progress · demo',
    },
    {
      team1: 'Paris Saint-Germain',
      team2: 'Real Madrid',
      logo1: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
      logo2: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
      score: 'VS',
      date: '2 October 2026',
      time: '20:45',
      status: 'Upcoming · demo',
    },
    {
      team1: 'Real Madrid',
      team2: 'Arsenal',
      logo1: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
      logo2: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
      score: '1 - 1',
      date: '1 October 2026',
      time: '19:00',
      status: 'Finished · demo',
    },
  ]

  return (
    <main className="page-container exercise-page">
      <p className="section-label">Exercise 3 · Reusing the pattern</p>
      <h1>A simple match collection</h1>
      <p className="exercise-description">App passes matches to MatchesList. Its map() renders MatchCard components with explicit props. Fixtures and scores are static examples.</p>
      <MatchesList matches={matches} />
    </main>
  )
}
