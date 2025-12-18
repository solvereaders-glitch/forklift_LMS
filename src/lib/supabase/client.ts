/**
 * Supabase client wrapper
 *
 * Exports a singleton `getSupabaseClient()` which creates a Supabase client
 * using `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
 *
 * This file is intentionally minimal — install `@supabase/supabase-js`
 * and provide the env vars to use it.
 */

import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

let supabase: SupabaseClient | null = null;

/**
 * Returns a singleton Supabase client. Throws if required env vars are missing.
 */
export function getSupabaseClient(): SupabaseClient {
  if (supabase) return supabase;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY"
    );
  }

  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { detectSessionInUrl: false },
  });

  return supabase;
}

export default getSupabaseClient;
