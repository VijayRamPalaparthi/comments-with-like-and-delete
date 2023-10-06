import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    nameText: '',
    commentText: '',
  }

  onChangeName = event => {
    this.setState({nameText: event.target.value})
  }

  onChangeComment = event => {
    this.setState({commentText: event.target.value})
  }

  onSubmitDetail = event => {
    event.preventDefault()
    const {nameText, commentText} = this.state
    const bgNumber = Math.ceil(Math.random() * 7)
    const bgColor = initialContainerBackgroundClassNames[bgNumber]
    const newComment = {
      id: uuidv4(),
      name: nameText,
      comment: commentText,
      isLike: false,
      backgroundColor: bgColor,
    }
    this.setState(prevList => ({
      commentsList: [...prevList.commentsList, newComment],
      nameText: '',
      commentText: '',
    }))
  }

  onDeleteComment = uuid => {
    this.setState(prevList => ({
      commentsList: prevList.commentsList.filter(
        eachObject => eachObject.id !== uuid,
      ),
    }))
  }

  onLike = uuid => {
    this.setState(prevList => ({
      commentsList: prevList.commentsList.map(eachObject => {
        if (eachObject.id === uuid) {
          return {...eachObject, isLike: !eachObject.isLike}
        }
        return eachObject
      }),
    }))
  }

  render() {
    const {commentsList, nameText, commentText} = this.state
    const commentCount = commentsList.length
    return (
      <div className="bg-container">
        <div className="body-container">
          <h1 className="heading"> Comments </h1>
          <div className="for-image">
            <div>
              <p className="para">Say something about 4.0 Technologies</p>
              <form className="inputs-container" onSubmit={this.onSubmitDetail}>
                <input
                  value={nameText}
                  type="text"
                  placeholder="Your Name"
                  onChange={this.onChangeName}
                  className="input"
                />
                <textarea
                  rows="9"
                  placeholder="Your Comment"
                  className="input"
                  onChange={this.onChangeComment}
                  value={commentText}
                />
                <button className="button" type="submit">
                  {' '}
                  Add Comment
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="image"
              alt="comments"
            />
          </div>
          <hr className="line" />
          <div className="no-of-comments-container">
            <p className="count-bg"> {commentCount}</p>
            <p className="name">Comments</p>
          </div>
          <ul className="comments-container">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                eachComment={eachComment}
                onDeleteComment={this.onDeleteComment}
                onLike={this.onLike}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
