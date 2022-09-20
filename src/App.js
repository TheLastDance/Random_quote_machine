import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchQuote } from './store/quoteSlice';
import Card from './components/card';
import Footer from './components/footer';



function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.quote.data);
  const colors = useSelector(state => state.quote.colors);
  const firstColor = Math.floor(Math.random() * colors.length);
  const style = data.quote === '' ? { background: colors[firstColor] } : { background: data.randomColor };

  useEffect(() => {
    dispatch(fetchQuote())
  }, [dispatch]);

  return (
    <div className="App" style={style}>
      <div className='App2'>
        <Card firstColor={firstColor} />
        <Footer />
      </div>
    </div >
  );
}

export default App;
