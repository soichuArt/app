import React, { useState, useEffect } from 'react';
import { PenTool, Plus, Calendar, Search, Filter, BookOpen, Heart, MessageCircle, Share2, Image, Link, Send, LogIn, LogOut } from 'lucide-react';
import { supabase, type CommunityPost } from '../lib/supabase';
import AuthModal from '../components/AuthModal';

interface CommunityProps {
  setCurrentPage: (page: string) => void;
}

const Community = ({ setCurrentPage }: CommunityProps) => {
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [newPost, setNewPost] = useState({
    content: '',
    image_url: '',
    link_url: '',
    tags: ''
  });
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  // Check user authentication status
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch posts
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      // First get posts
      const { data: postsData, error: postsError } = await supabase
        .from('community_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (postsError) throw postsError;

      // Then get profiles for each post
      const postsWithProfiles = await Promise.all(
        (postsData || []).map(async (post) => {
          const { data: profileData } = await supabase
            .from('profiles')
            .select('display_name, avatar_url, location')
            .eq('id', post.user_id)
            .single();

          return {
            ...post,
            profiles: profileData
          };
        })
      );

      setPosts(postsWithProfiles);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || !newPost.content.trim()) return;

    try {
      const { error } = await supabase
        .from('community_posts')
        .insert({
          user_id: user.id,
          content: newPost.content,
          image_url: newPost.image_url || null,
          link_url: newPost.link_url || null,
          tags: newPost.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        });

      if (error) throw error;

      setNewPost({ content: '', image_url: '', link_url: '', tags: '' });
      setShowNewPostForm(false);
      fetchPosts(); // Refresh posts
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleLike = async (postId: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    try {
      // Check if user already liked this post
      const { data: existingLike } = await supabase
        .from('post_likes')
        .select('id')
        .eq('user_id', user.id)
        .eq('post_id', postId)
        .single();

      if (existingLike) {
        // Unlike
        await supabase
          .from('post_likes')
          .delete()
          .eq('user_id', user.id)
          .eq('post_id', postId);
      } else {
        // Like
        await supabase
          .from('post_likes')
          .insert({ user_id: user.id, post_id: postId });
      }

      fetchPosts(); // Refresh to update like counts
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const formatTime = (timestamp: string) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diff = now.getTime() - postTime.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const filteredPosts = posts.filter(post =>
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.profiles?.display_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-soichu-600 mx-auto"></div>
          <p className="mt-4 text-gray-500">Loading community posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <PenTool className="h-16 w-16 text-soichu-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-geomanist font-ultralight text-gray-500 mb-4 tracking-wide geomanist-ultra-thin">
          Welcome to Soichu Pueblo*
        </h1>
        <p className="text-lg text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
          A safe place to be yourself. <br />Pueblo — a country town, a gentle place where everyone knows each other,
          protects each other, and accepts each other. <br />That’s the spirit I’m weaving into this space: a virtual Pueblo where you can simply arrive, as you are. <br />Soichu Pueblo is a community of presence, creativity, and care.</br> <br>Rooted in truth, blossoming through connection. <br />This is just the beginning — the heart of Soichu, now finding its first home. </br>Feel free to share your life, your needs, your thoughts — whatever moves you.
          <br />Thank you for being here. <br />Bienvenidxs. Let’s grow together.       </p>
      </div>

      {/* Auth Status & Actions */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts, people, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soichu-500 font-light"
            />
          </div>

          {user ? (
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowNewPostForm(!showNewPostForm)}
                className="flex items-center space-x-2 px-6 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
              >
                <Plus className="h-5 w-5" />
                <span>Share Your Journey</span>
              </button>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 px-4 py-3 text-gray-500 hover:text-gray-600 transition duration-200 font-light"
              >
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
            >
              <LogIn className="h-5 w-5" />
              <span>Join Community</span>
            </button>
          )}
        </div>

        {/* New Post Form */}
        {showNewPostForm && user && (
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <form onSubmit={handleSubmitPost} className="space-y-4">
              <div>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Share your spiritual journey, ritual experience, or insight..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soichu-500 font-light resize-none"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Image className="h-4 w-4 text-gray-500" />
                    <label className="text-sm font-light text-gray-500">Add Image URL (optional)</label>
                  </div>
                  <input
                    type="url"
                    value={newPost.image_url}
                    onChange={(e) => setNewPost(prev => ({ ...prev, image_url: e.target.value }))}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soichu-500 font-light"
                  />
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Link className="h-4 w-4 text-gray-500" />
                    <label className="text-sm font-light text-gray-500">Add Link (optional)</label>
                  </div>
                  <input
                    type="url"
                    value={newPost.link_url}
                    onChange={(e) => setNewPost(prev => ({ ...prev, link_url: e.target.value }))}
                    placeholder="https://example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soichu-500 font-light"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-light text-gray-500 mb-2 block">Tags (comma separated)</label>
                <input
                  type="text"
                  value={newPost.tags}
                  onChange={(e) => setNewPost(prev => ({ ...prev, tags: e.target.value }))}
                  placeholder="ritual, meditation, healing"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soichu-500 font-light"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setShowNewPostForm(false)}
                  className="px-4 py-2 text-gray-500 hover:text-gray-600 transition duration-200 font-light"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center space-x-2 px-6 py-2 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
                >
                  <Send className="h-4 w-4" />
                  <span>Share Post</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Community Feed */}
      <div className="space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">
              No posts yet
            </h3>
            <p className="text-gray-400 font-light">
              {user ? "Be the first to share your spiritual journey!" : "Join our community to see and share posts."}
            </p>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              {/* Post Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-soichu-100 rounded-full flex items-center justify-center">
                  {post.profiles?.avatar_url ? (
                    <img
                      src={post.profiles.avatar_url}
                      alt={post.profiles.display_name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-soichu-600 font-medium">
                      {post.profiles?.display_name?.charAt(0) || 'U'}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-700">{post.profiles?.display_name || 'Anonymous'}</h3>
                  {post.profiles?.location && (
                    <p className="text-sm text-gray-500 font-light">{post.profiles.location}</p>
                  )}
                  <p className="text-xs text-gray-400 font-light">{formatTime(post.created_at)}</p>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  {post.content}
                </p>

                {/* Post Image */}
                {post.image_url && (
                  <div className="mb-4">
                    <img
                      src={post.image_url}
                      alt="Post content"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                )}

                {/* Post Link */}
                {post.link_url && (
                  <div className="border border-gray-200 rounded-lg p-4 mb-4">
                    <a
                      href={post.link_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:bg-gray-50 transition duration-200"
                    >
                      <h4 className="font-medium text-gray-700 mb-1">Shared Link</h4>
                      <p className="text-xs text-soichu-600">{post.link_url}</p>
                    </a>
                  </div>
                )}

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-soichu-100 text-soichu-700 rounded-lg text-xs font-light"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center space-x-2 text-gray-500 hover:text-soichu-600 transition duration-200"
                  >
                    <Heart className="h-5 w-5" />
                    <span className="text-sm font-light">{post.likes_count || 0}</span>
                  </button>

                  <button className="flex items-center space-x-2 text-gray-500 hover:text-soichu-600 transition duration-200">
                    <MessageCircle className="h-5 w-5" />
                    <span className="text-sm font-light">{post.comments_count || 0}</span>
                  </button>

                  <button className="flex items-center space-x-2 text-gray-500 hover:text-soichu-600 transition duration-200">
                    <Share2 className="h-5 w-5" />
                    <span className="text-sm font-light">Share</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Community Guidelines */}
      <div className="mt-16 bg-gradient-to-r from-soichu-50 to-cream-50 rounded-lg p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-geomanist font-ultralight text-gray-500 mb-4 geomanist-ultra-thin">
            Community Guidelines
          </h2>
          <p className="text-base text-gray-500 font-light max-w-2xl mx-auto">
            Our shared space is a sacred place for authentic sharing, mutual support, and spiritual growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-soichu-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Heart className="h-6 w-6 text-soichu-600" />
            </div>
            <h3 className="text-base font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">
              Share with Love
            </h3>
            <p className="text-gray-500 font-light text-sm">
              Share your authentic experiences with kindness and respect for all spiritual paths.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-soichu-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="h-6 w-6 text-soichu-600" />
            </div>
            <h3 className="text-base font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">
              Support Each Other
            </h3>
            <p className="text-gray-500 font-light text-sm">
              Offer encouragement, wisdom, and compassionate responses to fellow community members.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-soichu-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-6 w-6 text-soichu-600" />
            </div>
            <h3 className="text-base font-geomanist font-ultralight text-gray-500 mb-2 geomanist-ultra-thin">
              Learn Together
            </h3>
            <p className="text-gray-500 font-light text-sm">
              Share insights, ask questions, and grow together in our collective spiritual journey.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-gray-500 font-light mb-6">
          Ready to deepen your practice with our community?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setCurrentPage('rituals')
            }}
            className="px-8 py-3 bg-soichu-600 text-white rounded-lg hover:bg-soichu-700 transition duration-200 font-light"
          >
            Explore Rituals
          </button>
          {/* <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setCurrentPage('premium')
            }}
            className="px-8 py-3 text-gray-500 hover:text-gray-600 transition duration-200 font-light"
          >
            Join Premium Community →
          </button> */}
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default Community;
