export default function Features() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-bold text-xl mb-2">Fast</h3>
              <p className="text-gray-600">Built using Vite for ultra-fast performance.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-bold text-xl mb-2">Modern</h3>
              <p className="text-gray-600">Styled using powerful Tailwind CSS utilities.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-bold text-xl mb-2">Simple</h3>
              <p className="text-gray-600">Clean components with zero unnecessary files.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  