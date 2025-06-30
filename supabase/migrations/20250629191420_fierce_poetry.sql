/*
  # Create community posts table

  1. New Tables
    - `community_posts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles.id)
      - `content` (text, required)
      - `image_url` (text, optional)
      - `link_url` (text, optional)
      - `link_title` (text, optional)
      - `tags` (text array, default empty array)
      - `likes_count` (integer, default 0)
      - `comments_count` (integer, default 0)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `community_posts` table
    - Add policies for authenticated users to read all posts and manage their own
*/

CREATE TABLE IF NOT EXISTS community_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  content text NOT NULL,
  image_url text,
  link_url text,
  link_title text,
  tags text[] DEFAULT '{}',
  likes_count integer DEFAULT 0,
  comments_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;

-- Allow everyone to view posts
CREATE POLICY "Posts are viewable by everyone"
  ON community_posts
  FOR SELECT
  USING (true);

-- Allow authenticated users to insert posts
CREATE POLICY "Authenticated users can insert posts"
  ON community_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to update their own posts
CREATE POLICY "Users can update their own posts"
  ON community_posts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own posts
CREATE POLICY "Users can delete their own posts"
  ON community_posts
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create trigger for community_posts table
CREATE TRIGGER update_community_posts_updated_at
  BEFORE UPDATE ON community_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();