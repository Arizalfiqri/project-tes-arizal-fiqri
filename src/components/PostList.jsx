import React, { useState, useEffect } from 'react';
import { fetchIdeas } from '../services/api';
import PostCard from './PostCard';
import Pagination from './Pagination';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState('-published_at');
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  // URL state management
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page')) || 1;
    const size = parseInt(urlParams.get('size')) || 10;
    const sort = urlParams.get('sort') || '-published_at';
    
    setCurrentPage(page);
    setPageSize(size);
    setSortOrder(sort);
  }, []);

  // Update URL when state changes
  useEffect(() => {
    const params = new URLSearchParams();
    params.set('page', currentPage.toString());
    params.set('size', pageSize.toString());
    params.set('sort', sortOrder);
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [currentPage, pageSize, sortOrder]);

  // Fetch data
  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        
        const response = await fetchIdeas({
          page: currentPage,
          pageSize: pageSize,
          sort: sortOrder
        });
        
        setPosts(response.data || []);
        setTotalPages(response.meta?.last_page || 1);
        setTotalItems(response.meta?.total || 0);
      } catch (err) {
        console.error('Error loading posts:', err);
        // Set empty state instead of error for better UX
        setPosts([]);
        setTotalPages(1);
        setTotalItems(0);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [currentPage, pageSize, sortOrder]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Scroll to Ideas section instead of top of page
    const ideasSection = document.getElementById('ideas');
    if (ideasSection) {
      ideasSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(parseInt(newPageSize));
    setCurrentPage(1); // Reset to first page
  };

  const handleSortChange = (newSort) => {
    setSortOrder(newSort);
    setCurrentPage(1); // Reset to first page
  };

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        {/* Items count */}
        <div className="text-sm text-gray-600">
          Showing {totalItems > 0 ? startItem : 0} - {totalItems > 0 ? endItem : 0} of {totalItems}
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Show per page */}
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600">Show per page:</label>
            <select
              value={pageSize}
              onChange={(e) => handlePageSizeChange(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>

          {/* Sort by */}
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600">Sort by:</label>
            <select
              value={sortOrder}
              onChange={(e) => handleSortChange(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="-published_at">Newest</option>
              <option value="published_at">Oldest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Posts Grid */}
      {!loading && posts.length > 0 && (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}

      {/* No posts */}
      {!loading && posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No posts found.</p>
        </div>
      )}
    </div>
  );
};

export default PostList;
