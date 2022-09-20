import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk(
    'quote/fetchQuote',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');

            if (!response.ok) {
                throw new Error('Error, try later!')
            }

            const data = await response.json();

            return data.quotes;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        data: {
            dataArr: [],
            quote: '',
            author: '',
            randomColor: '',
        },
        colors: [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
        ],
        status: null,
        error: null,
    },
    reducers: {
        change(state) {
            let color = state.colors[Math.floor(Math.random() * state.colors.length)];
            const index = Math.floor(Math.random() * state.data.dataArr.length);
            state.data.randomColor = color;
            state.data.quote = state.data.dataArr[index].quote;
            state.data.author = state.data.dataArr[index].author;
        }

    },
    extraReducers: {
        [fetchQuote.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchQuote.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data.dataArr = action.payload; // то что ретурнится по итогу в нашем createAsyncThunk
        },
        [fetchQuote.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})

export const quoteActions = quoteSlice.actions;
export default quoteSlice;