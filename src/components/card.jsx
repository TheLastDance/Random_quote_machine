import { useSelector } from "react-redux";
import IconsAndButton from "./iconsAndButton";


function Card({ firstColor }) {
    const data = useSelector(state => state.quote.data);
    const status = useSelector(state => state.quote.status);
    const firstQuote = Math.floor(Math.random() * data.dataArr.length);
    const colors = useSelector(state => state.quote.colors);
    const style = data.quote === '' ? { color: colors[firstColor] } : { color: data.randomColor };
    const firstTry = status === 'resolved' && data.quote === '';

    return (
        <div id="quote-box" className='content-div mx-auto p-5 rounded'>
            <div key={data.quote}>
                <h1 id="text" style={style}>
                    <span style={style}>	&#10077;</span>
                    {firstTry ? data.dataArr[firstQuote].quote : data.quote}</h1>
                <h2 id="author" className='text-end mt-4 mb-0 re-margin'
                    style={style}>
                    -{firstTry ? data.dataArr[firstQuote].author : data.author}</h2>
            </div>
            <IconsAndButton firstColor={firstColor} firstQuote={firstQuote} />
        </div>
    )
}

export default Card;