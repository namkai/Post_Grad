import * as authActions from './authentication_actions';
import * as productActions from './product_actions';
import * as userActions from './user_actions';

export default ({
	...productActions,
	...authActions,
	...userActions,
});
