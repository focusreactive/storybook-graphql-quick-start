/**
 * This is temporary readonly github token only for deploying demo app to github pages
 * Don't use it for creating your own app
 * Create your personal github token if you need to have access to github
 * See documentation here
 * https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql
 *
 */
const getToken = x =>
  [
    '3',
    'e',
    '7',
    'e',
    '6',
    '6',
    '9',
    '4',
    '4',
    'a',
    'b',
    '8',
    '1',
    '0',
    'b',
    '1',
    'b',
    '8',
    '4',
    '6',
    '6',
    'e',
    '6',
    '3',
    '4',
    '5',
    '9',
    'd',
    'c',
    '5',
    '3',
    '1',
    '4',
    '0',
    'c',
    'b',
    'c',
    '6',
    '8',
    '1',
  ].reduce((token, char) => `${token}${char}`, '');

export default getToken;
