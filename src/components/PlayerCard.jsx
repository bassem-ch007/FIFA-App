import { Card } from 'react-bootstrap'

// Ex1 uses this fictitious default player. Ex2 and Ex4 supply values through props.
export default function PlayerCard({
  name = 'Adrian Silva',
  team = 'Orion FC',
  nationality = 'Portugal',
  jerseyNumber = 10,
  age = 24,
  image = 'https://images.pexels.com/photos/17583386/pexels-photo-17583386.jpeg?auto=compress&cs=tinysrgb&w=640',
}) {
  return (
    <Card className="player-card">
      <Card.Img variant="top" src={image} alt={`Stock photo for ${name}'s fictional profile`} />
      <Card.Body>
        <Card.Title as="h3">{name}</Card.Title>
        <Card.Text className="player-team">{team}</Card.Text>
        <Card.Text className="player-nationality">{nationality}</Card.Text>
        <div className="player-details">
          <span>#{jerseyNumber}</span>
          <span>Age {age}</span>
        </div>
      </Card.Body>
    </Card>
  )
}
