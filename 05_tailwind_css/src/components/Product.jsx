const Product = ({ ele }) => {
  const rating = ele.rating;
  const ratingCondition =
    rating >= 8.5
      ? "text-green-600"
      : rating >= 6.5
      ? "text-yellow-500"
      : "text-red-500";

  return (
    <div className="bg-white rounded-xl shadow-md p-3 hover:shadow-lg transition-all w-full max-w-[220px]">
      <div className="h-36 bg-gray-100 rounded-md flex items-center justify-center mb-2">
        <img src={ele.image} alt={ele.name} className="h-full object-contain" />
      </div>
      <h4 className="text-sm font-semibold mb-1">{ele.name}</h4>
      <h4 className="text-sm font-bold text-purple-700 mb-1">${ele.price}</h4>
      <h3 className={`text-sm font-medium mb-1 ${ratingCondition}`}>
        ⭐ {ele.rating}
      </h3>
      <p className="text-xs text-gray-500">{ele.description}</p>
    </div>
  );
};

export default Product;
