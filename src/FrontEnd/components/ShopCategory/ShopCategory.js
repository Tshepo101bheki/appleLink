import { useParams, Link } from 'react-router-dom';


const ShopCategory = () => {
  const { category } = useParams();
  
  // Map category keys to display names
  const categoryNames = {
    iphone: 'iPhones',
    mac: 'MacBooks',
    ipad: 'iPads',
    watch: 'Apple Watch',
    airpods: 'AirPods',
    accessories: 'Accessories'
  };

  const categoryName = categoryNames[category] || category;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="sticky top-0 bg-white shadow-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              <span className="text-3xl text-blue-600">🍎</span>
              <span>AppleLink</span>
            </Link>
            <div className="flex gap-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-purple-600 font-medium transition"
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="text-gray-700 hover:text-purple-600 font-medium transition"
              >
                All Products
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Shop {categoryName}
          </h1>
          <p className="text-gray-600">
            Browse our collection of certified refurbished {categoryName.toLowerCase()}
          </p>
        </div>

        {/* Placeholder for category-specific products */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-6xl text-gray-300 mb-4">
            {category === 'iphone' && '📱'}
            {category === 'mac' && '💻'}
            {category === 'ipad' && '📱'}
            {category === 'watch' && '⌚'}
            {category === 'airpods' && '🎧'}
            {category === 'accessories' && '🔋'}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            {categoryName} Collection
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            This page would display all {categoryName.toLowerCase()} products with filtering options. 
            For now, browse all products in our main shop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              View All Products
            </Link>
            <Link 
              to="/"
              className="border-2 border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400">© 2024 AppleLink. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ShopCategory;