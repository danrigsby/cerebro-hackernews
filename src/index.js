require('whatwg-fetch');
const React = require('react');
const icon = require('../hackernews.png');
const { search } = require('cerebro-tools');
const ContainerView = require('./ContainerView');

const terms = ['hackernews', 'hn'];

const fn = (scope) => {
  const openUrl = (url) => {
    scope.actions.open(url);
    scope.actions.hideWindow();
  };

  if (search(terms, scope.term).length > 0) {
    scope.display({
      id: 'hackernews',
      title: 'HackerNews',
      subtitle: 'Popular Stories',
      icon,
      getPreview: () => <ContainerView openUrl={openUrl} />
    });
  }
};

module.exports = {
  fn,
  name: 'HackerNews',
  icon
};
