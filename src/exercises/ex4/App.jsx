import PlayersList from '../../components/PlayersList.jsx'
import MatchesList from '../../components/MatchesList.jsx'

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
    <main className="page-container">
      <header className="football-navbar">
        <a href="?ex=4" className="football-brand">MATCH<span>DAY.</span></a>
        <nav aria-label="Football sections">
          <a href="#players">Players</a>
          <a href="#matches">Matches</a>
        </nav>
      </header>

      <section className="hero">
        <p className="section-label">For the love of the game</p>
        <h1>Every match.<br /><span>Every moment.</span></h1>
        <p>The players, the teams, the beautiful game. Discover player profiles and a snapshot of matchday fixtures.</p>
      </section>

      <section id="players" className="football-section">
        <p className="section-label">The players</p>
        <h2>Featured players</h2>
        <p className="section-description">Different teams, different stories, the same passion for football.</p>
        <PlayersList players={players} />
      </section>

      <section id="matches" className="football-section">
        <p className="section-label">The fixtures</p>
        <h2>Matchday</h2>
        <p className="section-description">Sample results and upcoming fixtures, all in one place.</p>
        <MatchesList matches={matches} />
      </section>

      <footer className="football-footer">
        <p>MATCHDAY · React TP2 — Components, Props & map()</p>
        <p>Fictional profiles and fixtures. Photos are illustrative.</p>
      </footer>
    </main>
  )
}
