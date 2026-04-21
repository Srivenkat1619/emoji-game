import {Component} from 'react'
import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    score: 0,
    totalScore: 0,
    isGameInProgress: true,
    isWon: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onPlayAgain = () => {
    this.setState({
      clickedEmojisList: [],
      isGameInProgress: true,
    })
  }

  finishGameAndSetTopScore = newScore => {
    const {totalScore} = this.state
    let newTotalScore = totalScore

    if (newScore > totalScore) {
      newTotalScore = newScore
    }

    this.setState({
      totalScore: newTotalScore,
      isGameInProgress: false,
    })
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiClickedBefore = clickedEmojisList.includes(id)

    if (isEmojiClickedBefore) {
      this.finishGameAndSetTopScore(clickedEmojisList.length)
    } else {
      if (emojisList.length - 1 === clickedEmojisList.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  render() {
    const {clickedEmojisList, totalScore, isGameInProgress} = this.state
    const {emojisList} = this.props
    const score = clickedEmojisList.length
    const isWon = score === emojisList.length

    return (
      <div className="emoji-game-container">
        <Navbar
          score={score}
          totalScore={totalScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? (
            <ul className="emojis-list-container">
              {this.shuffledEmojisList().map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  eachEmoji={eachEmoji}
                  clickEmoji={this.clickEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              isWon={isWon}
              onClickPlayAgain={this.onPlayAgain}
              score={score}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
