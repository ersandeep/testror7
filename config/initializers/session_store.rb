# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_testror7_session',
  :secret      => 'a9f6ac06a75ca03abfe9532c4a2b9bb1bd952d63a2e03340f327edc35a014d70430097831ecd1e362052ba2de82b26e15b0184cc587b64a19e1aac9c86b38e06'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
