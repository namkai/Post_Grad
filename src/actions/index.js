import * as authActions from './authentication_actions';
import * as productActions from './product_actions';

export default ({
	...productActions,
	...authActions,
});
