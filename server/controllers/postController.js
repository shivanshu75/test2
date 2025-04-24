exports.getAllPosts = async (req, res) => {
    console.log('GET /api/posts hit'); // 👈 Log this
    try {
      const posts = await postService.fetchPosts();
      res.status(200).json(posts);
    } catch (error) {
      console.error(error); // 👈 Log error
      res.status(500).json({ message: 'Failed to fetch posts', error: error.message });
    }
  };
  