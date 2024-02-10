import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type TypeProfileFaqList = {
  q: string;
  a: string;
};

interface IProfileSliceState {
  open: boolean;
  faqList: TypeProfileFaqList[];
}

const initialState: IProfileSliceState = {
  open: false,
  faqList: [
    {
      q: 'Подписываете ли вы соглашение о неразглашении?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis sem a tortor maximus accumsan. Duis tempor mi in sapien venenatis interdum. Etiam sed mattis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris volutpat nibh id posuere laoreet. Proin facilisis mollis tellus nec porta. Nunc ut lectus sit amet purus ornare elementum. Etiam pulvinar risus ex, eget accumsan mauris pellentesque eu. Sed rutrum risus quis lectus imperdiet eleifend.',
    },
    {
      q: 'Сколько займет создание MVP?',
      a: 'Чтобы создать надежный продукт, вам необходимо создать его прототип, спроектировать, разработать и протестировать. На прохождение всех этих этапов у вас уйдет около 3 месяцев.',
    },
    {
      q: 'Предоставляете ли вы маркетинговые услуги?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis sem a tortor maximus accumsan. Duis tempor mi in sapien venenatis interdum. Etiam sed mattis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris volutpat nibh id posuere laoreet. Proin facilisis mollis tellus nec porta. Nunc ut lectus sit amet purus ornare elementum. Etiam pulvinar risus ex, eget accumsan mauris pellentesque eu. Sed rutrum risus quis lectus imperdiet eleifend.',
    },
    {
      q: 'Различается ли MVP от прототипов?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis sem a tortor maximus accumsan. Duis tempor mi in sapien venenatis interdum. Etiam sed mattis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris volutpat nibh id posuere laoreet. Proin facilisis mollis tellus nec porta. Nunc ut lectus sit amet purus ornare elementum. Etiam pulvinar risus ex, eget accumsan mauris pellentesque eu. Sed rutrum risus quis lectus imperdiet eleifend.',
    },
  ],
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    onClickModal: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const selectFaqList = (state: RootState) => state.profile.faqList;
export const selectProfileOpenModal = (state: RootState) => state.profile.open;
export const { onClickModal } = profileSlice.actions;

export default profileSlice.reducer;
