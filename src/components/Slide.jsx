import { Link } from "react-router-dom";


const Slide = ({image, text}) => {
    return (
        <div>
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${image})`,
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">{text}</h1>
      
      <Link to={'/add-job'} className="btn bg-gray-600 text-white">Post job and hire expert</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slide;