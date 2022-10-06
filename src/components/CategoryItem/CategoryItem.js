import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './CategoryItem.css'

function CategoryItem({item}) {

    const [active, setActive] = useState(false)
  

    return (
        <div className={`${active ? 'category active' : 'category'}`} onClick={() => setActive(true)}>
          <span>{item.name}</span>
        </div>
    );
}

export default CategoryItem;