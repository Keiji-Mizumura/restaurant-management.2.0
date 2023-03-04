const NormalDish = (props) => {
  return (
    <NormalDish style={{ width: "300px", height: "300px" }}>
      {props.children}
    </NormalDish>
  );
};

export default NormalDish;
