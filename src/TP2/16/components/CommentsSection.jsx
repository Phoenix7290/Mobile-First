import './styles.css';

const CommentsSection = () => {
  const comments = [
    { id: 1, name: "User 1", date: "2024-09-01", comment: "Great video!" },
    { id: 2, name: "User 2", date: "2024-09-01", comment: "Very informative." },
  ];

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      {comments.map(comment => (
        <div key={comment.id} className="comment-item">
          <p><strong>{comment.name}</strong> ({comment.date})</p>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;
