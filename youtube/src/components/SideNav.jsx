import React from "react";
import { categories } from "../utils/constants.jsx";
import { useContext } from 'react';
import { YoutubeContext } from '../context/YoutubeContext.jsx';
const SideNav = () => {
  // Contexte abone olma

 const {selectedCategory, setSelectedCategory} = useContext(YoutubeContext)

  return (
    <nav className='flex flex-col gap-1 pt-4 sticky'>
      {categories.map((item, i) => (
        <React.Fragment key={i}>
        
          <div 
          // Seçilen kategoriyi contexte gönderme
          onClick={() => setSelectedCategory(item.name)} 
          // eğer kategori ismi eşleşirse kategorinin rengini değişitir
          className={` ${selectedCategory === item.name && "bg-gray-800"} flex items-center gap-5 py-3 p-2 text-lg cursor-pointer hover:bg-gray-900 `}>
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
          {/* eğer objenini divider değeri true ise ekrana bir çizgi bas  */}
          {item.divider && <hr />}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default SideNav;
