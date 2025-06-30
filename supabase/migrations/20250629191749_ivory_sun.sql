/*
  # Fix profiles table RLS policy

  1. Security Policy Updates
    - Drop existing INSERT and UPDATE policies that use uid()
    - Create new policies using auth.uid() for proper authentication
    - Ensure authenticated users can create and update their own profiles

  2. Changes
    - Replace uid() with auth.uid() in RLS policies
    - Maintain existing SELECT policy for public access
*/

-- Drop existing policies that use uid()
DROP POLICY IF EXISTS "Users can insert their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;

-- Create new policies with correct auth.uid() function
CREATE POLICY "Users can insert their own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);