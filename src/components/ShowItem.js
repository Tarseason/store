import ClothingCard from "./clothingCard";

function ShowItem(props) {
  return (
    <div>
      <ClothingCard item={props.value} />
    </div>
  );
}

export default ShowItem;
