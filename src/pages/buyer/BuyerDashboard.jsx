import ProductCard from "../../components/ProductCard";

function BuyerDashboard() {
  return (
    <div className="min-h-screen bg-pink-50 p-10">

      <h1 className="text-4xl font-bold text-pink-600 mb-10">
        Beauty Products
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {[1,2,3,4,5,6].map((item)=>(
          <ProductCard key={item} />
        ))}

      </div>

    </div>
  );
}

export default BuyerDashboard;