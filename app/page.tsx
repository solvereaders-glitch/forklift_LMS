import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="w-full p-4 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-black">Forklift LMS</h1>
          <a href="/login" className="text-red-600 hover:text-red-700 font-semibold">
            Login
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        <section className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Online Forklift Theory Training
          </h2>
          <p className="text-lg mb-8 text-black">
            Complete forklift theory 100% online. Automatic progress saving.
            Certificates generated instantly after passing exams.
          </p>
          <a
            href="/login"
            className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
          >
            Login to Start
          </a>
        </section>
      </main>
    </div>
  );
}
