export default function Home() {
  return (
    <div>
      <nav className="w-full p-4 flex justify-between items-center bg-white shadow">
        <h1 className="font-bold text-xl text-black">Forklift LMS</h1>
        <a href="/login" className="text-red-600 font-semibold">Login</a>
      </nav>

      <section className="p-10 text-center bg-gradient-to-r from-red-100 to-pink-100">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Online Forklift Theory Training
        </h2>

        <p className="text-lg text-gray-800 max-w-xl mx-auto">
          Complete forklift theory 100% online. Automatic progress saving.
          Certificates generated instantly after passing exams.
        </p>

        <a
          href="/login"
          className="mt-6 inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-semibold"
        >
          Login to Start
        </a>
      </section>
    </div>
  );
}
