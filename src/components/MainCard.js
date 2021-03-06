
const MainCard = ({ img, onHeartClick, alreadyFavorites }) => {
 
  const heartIcon = alreadyFavorites ? "đ" : "đ¤";
  
  return (
    <div className="main-card">
      <img src={img} alt="ęł ěě´" width="400" />
      <button className="heart_btn" onClick={onHeartClick}>{heartIcon}</button>
    </div>
  );
};
export default MainCard