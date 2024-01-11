export enum AppRoute {
    Root = '/',
    Login = '/login',
    Surveys = '/surveys',
    CreateSurvey = '/create',
    Profile = '/profile',
    bProfile = '/b/profile',
    Survey = '/surveys/:id',
    NotFound = '*'
  }

export enum APIRoute {
  RegisterUser = '/api/register/',
  RegisterBusiness = '/api/b/register/',
  GetUsers = '/api/users/',
  GetSpecificUser = '/api/users/:id',
  Login = '/api/login/',
  LoginBusiness = '/api/b/login/',
  Profile = '/api/profile/',
  Logout = '/api/logout/',
  CreateSurvey = '/api/createsurvey/',
  SendAnswers = '/api/completesurvey',
  CompleteSurvey = '/api/completesurvey/',
  GetSurveys = '/api/surveys/',
  GetSurveysBusiness = '/api/surveys/:id/',
  MySurveys = '/api/mysurveys/'
}