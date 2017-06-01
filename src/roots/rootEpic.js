import { combineEpics } from 'redux-observable';
import addUserEpic from '../shared/authentication/epics/addUserEpic';
import fetchUserEpic from '../shared/authentication/epics/fetchUserEpic';

const rootEpic = combineEpics(fetchUserEpic, addUserEpic);


export default rootEpic;
