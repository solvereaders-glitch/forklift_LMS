'use client'

export default function CoursesPage() {
  return (
    <>
      <h2 className="text-3xl font-bold text-text-primary mb-10">
        Courses
      </h2>

      <div className="grid grid-cols-1 gap-6 max-w-3xl">
        {/* Course 1 */}
        <div className="border border-border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Forklift Safety Training
          </h3>

          <span className="inline-block mb-4 text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
            Not Started
          </span>

          <button className="bg-red-600 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition cursor-pointer">
            Start Course
          </button>
        </div>

        {/* Course 2 */}
        <div className="border border-border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Workplace Hazard Awareness
          </h3>

          <span className="inline-block mb-4 text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700">
            In Progress
          </span>

          <button className="bg-red-600 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition cursor-pointer">
            Continue Course
          </button>
        </div>
      </div>
    </>
  )
}
