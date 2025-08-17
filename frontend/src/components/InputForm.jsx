import { useState } from "react";

const InputForm = ({ onCompare }) => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [orderValue, setOrderValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pickup && drop && orderValue) {
      onCompare(pickup, drop, Number(orderValue));
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pickup Location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      />
      <input
        type="text"
        placeholder="Drop Location"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
      />
      <input
        type="number"
        placeholder="Order Value"
        value={orderValue}
        onChange={(e) => setOrderValue(e.target.value)}
      />
      <button type="submit">Compare</button>
    </form>
  );
};

export default InputForm;
