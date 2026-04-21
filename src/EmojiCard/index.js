import './index.css'

const EmojiCard = props => {
  const {eachEmoji, clickEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item" onClick={onClickEmoji}>
      <button
        type="button"
        className="emoji-btn"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          outline: 'none',
        }}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard
