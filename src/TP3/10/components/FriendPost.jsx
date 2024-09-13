import PropTypes from 'prop-types';

export default function FriendPost({ image, title, author, date, content, likes, shares, comments }) {
    return (
      <div className="friend-post">
        <img src={image} alt="post" />
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
          <small>{author} - {date}</small>
          <div className="post-info">
            <span>{likes} curtidas</span> | <span>{shares} compartilhamentos</span>
          </div>
          <div className="comments">
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
        </div>
      </div>
    );
}

FriendPost.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    shares: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.string).isRequired,
};
  