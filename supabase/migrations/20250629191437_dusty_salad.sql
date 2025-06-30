/*
  # Create database indexes for performance

  1. Indexes
    - Index on community_posts.user_id for faster joins
    - Index on community_posts.created_at for faster ordering
    - Index on post_likes.post_id for faster like queries
    - Index on post_likes.user_id for faster user like queries
*/

-- Index for faster joins between posts and profiles
CREATE INDEX IF NOT EXISTS idx_community_posts_user_id ON community_posts(user_id);

-- Index for faster ordering by creation date
CREATE INDEX IF NOT EXISTS idx_community_posts_created_at ON community_posts(created_at DESC);

-- Index for faster like queries
CREATE INDEX IF NOT EXISTS idx_post_likes_post_id ON post_likes(post_id);
CREATE INDEX IF NOT EXISTS idx_post_likes_user_id ON post_likes(user_id);

-- Composite index for checking if user liked a specific post
CREATE INDEX IF NOT EXISTS idx_post_likes_user_post ON post_likes(user_id, post_id);