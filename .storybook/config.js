import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withGraphCMS } from "@focus-reactive/storybook-addon-graphcms";
import brandImage from '../static/graphql.svg';
import '@storybook/addon-console';


addDecorator(
  withGraphCMS({
    endpoint: process.env.API_ENDPOINT,
    token: process.env.API_TOKEN,
  })
);

const theme = create({
  brandTitle: 'storybook-graphql-quick-start',
  brandUrl: 'https://gitnation.org/',
  brandImage,
});

addParameters({
  options: {
    theme,
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../queries', true, /\.stories\.js$/), module);
