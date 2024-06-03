import {configureStore} from '@reduxjs/toolkit';

import boolSlice from './slices/boolCounter';
import bbProfilePic from './slices/bbProfilePic';
import updateAccountDet from "./slices/bbAccount";

export const store = configureStore({
    reducer: {
        boolCnt: boolSlice,
        bbProPic: bbProfilePic,
        bbAccountDet: updateAccountDet,
    },
});

