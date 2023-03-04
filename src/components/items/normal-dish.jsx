import MainDish from "./main-dish";

const NormalDish = (props) => {
  return (
    <MainDish style={{ width: "290px", height: "216px" }}>
      {props.children}
    </MainDish>
  );
};

export default NormalDish;
