import { useParams, useNavigate } from 'react-router-dom';
import './index.scss'; // optional styling
import { useEffect } from 'react';
// import AnimatedLetters from '../AnimatedLetters';


const blogPosts = [
  {
    id: 1,
    title: 'Understanding Caching: A Simple Guide for Developers',
    date: 'May 04, 2025',
    image: '/images/blogs/cache.jpg',
    content: `<p>Imagine you go to your favorite coffee shop every morning. The first day, you give your name and your order, and they make your drink. But what if, on day two, they already remember your order and start making it as you walk in? That’s caching — remembering things to save time next time.</p>
  <p>In software, caching works the same way: we store data that's expensive to compute or fetch so we can access it faster later. Caching improves performance by saving time and reducing the load on your data sources, such as databases or external APIs.</p>

  <h3>🗂️ In-Memory Caching</h3>
  <p>Think of in-memory caching like sticky notes on your monitor — fast, temporary, and close at hand. It’s perfect for data that’s frequently accessed but doesn't change often.</p>
  <p><strong>Example:</strong> Cache your product list in a <code>HashMap</code> so you don’t query the database every time. This drastically reduces response times.</p>
  
  <pre><code> // Simple in-memory cache example in Java
  Map&lt;String, Product&gt; productCache = new HashMap&lt;&gt;();

  public Product getProduct(String productId) {
    if (!productCache.containsKey(productId)) {
      Product product = database.getProductById(productId);
      productCache.put(productId, product);  // Store in cache
    }
    return productCache.get(productId);  // Retrieve from cache
  }
  </code></pre>

  <p><strong>Tools:</strong> Java Map, Guava, Caffeine, Spring <code>@Cacheable</code></p>

  <h3>🌍 Distributed Caching</h3>
  <p>When you have multiple app servers running, each needs access to the same cached data to ensure consistency across the system. Distributed caching solves this problem by storing cached data in a shared location that all servers can access.</p>
  <p><strong>Example:</strong> All your app instances access session tokens stored in Redis, ensuring that the session data is consistent across all servers.</p>
  
  <pre><code> // Redis example using Jedis (Java)
  Jedis jedis = new Jedis("localhost");
  String sessionToken = jedis.get("session:token:userId");

  // Set session token with an expiration of 30 minutes
  jedis.setex("session:token:userId", 1800, "token_value");
  </code></pre>

  <p><strong>Tools:</strong> Redis, Memcached</p>

  <h3>🌐 Browser (Client-Side) Caching</h3>
  <p>Browser caching allows you to store static resources like images, scripts, and stylesheets on the user's device, which speeds up load times on subsequent visits.</p>
  <p><strong>Example:</strong> When a user visits a website, their browser can store resources like CSS, JavaScript, and images locally, reducing the need to re-download them each time they revisit.</p>
  
  <pre><code> // Example of setting HTTP cache headers for static resources
  const cacheControl = 'public, max-age=3600'; // Cache for 1 hour
  fetch('/path/to/resource', {
    method: 'GET',
    headers: {
      'Cache-Control': cacheControl
    }
  });
  </code></pre>

  <p><strong>Tools:</strong> HTTP cache headers, Service Workers</p>

  <h3>💾 Database Caching</h3>
  <p>This strategy caches the results of expensive database queries, so subsequent requests can be served faster without re-running the same query. It’s commonly used for aggregating data or results that don’t change often.</p>
  <p><strong>Example:</strong> Save the result of a "top 10 products this month" query so you don't have to run the same query multiple times.</p>
  
  <pre><code> // Example of caching expensive database query results in Redis
  String cacheKey = "top-products-this-month";
  String topProducts = redis.get(cacheKey);

  if (topProducts == null) {
    topProducts = database.getTopProducts();  // Expensive query
    redis.setex(cacheKey, 3600, topProducts);  // Cache for 1 hour
  }
  </code></pre>

  <p><strong>Tools:</strong> Hibernate second-level cache, Redis, manual implementations</p>

  <h3>🧠 Caching Strategies</h3>

  <h4>⏱️ Lazy Loading (Load on First Use)</h4>
  <p>Lazy loading delays fetching and caching data until it's actually needed, which can help save memory and improve initial load times.</p>
  <p><strong>Example:</strong> User permissions are only loaded when the user tries to access a feature that requires them.</p>
  
  <pre><code> // Example of lazy loading user permissions
  public class UserPermissions {
    private Map&lt;String, Permission&gt; permissionsCache = new HashMap&lt;&gt;();

    public Permission getPermission(String userId, String feature) {
      if (!permissionsCache.containsKey(userId + ":" + feature)) {
        Permission permission = database.fetchPermission(userId, feature);  // Expensive call
        permissionsCache.put(userId + ":" + feature, permission);
      }
      return permissionsCache.get(userId + ":" + feature);
    }
  }
  </code></pre>

  <p><strong>Pros:</strong> Saves memory by only loading data when needed.</p>
  <p><strong>Cons:</strong> Might cause a delay on first use, as the data needs to be fetched.</p>

  <h4>⚡ Eager Loading (Load in Advance)</h4>
  <p>Eager loading fetches data upfront, even if it's not immediately needed. This can make subsequent accesses faster because the data is already in memory.</p>
  <p><strong>Example:</strong> Load all user settings at login so they’re instantly available everywhere.</p>
  
  <pre><code> // Example of eager loading user data at login
  public class UserData {
    private Map&lt;String, Object&gt; userSettings = new HashMap&lt;&gt;();

    public void loadUserSettings(String userId) {
      userSettings = database.fetchUserSettings(userId);  // Fetch all settings upfront
    }
  }
  </code></pre>

  <p><strong>Pros:</strong> Fast access when needed, as data is already loaded.</p>
  <p><strong>Cons:</strong> Can use unnecessary memory if the data is not required immediately.</p>

  <h4>🖊️ Write-Through Caching</h4>
  <p>With write-through caching, any data written to the cache is also immediately written to the database. This ensures that the cache and database are always in sync.</p>
  <p><strong>Example:</strong> A user updates their profile, and both the cache and database are updated simultaneously.</p>
  
  <pre><code> // Write-through caching example
  public void updateUserProfile(String userId, UserProfile profile) {
    cache.put("userProfile:" + userId, profile);  // Update cache
    database.updateUserProfile(userId, profile);  // Update database
  }
  </code></pre>

  <p><strong>Pros:</strong> Always ensures data consistency.</p>
  <p><strong>Cons:</strong> Slower write operations, as both cache and database need to be updated at the same time.</p>

  <h4>🕓 Write-Behind (Write-Back) Caching</h4>
  <p>In write-behind caching, data is first written to the cache and then asynchronously written to the database in the background. This improves write performance but introduces some risks.</p>
  <p><strong>Example:</strong> A user updates their profile, and the change is written to the cache immediately, with the database being updated later.</p>
  
  <pre><code> // Write-behind caching example
  public void updateUserProfileAsync(String userId, UserProfile profile) {
    cache.put("userProfile:" + userId, profile);  // Immediate write to cache
    executor.submit(() -> {
      database.updateUserProfile(userId, profile);  // Background write to DB
    });
  }
  </code></pre>

  <p><strong>Pros:</strong> Faster write operations.</p>
  <p><strong>Cons:</strong> Potential for data loss if the cache crashes before the database is updated.</p>

  <h4>🧹 TTL & Eviction Policies</h4>
  <p>Caching data can’t last forever. Setting expiration times (TTL) and eviction policies ensures that stale data doesn’t stay in the cache for too long.</p>
  
  <pre><code> // Example of cache expiration (TTL) and eviction
  redis.setex("userProfile:user123", 600, userProfile);  // TTL of 10 minutes
  redis.evictionPolicy(LRU);  // Least Recently Used (LRU) eviction policy
  </code></pre>

  <p><strong>TTL (Time To Live):</strong> Cache expires after a specified time (in seconds or minutes).</p>
  <p><strong>Eviction:</strong> Automatically removes cache items based on rules like Least Recently Used (LRU), Least Frequently Used (LFU), or First-In-First-Out (FIFO).</p>

  <h3>🚀 Final Thoughts</h3>
  <p>Caching is like the brain of your application — it remembers the right things at the right time to save effort and speed things up.</p>
  <p>Knowing <strong>when and how to cache</strong> can drastically improve your app’s performance, especially when used with smart strategies like lazy loading, distributed caching, and proper eviction policies. You can also use a combination of these strategies based on the specific needs of your application to optimize both performance and memory usage.</p>
  <p>Start small, measure impact, and optimize as you grow. Happy caching! 🧠⚡</p>

`
  },
  {
    id: 2,
    title: '01 Matrix – BFS-Based Distance Calculation',
    date: 'June 23, 2025',
    content: `
      <p>The 01 Matrix problem is a common interview question where you need to update each cell in a matrix based on the shortest distance to a nearby zero. While brute force works, there's a clean and optimal BFS approach that gets the job done efficiently. Let's explore it.</p>
  
      <h3>🧩 Problem Statement</h3>
      <p>You're given an <code>m x n</code> binary matrix <code>mat</code> filled with 0s and 1s. Your task is to return a matrix where each cell containing a 1 is replaced by the shortest distance to the nearest 0. Distance is measured in number of adjacent moves (up/down/left/right).</p>
      
      <pre><code>Input:
  mat = [[0,0,0],
         [0,1,0],
         [1,1,1]]
  
  Output:
  [[0,0,0],
   [0,1,0],
   [1,2,1]]
      </code></pre>
  
      <h3>🧠 Intuition</h3>
      <p>Instead of calculating distance for each 1, we reverse the approach. We start from all 0s and do a multi-source BFS, updating distance level by level. This guarantees the shortest path since BFS spreads outward uniformly.</p>
  
      <h3>⚙️ Approach</h3>
      <ul>
        <li>Initialize a queue with all 0s and mark them visited.</li>
        <li>Use BFS to explore neighbors of each 0.</li>
        <li>For every unvisited neighbor (i.e., a 1), set its distance to current + 1 and add to queue.</li>
        <li>Repeat until all cells are processed.</li>
      </ul>
  
      <h3>💻 Java Code</h3>
      <pre><code>class Node {
      int first, second, third;
      Node(int first, int second, int third) {
          this.first = first;
          this.second = second;
          this.third = third;
      }
  }
  
  class Solution {
      public int[][] updateMatrix(int[][] mat) {
          int n = mat.length;
          int m = mat[0].length;
          int[][] vis = new int[n][m];
          int[][] dist = new int[n][m];
          Queue&lt;Node&gt; q = new LinkedList&lt;&gt;();
  
          for (int i = 0; i &lt; n; i++) {
              for (int j = 0; j &lt; m; j++) {
                  if (mat[i][j] == 0) {
                      q.add(new Node(i, j, 0));
                      vis[i][j] = 1;
                  }
              }
          }
  
          int[] drow = {-1, 0, 1, 0};
          int[] dcol = {0, 1, 0, -1};
  
          while (!q.isEmpty()) {
              Node node = q.poll();
              int row = node.first, col = node.second, dis = node.third;
              dist[row][col] = dis;
  
              for (int i = 0; i &lt; 4; i++) {
                  int nrow = row + drow[i];
                  int ncol = col + dcol[i];
  
                  if (nrow &gt;= 0 &amp;&amp; ncol &gt;= 0 &amp;&amp; nrow &lt; n &amp;&amp; ncol &lt; m &amp;&amp; vis[nrow][ncol] == 0) {
                      q.add(new Node(nrow, ncol, dis + 1));
                      vis[nrow][ncol] = 1;
                  }
              }
          }
  
          return dist;
      }
  }
      </code></pre>
  
      <h3>⏱️ Time & Space Complexity</h3>
      <ul>
        <li><strong>Time:</strong> O(n * m), since each cell is visited at most once.</li>
        <li><strong>Space:</strong> O(n * m) for the queue, visited, and distance matrices.</li>
      </ul>
  
      <h3>🚀 Final Thoughts</h3>
      <p>This problem is a textbook case for BFS on a grid. Starting from all 0s and spreading out is both intuitive and efficient. Mastering patterns like this makes you faster and more confident during interviews and real-world development.</p>
    `
  },
  
  
  {
      id: 2,
      title: 'Working with React and SCSS',
      date: 'April 25, 2025',
      image: '/images/blogs/react.png',
      content: ``
    } 
  ,
  {
    id: 3,
    title: 'Tips for Clean JavaScript Code',
    date: 'April 20, 2025',
    image: '/images/blogs/react.png',
    content: ``
    } ,
  {
    id: 4,
    title: 'Designing for Developers',
    date: 'April 18, 2025',
    image: '/images/blogs/react.png',
      content: ``} 
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find((b) => b.id === parseInt(id));
  // const [letterClass, setLetterClass] = useState('text-animate');

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   const timer1 = setTimeout(() => {
  //     setLetterClass('text-animate-hover');
  //   }, 3000);

  
  //   return () => {
  //     clearTimeout(timer1);
  //   };
  // }, []);

  

  if (!blog) {
    return <div style={{ padding: '2rem', color: 'red' }}>Blog not found</div>;
  }

  return (
    <div className="container blog-detail-page">
      <div className='text-zone'>
      <h1 className='blog-detail-heading'>
        {blog.title}
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={blog.title.split('')}
              idx={50}
            /> */}
          </h1>
      <p className="blog-date">{blog.date}</p>
      {blog.image?.trim() && (
      <img
        src={blog.image}
        alt={blog.title}
        className="blog-title-image"
      />
    )}
      <div
         className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
></div>      <button onClick={() => navigate(-1)} className="go-back">← Go Back</button>
      </div>
    </div>
  );
};

export default BlogDetail;
