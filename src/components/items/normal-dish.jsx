import MainDish from './main-dish';

const NormalDish = (props) => {
  return (
    <MainDish style={{ width: "300px", height: "300px" }}>
      {props.children}
    </MainDish>
  );
};

export default NormalDish;
