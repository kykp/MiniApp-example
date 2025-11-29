import { withRouter } from './router';
import { withQuery } from './query';

export const withProviders = (component: () => React.ReactNode) =>
    withRouter(withQuery(component));
