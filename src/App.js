import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Categories from './components/Categories/Categories';
import ImageSlider from './components/ImageSlider/ImageSlider';
import { getImages } from './Redux/actions/action';

function App() {

  const dispatch = useDispatch()
  const images = useSelector(state => state.MainReducer.images)

  useEffect(() => {
      dispatch(getImages())
  },[])

  return (
    <div className="App">
      <Categories/>
      <ImageSlider images={images}/>
    </div>
  );
}

export default App;
