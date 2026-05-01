import React from 'react';

const ExtraSections = () => {
    return (
       <div className="w-11/12 mx-auto my-16">
      {/* Summer Care Tips Section */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold">Summer Guide</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Summer Care Tips
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Follow these simple summer care tips to stay fresh, healthy, and comfortable during hot days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100">
            <div className="card-body text-center">
              <div className="text-5xl mb-4">💧</div>
              <h3 className="text-xl font-bold">Stay Hydrated</h3>
              <p className="text-gray-500">
                Drink enough water throughout the day to keep your body fresh and active in summer.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100">
            <div className="card-body text-center">
              <div className="text-5xl mb-4">☀️</div>
              <h3 className="text-xl font-bold">Use Sunscreen</h3>
              <p className="text-gray-500">
                Apply sunscreen before going outside to protect your skin from harmful UV rays.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100">
            <div className="card-body text-center">
              <div className="text-5xl mb-4">👕</div>
              <h3 className="text-xl font-bold">Wear Light Clothes</h3>
              <p className="text-gray-500">
                Choose breathable cotton outfits to stay cool and comfortable in hot weather.
              </p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
    );
};

export default ExtraSections;