// import React from 'react'

// const ImageGrid = ({ photos }) => {
//   return (
//     <>
//     <h1>Our Products</h1>
//         <div className="grid">
//             {photos.map(({photo, _id}) => (
//                 <div key={_id} className="grid_item">
//                     <img 
//                     src={`http://localhost:8070/uploads/${photo}`}
//                     alt="grid_image" 
//                     />
//                 </div>
//             ))}
//         </div>
//     </>
//   );
// };

// export default ImageGrid;

import React from "react";

const ImageGrid = ({ photos }) => {
  return (
    <>
      <h1>Our Products</h1>
      <div className="grid">
        {photos.map(({ photo, _id }) => (
          <div key={_id} className="grid__item">
            <img
              src={`http://localhost:8070/uploads/${photo}`}
              alt="grid_image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGrid;