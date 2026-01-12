'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'

export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const loadUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        router.push('/login')
        return
      }

      setEmail(session.user.email ?? null)
    }

    loadUser()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const navItem = (label: string, path: string) => {
    const active = pathname === path

    return (
      <button
        onClick={() => router.push(path)}
        className={`text-left text-sm font-medium transition cursor-pointer ${
          active
  ? 'text-red-600 font-semibold'
  : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        {label}
      </button>
    )
  }

  return (
    <div className="flex min-h-screen bg-surface-subtle">
      {/* SIDEBAR */}
      <aside className="w-[250px] border-r border-border px-8 py-10 flex flex-col bg-white">
        <h1 className="text-xl font-bold text-text-primary mb-10">
          Forklift LMS
        </h1>

        <nav className="flex flex-col gap-4">
          {navItem('Dashboard', '/dashboard')}
          {navItem('Courses', '/dashboard/courses')}
          {navItem('Participants', '/dashboard/participants')}
        </nav>

        {/* USER FOOTER */}
        <div className="mt-auto pt-8 border-t border-border">
          <p className="text-xs text-text-muted mb-1">
            Signed in as
          </p>
          <p className="text-sm font-medium text-text-primary mb-4">
            {email}
          </p>

          <button
  onClick={handleLogout}
  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-sm font-medium transition cursor-pointer"
>
  Logout
</button>

        </div>
      </aside>

      {/* PAGE CONTENT */}
      <main className="flex-1 px-16 py-12">
        {children}
      </main>
    </div>
  )
}
