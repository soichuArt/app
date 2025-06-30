import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface CommunityPost {
  id: string
  user_id: string
  content: string
  image_url?: string
  link_url?: string
  link_title?: string
  tags: string[]
  likes_count: number
  comments_count: number
  created_at: string
  updated_at: string
  // User profile data (joined from profiles table)
  profiles?: {
    display_name: string
    avatar_url?: string
    location?: string
  }
}

export interface UserProfile {
  id: string
  display_name: string
  avatar_url?: string
  location?: string
  bio?: string
  created_at: string
  updated_at: string
}

export interface PostLike {
  id: string
  user_id: string
  post_id: string
  created_at: string
}