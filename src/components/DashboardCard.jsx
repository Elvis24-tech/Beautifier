function DashboardCard({ title, value, icon }) {
    return (
      <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-6 md:p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">
        {icon && (
          <div className="mb-4 text-pink-500 text-2xl">
            {icon}
          </div>
        )}
        <h2 className="text-gray-500 text-sm md:text-base">
          {title}
        </h2>
        <p className="text-2xl md:text-3xl font-black text-gray-800 mt-2">
          {value}
        </p>
  
      </div>
    );
  }
  
  export default DashboardCard;