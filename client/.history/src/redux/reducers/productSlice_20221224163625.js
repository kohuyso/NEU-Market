import { createSlice } from '@reduxjs/toolkit';
import dayjs from "dayjs";

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    name: "",
    type: "",
    gender: "",
    fields: [
      // {
      //   name: '',
      //   value: ''
      // }
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
      state = { ...action.payload };
      console.log(state)
    },
  }
})

// Action creators are generated for each case reducer function
export const { addProduct } = productSlice.actions

export default productSlice.reducer