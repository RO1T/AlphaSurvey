import { combineReducers } from '@reduxjs/toolkit';
import { dataProcess } from './data-process/data-process';
import { userProcess } from './user-process/user-process';
import { NameSpace } from '../../const/consts';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
