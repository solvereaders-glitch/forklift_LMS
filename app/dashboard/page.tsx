'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSupabaseClient } from '../../src/lib/supabase/client';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      const { data: { session }, error } = await getSupabaseClient().auth.getSession();
      
      if (error || !session) {
        router.push('/login');
        return;
      }
      
      setUser(session.user);
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await getSupabaseClient().auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="w-full p-4 flex justify-between items-center bg-white shadow">
        <h1 className="font-bold text-xl text-black">Forklift LMS</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">{user?.email}</span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <p className="text-gray-700 mb-4">
              Welcome back, <span className="font-medium">{user?.email}</span>!
            </p>
            <p className="text-gray-600">
              Your training dashboard is ready. More features coming soon.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
