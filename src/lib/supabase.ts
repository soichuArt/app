import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zojnfdatnfkdzfdmwalj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpvam5mZGF0bmZrZHpmZG13YWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMjIzNjUsImV4cCI6MjA2Njc5ODM2NX0.x8CsAcL5vpq4AfLs5Yv2dLNZBEGYtm-WHN-t69xB81M'

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
