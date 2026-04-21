import './index.css'

const Navbar = props => {
  const {score, totalScore, isGameInProgress} = props

  return (
    <nav className="nav-bar-container">
      <div className="title-logo-container">
        <img
          className="emoji-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="title">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="scores-container">
          <p className="score">Score: {score}</p>
          <p className="total-score">Top Score: {totalScore}</p>
        </div>
      )}
    </nav>
  )
}

export default Navbar
