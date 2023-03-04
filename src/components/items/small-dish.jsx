import MainItem from "./main-dish";

const SmallDish = (props) => {
  return (
    <MainItem style={{ width: "200px", height: "200px" }}>
      {props.children}
    </MainItem>
  );
};

export default SmallDish;
