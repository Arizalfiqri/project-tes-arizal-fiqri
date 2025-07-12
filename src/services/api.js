import axios from 'axios';
import { mockIdeas } from '../data/mockData';

const api = axios.create({
  baseURL: 'https://suitmedia-backend.suitdev.com/api',
  timeout: 10000,
});

export const fetchIdeas = async (params = {}) => {
  try {
    const { page = 1, pageSize = 10, sort = '-published_at' } = params;
    
    const response = await api.get('/ideas', {
      params: {
        'page[number]': page,
        'page[size]': pageSize,
        'append[]': ['small_image', 'medium_image'],
        sort: sort
      }
    });
    
    return response.data;
  } catch (error) {
    console.warn('API not available, using mock data:', error.message);
    
    // Return mock data dengan pagination yang sesuai
    const { page = 1, pageSize = 10, sort = '-published_at' } = params;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    
    let sortedData = [...mockIdeas.data];
    if (sort === 'published_at') {
      sortedData.sort((a, b) => new Date(a.published_at) - new Date(b.published_at));
    } else {
      sortedData.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
    }
    
    const paginatedData = sortedData.slice(startIndex, endIndex);
    
    return {
      data: paginatedData,
      meta: {
        ...mockIdeas.meta,
        current_page: page,
        per_page: pageSize,
        from: startIndex + 1,
        to: Math.min(endIndex, mockIdeas.meta.total)
      }
    };
  }
};

export const getBannerData = async () => {
  try {
    // Try to fetch banner data from CMS API
    const response = await api.get('/banner/ideas');
    return response.data;
  } catch (error) {
    console.warn('Banner API not available, using fallback:', error.message);
    
    // Return mock banner data that will trigger fallback to default image
    return {
      data: {
        title: 'Ideas',
        subtitle: 'Where all our great things begin',
        image: null // This will trigger fallback to default banner image
      }
    };
  }
};

export default api;
