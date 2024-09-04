import './styles.css';

const RelatedVideos = () => {
  const videos = [
    { id: 1, title: "Related Video 1", author: "Author 1" },
    { id: 2, title: "Related Video 2", author: "Author 2" },
    { id: 3, title: "Related Video 3", author: "Author 3" },
  ];

  return (
    <div className="related-videos">
      {videos.map(video => (
        <div key={video.id} className="related-video-item">
          <img src="https://via.placeholder.com/200" alt="thumbnail" />
          <div>
            <h3>{video.title}</h3>
            <p>{video.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedVideos;
