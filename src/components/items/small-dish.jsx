import MainDish from "./main-dish";

const SmallDish = (props) => {
  return (
    <MainDish style={{ width: "220px", height: "200px" }}>
      {props.children}
    </MainDish>
  );
};

export default SmallDish;
