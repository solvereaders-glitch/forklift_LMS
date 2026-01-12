'use client'

export default function DashboardPage() {
  return (
    <>
      <h2 className="text-3xl font-bold text-text-primary mb-10">
        Dashboard
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {[
          { label: 'Assigned Courses', value: '0' },
          { label: 'Progress', value: '0%' },
          { label: 'Certificates', value: '0' },
        ].map((item) => (
          <div
            key={item.label}
            className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
            <p className="text-sm text-gray-500 mb-2">Assigned Courses
              {item.label}
            </p>
            <p className="text-3xl font-bold text-gray-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
