// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachComment, onDeleteComment, onLike} = props
  const {name, comment, isLike, backgroundColor, id} = eachComment
  const firstLetter = name[0]
  const imageUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeColor = isLike ? 'liked-name' : 'like-name'

  const deleteItem = () => {
    onDeleteComment(id)
  }

  const changeLike = () => {
    onLike(id)
  }

  const time = formatDistanceToNow(new Date())

  return (
    <li className="list-comment-container">
      <div className="top-container">
        <div className={`profile-container ${backgroundColor}`}>
          <p className={`letter `}>{firstLetter}</p>
        </div>
        <p className="user-name"> {name} </p>
        <p className="post-time">{time} </p>
      </div>
      <p className="written-comment"> {comment} </p>
      <div className="icon-container">
        <div className="like-container">
          <button type="button" className="like-button" onClick={changeLike}>
            <img src={imageUrl} className="like-icon" alt="like" />
          </button>
          <p className={likeColor}> Like</p>
        </div>
        <button
          type="button"
          className="like-button"
          onClick={deleteItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="like-icon"
            alt="delete"
          />
        </button>
      </div>
      <div>
        <hr className="list-line" />
      </div>
    </li>
  )
}

export default CommentItem
