import { AuthorizationStatus } from '../const/consts'
import { store } from '../redux/store'
import { MySureysProps, SmallSurveyProps, SurveyProps } from './types'
import { ProfileData, UserData } from './user-data'

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
    user: UserData | null;
    signInError: boolean;
    profile: ProfileData | null;
    profileError: boolean;
};
  
export type SurveysData ={
  smallSurveys: SmallSurveyProps[],
  smallSurveysError: boolean;

  mySurveys: {
    mySurveys: MySureysProps[];
  };

  survey: SurveyProps | null;
  surveyError: boolean,
};
  
export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;