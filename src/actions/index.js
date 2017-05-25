import * as authActions from './AuthenticationActions';
import * as conversationActions from './ConversationActions';
import * as productActions from './ProductActions';
import * as userActions from './UserActions';

export default ({
	...productActions,
	...authActions,
	...userActions,
	...conversationActions,
});
