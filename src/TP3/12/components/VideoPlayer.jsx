import './styles.css';

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <iframe src="https://www.youtube.com/embed/MJbE3uWN9vE?si=9k0WmTiwv0gOZQXz&amp;start=55" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
};

export default VideoPlayer;
