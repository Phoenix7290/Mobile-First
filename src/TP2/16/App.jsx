import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import VideoDetails from './components/VideoDetails';
import VideoMenu from './components/VideoMenu';
import RelatedVideos from './components/RelatedVideos';
import CommentsSection from './components/CommentsSection';
import AdSection from './components/AdSection';
import './main.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <div className="video-section">
          <VideoPlayer />
          <VideoDetails />
          <VideoMenu />
        </div>
        <AdSection />
        <RelatedVideos />
        <CommentsSection />
      </div>
    </div>
  );
};

export default App;
