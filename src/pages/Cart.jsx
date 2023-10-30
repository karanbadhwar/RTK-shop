import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items.map((item) => {
          return (
            <div className="cartCard" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h5>{item.title}</h5>
              <h5>{item.price}</h5>
              <button className="btn" onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
