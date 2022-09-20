import { quoteActions } from "../store/quoteSlice";
import { useDispatch, useSelector } from "react-redux";

function IconsAndButton({ firstColor, firstQuote }) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.quote.data);
    const status = useSelector(state => state.quote.status);
    const colors = useSelector(state => state.quote.colors);
    const style = data.quote === '' ? { background: colors[firstColor] } : { background: data.randomColor };
    const iconStyle = data.quote === '' ? { fill: colors[firstColor] } : { fill: data.randomColor };
    const iconStyle2 = data.quote === '' ? { fill: 'white', background: colors[firstColor] } : { fill: 'white', background: data.randomColor };
    const firstTry = status === 'resolved' && data.quote === '';

    function change() {
        dispatch(quoteActions.change());
    }

    return (
        <div className='d-flex justify-content-between link-buttons-div'>
            <div className='mt-4 re-margin'>
                <a id="tweet-quote" target="_blank" rel="noreferrer" href={firstTry ? 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent(`"${data.dataArr[firstQuote].quote}" -${data.dataArr[firstQuote].author}`) : 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent(`"${data.quote}" -${data.author}`)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" style={iconStyle2} className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                </a>
                <a id="tumblr-quote" target="_blank" rel="noreferrer" href={firstTry ? 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=' + encodeURIComponent(data.dataArr[firstQuote].author) + '&content=' + encodeURIComponent(data.dataArr[firstQuote].quote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button' : 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=' + encodeURIComponent(data.author) + '&content=' + encodeURIComponent(data.quote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'}>
                    <img src="" alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="38" height="38"
                        viewBox="0 0 50 50"
                        style={iconStyle}><path d="M 40 0 L 10 0 C 4.484375 0 0 4.484375 0 10 L 0 40 C 0 45.515625 4.484375 50 10 50 L 40 50 C 45.515625 50 50 45.515625 50 40 L 50 10 C 50 4.484375 45.515625 0 40 0 Z M 34 40.238281 C 34 40.363281 33.945313 40.480469 33.855469 40.5625 C 33.738281 40.664063 31.011719 43 24.742188 43 C 17.230469 43 17 34.617188 17 33.664063 L 17 23.011719 L 13.429688 23 C 13.191406 23 13 22.816406 13 22.578125 L 13 18.808594 C 13 18.632813 13.109375 18.472656 13.273438 18.40625 C 13.34375 18.382813 20.058594 15.773438 20.058594 9.429688 C 20.058594 9.191406 20.253906 9 20.492188 9 L 24.578125 9 C 24.816406 9 25.007813 9.191406 25.007813 9.429688 L 25 17 L 31.5625 17 C 31.800781 17 31.992188 17.207031 31.992188 17.445313 L 31.992188 22.554688 C 31.992188 22.789063 31.800781 23 31.5625 23 L 25 23 C 25 23 25 33.253906 25 33.503906 C 25 33.75 25.226563 36.765625 28.433594 36.765625 C 31.089844 36.765625 33.320313 35.398438 33.34375 35.382813 C 33.476563 35.296875 33.640625 35.292969 33.777344 35.371094 C 33.914063 35.445313 34 35.589844 34 35.746094 Z"></path></svg></a>
            </div>
            <div className='button-div mt-4 re-margin'><button id="new-quote" className='but py-2 px-3 border-0 rounded'
                style={style}
                onClick={change}>New quote</button></div>
        </div>
    )
}

export default IconsAndButton;