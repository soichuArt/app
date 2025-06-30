/*
  # Create post likes table

  1. New Tables
    - `post_likes`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `post_id` (uuid, references community_posts.id)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `post_likes` table
    - Add policies for authenticated users to manage likes
    - Add unique constraint to prevent duplicate likes

  3. Functions
    - Create functions to automatically update like counts on posts
*/

CREATE TABLE IF NOT EXISTS post_likes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  post_id uuid NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, post_id)
);

ALTER TABLE post_likes ENABLE ROW LEVEL SECURITY;

-- Allow everyone to view likes
CREATE POLICY "Likes are viewable by everyone"
  ON post_likes
  FOR SELECT
  USING (true);

-- Allow authenticated users to insert their own likes
CREATE POLICY "Authenticated users can insert their own likes"
  ON post_likes
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own likes
CREATE POLICY "Users can delete their own likes"
  ON post_likes
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Function to update likes count when a like is added
CREATE OR REPLACE FUNCTION increment_post_likes()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE community_posts
  SET likes_count = likes_count + 1
  WHERE id = NEW.post_id;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Function to update likes count when a like is removed
CREATE OR REPLACE FUNCTION decrement_post_likes()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE community_posts
  SET likes_count = likes_count - 1
  WHERE id = OLD.post_id;
  RETURN OLD;
END;
$$ language 'plpgsql';

-- Triggers to automatically update like counts
CREATE TRIGGER increment_post_likes_trigger
  AFTER INSERT ON post_likes
  FOR EACH ROW
  EXECUTE FUNCTION increment_post_likes();

CREATE TRIGGER decrement_post_likes_trigger
  AFTER DELETE ON post_likes
  FOR EACH ROW
  EXECUTE FUNCTION decrement_post_likes();