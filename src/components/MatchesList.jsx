import MatchCard from './MatchCard.jsx'

export default function MatchesList({ matches }) {
  return (
    <div className="matches-grid">
      {matches.map((match) => (
        <MatchCard
          key={`${match.team1}-${match.team2}-${match.date}`}
          team1={match.team1}
          team2={match.team2}
          logo1={match.logo1}
          logo2={match.logo2}
          score={match.score}
          date={match.date}
          time={match.time}
          status={match.status}
        />
      ))}
    </div>
  )
}
