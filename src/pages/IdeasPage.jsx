import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import PostList from '../components/PostList';

const IdeasPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <Banner />
        <PostList />
      </main>
    </div>
  );
};

export default IdeasPage;
