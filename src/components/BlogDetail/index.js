import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './index.scss'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Caching: A Simple Guide for Developers',
    date: 'May 04, 2025',
    image: '/images/blogs/cache.jpg',
    content: `
      <p>Caching is one of the simplest ways to improve application performance, but it is most useful when the reason for caching is clear. The idea is straightforward: keep data that is expensive to compute or fetch somewhere faster so repeated requests do less work.</p>

      <h3>In-memory caching</h3>
      <p>In-memory caching keeps frequently used data inside the application process. It is fast and easy to introduce, which makes it useful for values that are read often and do not change constantly.</p>
      <pre><code>Map&lt;String, Product&gt; productCache = new HashMap&lt;&gt;();

public Product getProduct(String productId) {
    if (!productCache.containsKey(productId)) {
        productCache.put(productId, database.getProductById(productId));
    }
    return productCache.get(productId);
}</code></pre>
      <p>The trade-off is that each application instance has its own cache. Once an application runs on several servers, keeping those copies consistent becomes more difficult.</p>

      <h3>Distributed caching</h3>
      <p>A distributed cache such as Redis gives several application instances access to the same cached data. This is useful for shared sessions, reference data and other values that need to be available consistently across multiple servers.</p>

      <h3>Expiration and invalidation</h3>
      <p>The hard part of caching is usually not storing data. It is deciding when that data is no longer valid. Time-to-live values, explicit invalidation and eviction policies such as LRU can help, but each choice should match how the underlying data changes.</p>

      <h3>Choosing a strategy</h3>
      <p>Lazy loading works well when data should only be cached after it is requested. Eager loading is useful when a known set of values will be needed immediately. Write-through caching favors consistency by updating the cache and persistent store together, while write-behind approaches can improve write performance at the cost of additional complexity and failure handling.</p>

      <h3>Final thoughts</h3>
      <p>Good caching starts with measurement. Find the expensive path, understand how fresh the data needs to be, choose a cache that fits the problem and verify the improvement. A cache should simplify the performance problem, not create a harder consistency problem.</p>
    `,
  },
  {
    id: 2,
    title: '01 Matrix: BFS-Based Distance Calculation',
    date: 'June 23, 2025',
    content: `
      <p>The 01 Matrix problem asks for the distance from every cell containing 1 to its nearest 0. A direct approach can repeat the same work many times. Multi-source breadth-first search gives a cleaner and more efficient solution.</p>

      <h3>Problem</h3>
      <p>Given an <code>m x n</code> binary matrix, return a matrix where each cell contains the shortest number of horizontal or vertical moves required to reach a 0.</p>
      <pre><code>Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]]

Output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]</code></pre>

      <h3>Why multi-source BFS works</h3>
      <p>Instead of starting a search from every 1, start from every 0 at the same time. Add all zero cells to the queue with distance 0, then expand outward level by level. The first time a cell is reached is guaranteed to be through a shortest path.</p>

      <h3>Java implementation</h3>
      <pre><code>class Node {
    int row, col, distance;

    Node(int row, int col, int distance) {
        this.row = row;
        this.col = col;
        this.distance = distance;
    }
}

class Solution {
    public int[][] updateMatrix(int[][] mat) {
        int rows = mat.length;
        int cols = mat[0].length;
        int[][] distance = new int[rows][cols];
        boolean[][] visited = new boolean[rows][cols];
        Queue&lt;Node&gt; queue = new LinkedList&lt;&gt;();

        for (int row = 0; row &lt; rows; row++) {
            for (int col = 0; col &lt; cols; col++) {
                if (mat[row][col] == 0) {
                    queue.add(new Node(row, col, 0));
                    visited[row][col] = true;
                }
            }
        }

        int[] dr = {-1, 0, 1, 0};
        int[] dc = {0, 1, 0, -1};

        while (!queue.isEmpty()) {
            Node node = queue.poll();
            distance[node.row][node.col] = node.distance;

            for (int i = 0; i &lt; 4; i++) {
                int nextRow = node.row + dr[i];
                int nextCol = node.col + dc[i];

                if (nextRow &gt;= 0 &amp;&amp; nextCol &gt;= 0 &amp;&amp;
                    nextRow &lt; rows &amp;&amp; nextCol &lt; cols &amp;&amp;
                    !visited[nextRow][nextCol]) {
                    visited[nextRow][nextCol] = true;
                    queue.add(new Node(nextRow, nextCol, node.distance + 1));
                }
            }
        }

        return distance;
    }
}</code></pre>

      <h3>Complexity</h3>
      <p>Each cell is processed at most once, so the time complexity is <code>O(m × n)</code>. The queue, visited matrix and result matrix also require <code>O(m × n)</code> space.</p>

      <h3>Takeaway</h3>
      <p>Multi-source BFS is useful whenever several starting points should spread through a graph or grid at the same time. Recognizing that pattern often turns a repeated-search solution into a single traversal.</p>
    `,
  },
  {
    id: 3,
    title: 'Tips for Clean JavaScript Code',
    date: 'April 20, 2025',
    image: '/images/blogs/react.png',
    content: `
      <p>Clean JavaScript is less about clever syntax and more about making intent obvious. Code is easier to maintain when another developer can understand what it does without reconstructing the reasoning behind every line.</p>

      <h3>Name things for their purpose</h3>
      <p>Prefer names such as <code>activeUsers</code>, <code>calculateTotal</code> or <code>isPaymentValid</code> over short names that only make sense while the code is fresh in your mind.</p>

      <h3>Keep functions focused</h3>
      <p>A function that validates input, calls an API, transforms data and updates the UI is doing too much. Smaller functions are easier to test, reuse and review.</p>

      <h3>Reduce unnecessary nesting</h3>
      <p>Guard clauses can make control flow easier to follow by handling invalid or exceptional cases early instead of wrapping the main path in several levels of conditions.</p>

      <h3>Be consistent</h3>
      <p>Consistent formatting, error handling and naming conventions matter more than personal style preferences. A codebase should feel predictable from one file to the next.</p>

      <h3>Write for the next change</h3>
      <p>Readable code is easier to modify safely. The goal is not to anticipate every possible future requirement, but to leave enough clarity that the next developer can change the behavior without guessing.</p>
    `,
  },
  {
    id: 4,
    title: 'Designing for Developers',
    date: 'April 18, 2025',
    image: '/images/blogs/react.png',
    content: `
      <p>Developers make design decisions every day, even when a dedicated designer is involved. Naming a button, ordering information, choosing an error state and deciding what happens on a small screen are all design decisions.</p>

      <h3>Start with hierarchy</h3>
      <p>Users should be able to tell what matters first. Clear headings, spacing and contrast usually improve an interface more than adding extra visual elements.</p>

      <h3>Design the states, not just the ideal screen</h3>
      <p>A feature is not complete if only its successful state looks good. Loading, empty, disabled, validation and error states should be considered from the beginning.</p>

      <h3>Responsive means more than smaller</h3>
      <p>A mobile layout should not simply shrink the desktop version. Content should reflow, controls should remain easy to tap and interactions should still make sense when hover is unavailable.</p>

      <h3>Use motion with a purpose</h3>
      <p>Animation can give an interface character and help communicate state, but it should not block content or make navigation harder. Good motion supports the experience instead of competing with it.</p>

      <h3>Keep the implementation maintainable</h3>
      <p>The best visual solution is not useful if it requires fragile layout hacks. Reusable spacing, predictable breakpoints and semantic markup make the interface easier to improve over time.</p>
    `,
  },
]

const BlogDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const blog = blogPosts.find((post) => post.id === Number(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!blog) {
    return (
      <div className="container blog-detail-page">
        <div className="text-zone">
          <h1>Article not found</h1>
          <p>The article you requested is not available.</p>
          <button onClick={() => navigate('/blogs')} className="go-back">Back to blog</button>
        </div>
      </div>
    )
  }

  return (
    <div className="container blog-detail-page">
      <article className="text-zone">
        <h1 className="blog-detail-heading">{blog.title}</h1>
        <p className="blog-date">{blog.date}</p>
        {blog.image && (
          <img
            src={blog.image}
            alt={`${blog.title} article`}
            className="blog-title-image"
            loading="lazy"
          />
        )}
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
        <button onClick={() => navigate('/blogs')} className="go-back">Back to blog</button>
      </article>
    </div>
  )
}

export default BlogDetail
