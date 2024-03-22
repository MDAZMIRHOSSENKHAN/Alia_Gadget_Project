/* eslint-disable react/prop-types */

const CartItem = ({ item }) => {
  const { price, shipping } = item;
  let totalPrice = 0;
  totalPrice += price;
  totalPrice += shipping;

  return (
    <div>
      <h1>Shipping Charge: {shipping}</h1>
      <h1 className="">
        Total Price:
        <span className="text-red-600 text-xl">{totalPrice}</span>
      </h1>
    </div>
  );
};

export default CartItem;
