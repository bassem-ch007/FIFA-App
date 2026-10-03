import PlayerCard from './PlayerCard.jsx'

export default function PlayersList({ players }) {
  return (
    <div className="players-grid">
      {players.map((player) => (
        <PlayerCard
          key={player.name}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          image={player.image}
        />
      ))}
    </div>
  )
}
