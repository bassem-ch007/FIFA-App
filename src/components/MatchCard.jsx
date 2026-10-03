import { Card } from 'react-bootstrap'

export default function MatchCard({ team1, team2, logo1, logo2, score, date, time, status }) {
  return (
    <Card className="match-card">
      <Card.Body>
        <p className="match-status">{status}</p>
        <div className="match-teams">
          <div className="match-team">
            <img src={logo1} alt={`${team1} logo`} />
            <h3>{team1}</h3>
          </div>
          <strong className="match-score">{score}</strong>
          <div className="match-team">
            <img src={logo2} alt={`${team2} logo`} />
            <h3>{team2}</h3>
          </div>
        </div>
        <Card.Text className="match-date">{date} · {time}</Card.Text>
      </Card.Body>
    </Card>
  )
}
