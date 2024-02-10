import "../../app/globals.css";
export default function Primeiro() {
  return (
    <div>

      <div className="bg-gray-900">
        <div className="container mx-auto py-10 px-4 sm:py-20 sm:px-6">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">Welcome to our Fancy Landing Page</h1>
          <p className="text-lg sm:text-2xl text-white">Explore our amazing features and services</p>
          <button className="bg-white text-purple-500 font-bold py-2 px-4 mt-8 rounded shadow">Get Started</button>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4 sm:py-20 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded shadow p-4 sm:p-8">
            <h3 className="text-lg sm:text-2xl font-bold mb-4">Feature 1</h3>
            <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
          </div>
          <div className="bg-white rounded shadow p-4 sm:p-8">
            <h3 className="text-lg sm:text-2xl font-bold mb-4">Feature 2</h3>
            <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
          </div>
          <div className="bg-white rounded shadow p-4 sm:p-8">
            <h3 className="text-lg sm:text-2xl font-bold mb-4">Feature 3</h3>
            <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-10 px-4 sm:py-20 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow p-4 sm:p-8">
              <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
              <p className="text-gray-500 mt-2 sm:mt-4">- John Doe</p>
            </div>
            <div className="bg-white rounded shadow p-4 sm:p-8">
              <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
              <p className="text-gray-500 mt-2 sm:mt-4">- Jane Smith</p>
            </div>
            <div className="bg-white rounded shadow p-4 sm:p-8">
              <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
              <p className="text-gray-500 mt-2 sm:mt-4">- Mike Johnson</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4 sm:py-20 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Enter your message"></textarea>
          </div>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}
