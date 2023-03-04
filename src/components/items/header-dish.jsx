import MainDish from "./main-dish";

const HeaderDish = (props) => {
  return (
    <MainDish style={{ width: "925px", height: "216px" }}>
      {props.children}
    </MainDish>
  );
};

export default HeaderDish;
