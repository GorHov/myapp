import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../Redux/actions/action';
import CategoryItem from '../CategoryItem/CategoryItem';
import './Categories.css'

function Categories(props) {

    const dispatch = useDispatch()
    const categories = useSelector(state => state.MainReducer.categories)
console.log(categories);
    useEffect(() => {
        dispatch(getCategories())
    },[])

    return (
        <div className='categories'>
        {
            categories.map((item) => {
                return (
                    <CategoryItem item={item} key={item.id}/>
                )
            })

        }
        </div>
    );
}

export default Categories;