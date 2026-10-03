import PlayersList from '../../components/PlayersList.jsx'

export default function App() {
  const players = [
    {
      name: 'Adrian Silva',
      team: 'Arsenal',
      nationality: 'Portugal',
      jerseyNumber: 10,
      age: 24,
      image: 'https://images.pexels.com/photos/17583386/pexels-photo-17583386.jpeg?auto=compress&cs=tinysrgb&w=640',
    },
    {
      name: 'Malik Diallo',
      team: 'Barcelona',
      nationality: 'Senegal',
      jerseyNumber: 7,
      age: 22,
      image: 'https://images.pexels.com/photos/33748430/pexels-photo-33748430.jpeg?auto=compress&cs=tinysrgb&w=640',
    },
    {
      name: 'Lucas Moreau',
      team: 'Paris Saint-Germain',
      nationality: 'France',
      jerseyNumber: 8,
      age: 26,
      image: 'https://images.pexels.com/photos/5246963/pexels-photo-5246963.jpeg?auto=compress&cs=tinysrgb&w=640',
    },
    {
      name: 'Youssef Ben Ali',
      team: 'Real Madrid',
      nationality: 'Tunisia',
      jerseyNumber: 11,
      age: 23,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=640&q=80',
    },
  ]

  return (
    <main className="page-container exercise-page">
      <p className="section-label">Exercise 2 · Props & map()</p>
      <h1>One component, four players</h1>
      <p className="exercise-description">App passes the players array to PlayersList. The list uses map() and passes each player's information to PlayerCard through props.</p>
      <PlayersList players={players} />
    </main>
  )
}
