export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white">
      <nav className="w-full p-4 flex justify-between items-center bg-white shadow">
        <h1 className="font-bold text-xl">Forklift LMS</h1>
        <a href="/" className="text-gray-700">Home</a>
      </nav>

      <main className="flex-grow flex items-center justify-center p-8">
        <div className="w-full max-w-md p-8 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <form className="space-y-4" action="#" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                required
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="Your password"
              />
            </div>

            <button className="w-full mt-2 px-4 py-2 bg-red-600 text-white rounded-md font-semibold">
              Sign in
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account? <a href="#" className="text-red-600">Contact admin</a>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
