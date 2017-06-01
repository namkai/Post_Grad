import { combineEpics } from 'redux-observable';
import addUserEpic from '../../entities/user/epics/addUserEpic';
import fetchUserEpic from '../../entities/user/epics/fetchUserEpic';

const rootEpic = combineEpics(fetchUserEpic, addUserEpic);


export default rootEpic;
