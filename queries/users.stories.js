import { Query } from '@focus-reactive/storybook-addon-graphcms';

import query from './users.graphql';

export default {
  title: 'GraphQL API',
};


export const githubUsers = Query({
  name: 'Github User',
  query,
  vars: { org: 'storybookjs' },
  searchVars: { user: 'UsulPro' },
});
