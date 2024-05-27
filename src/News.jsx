import "./News.css";

const NewRelease = (props) => {
  return (
    <>
      <div className="imgCard" onClick={props.changeExploreCard}>
        <img src={props.imgCard.image} alt="" />
        <div className="op2"></div>
        <div className="animeTitle">
          <p className="episode">Episode {props.imgCard.episode}</p>
          <h2 className="movieName">{props.imgCard.movieName}</h2>
        </div>
      </div>
    </>
  );
};

export default NewRelease;
