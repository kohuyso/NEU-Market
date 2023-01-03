import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    name: "",
    type: "",
    gender: "",
    fields: [
      {
        name: '',
        value: ''
      }
    ],
    description: "",
    imgs: [
        'https://thumbs.dreamstime.com/b/beautiful-landscape-dry-tree-branch-sun-flowers-field-against-colorful-evening-dusky-sky-use-as-natural-background-backdrop-48319427.jpg',
        'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        'https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        'https://st.depositphotos.com/1927453/1899/i/450/depositphotos_18999671-stock-photo-old-oak-in-sunset-with.jpg',
        'https://cdn.punchng.com/wp-content/uploads/2022/11/26221240/32UP89U-Mockup.jpg',
    ],
    size: "",
    expirationDate: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state = { ...state, ...action.payload };
    },
    addImg: (state, action) => {
      state.imgs.push(action.payload);
    },
    removeImg: (state, action) => {
      state.imgs.splice(state.imgs.indexOf(action.payload));
    },
    addField: (state, action) => {
      state.fields.push(action.payload);
    },
    removeField: (state, action) => {
      state.fields.splice(action.payload);
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setFieldName: (state, action) => { // Index, Event
      state.fields.at(action.payload[0]).name = action.payload[1]; 
    },
    setFieldValue: (state, action) => { // Index, Event
      state.fields.at(action.payload[0]).value = action.payload[1]; 
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setExpirationDate: (state, action) => {
      state.expirationDate = dayjs(action.payload).format('DD/MM/YYYY');
    }
  }
})

// Action creators are generated for each case reducer function
export const { addProduct, addImg, removeImg, addField, setName, setType, setGender, setSize, setDescription, setExpirationDate } = productSlice.actions

export default productSlice.reducer