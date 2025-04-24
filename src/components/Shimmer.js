const Shimmer = () => {
    return (
      <div className="shimmer-container">
        {Array(15).fill("").map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-text shimmer-title"></div>
            <div className="shimmer-text shimmer-rating"></div>
            <div className="shimmer-text shimmer-cuisine"></div>
            <div className="shimmer-text shimmer-location"></div>
          </div>
        ))}
      </div>
    );
  };
  export default Shimmer;
  