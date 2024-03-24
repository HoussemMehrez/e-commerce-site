import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images: [
    'affiche.png',
    'affiche1.png',
  ],
  currentIndex: 0,
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    goToNextSlide(state) {
      state.currentIndex = (state.currentIndex + 1) % state.images.length;
    },
    goToPrevSlide(state) {
      state.currentIndex = (state.currentIndex - 1 + state.images.length) % state.images.length;
    },
  },
});

export const { goToNextSlide, goToPrevSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
