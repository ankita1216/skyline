const amenities = [
  { title: "Valet Parking", icon: "🅿️" },
  { title: "Restaurant", icon: "🍽️" },
  { title: "Pet Friendly", icon: "🐾" },
  { title: "Massage", icon: "💆" },
  { title: "Bar", icon: "🍸" },
  { title: "Banquet", icon: "🎉" },
  { title: "Conference Room", icon: "🏢" },
  { title: "Fitness Room", icon: "🏋️" },
  { title: "Steam Bath", icon: "♨️" },
  { title: "Disabled Room", icon: "♿" },
];

const Amenities = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1501183638710-841dd1904471)",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase">
            Amenities
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
            Thoughtfully designed amenities that bring comfort, convenience,
            and a better lifestyle to your everyday living.
          </p>

          <div className="w-16 h-1 bg-white mx-auto mt-6"></div>
        </div>

        {/* Amenities Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/20 backdrop-blur-md
                border border-white/30
                rounded-xl p-6 text-center
                text-white
                transform transition duration-300
                hover:-translate-y-2 hover:scale-105
                hover:bg-white/30
              "
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="text-sm font-semibold tracking-wide">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
