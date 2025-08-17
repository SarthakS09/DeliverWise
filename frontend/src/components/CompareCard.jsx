const CompareCard = ({ platform, price, time }) => {
  return (
    <div className="card">
      <h3>{platform}</h3>
      <p>Price: ₹{price}</p>
      <p>Delivery Time: {time}</p>
    </div>
  );
};

export default CompareCard;
