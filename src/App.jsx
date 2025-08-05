import React, { useCallback, useState } from 'react';
import './App.css';
import Gallery from './components/Gallery/index';
import Lightbox from './components/Lightbox';
import photos from './photos';

import { lazyLoad } from './utils';

function App() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const getPathInfo = () => {
    // 获取完整URL
    const url = new URL(window.location.href);
    
    // 选项1: 使用路径部分（如 /nature）
    const pathParts = url.pathname.split('/').filter(p => p).join("/");
    
    // 选项2: 使用查询参数（如 ?category=nature）
    const queryCategory = url.searchParams.get('category');
    
    // 返回优先级：路径参数 > 查询参数 > 默认值
    return pathParts || queryCategory || '';
  };

  console.log(getPathInfo())
  let photosFilter = photos.filter(photo => photo.src.indexOf("/photos/"+getPathInfo()) !== -1);
  console.log(photos)
  console.log(photosFilter)

  const openLightbox = useCallback((_, { __, index }) => {
    setCurrentPhoto(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setCurrentPhoto(0);
    setViewerIsOpen(false);
  }, []);

  return (
    <>
      <Gallery photos={photosFilter} onLoad={lazyLoad} onClick={openLightbox} />
      <Lightbox
        photos={photosFilter}
        viewerIsOpen={viewerIsOpen}
        currentPhoto={currentPhoto}
        closeLightbox={closeLightbox}
      />
    </>
  );
}

export default App;
