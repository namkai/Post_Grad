import { combineEpics } from 'redux-observable';
import  fetchUserEpic  from '../shared/authentication/epics/fetchUserEpic';

const rootEpic = combineEpics(fetchUserEpic);


export default rootEpic;
