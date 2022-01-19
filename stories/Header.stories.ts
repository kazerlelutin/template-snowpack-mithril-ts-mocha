import m from 'mithril';

import { Header } from './Header';

export default {
  title: 'Test/Button',
  component: Header,
};

const Template = ({ children, ...args }) => ({
  view: () => m(Header, args, children),
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
