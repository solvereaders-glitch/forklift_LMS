'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

type Participant = {
  id: string
  name: string
  email: string
  assignedCourses: number
  status: 'Active' | 'Inactive'
}

export default function ParticipantsPage() {
  const [participants, setParticipants] = useState<Participant[]>([])
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) router.push('/login')
    }

    checkAuth()

    // TEMP STATIC DATA (safe placeholder)
    setParticipants([])
  }, [router])

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
  Participants
</h1>


      <div className="border-l-4 border-brand-red bg-white p-6 rounded-lg shadow-sm">

        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-border text-sm font-semibold text-text-muted">
          <span>Name</span>
          <span>Email</span>
          <span>Assigned Courses</span>
          <span>Status</span>
        </div>

        {/* Empty State */}
        {participants.length === 0 && (
          <div className="px-6 py-10 text-center text-text-muted">
            No participants added yet.
          </div>
        )}

        {/* Rows (future-ready) */}
        {participants.map((p) => (
          <div
            key={p.id}
            className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-border text-sm"
          >
            <span className="text-text-primary font-medium">{p.name}</span>
            <span className="text-text-secondary">{p.email}</span>
            <span>{p.assignedCourses}</span>
            <span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  p.status === 'Active'
  ? 'bg-green-100 text-green-700'
  : 'bg-gray-100 text-gray-600'

                }`}
              >
                {p.status}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
