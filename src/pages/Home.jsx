// import { useState, useEffect } from 'react';
// import toast from 'react-hot-toast';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
// import { Spinner } from 'components/Spinner/Spinner';

export const HomePage = () => {
  // const [page, setPage] = useState(1);

  return (
    <div>
      <SearchBox />
      <ImageGallery images={[]} />
      {/* {hasPosts && ( */}
      {/* <button onClick={() => setPage(prevPage => prevPage + 1)}>
          Fetch more posts
        </button> */}
      {/* )} */}
    </div>
  );
};
