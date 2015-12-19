Package.describe({
  name: 'clinical:schema-hydrator',
  version: '0.1.1',
  summary: 'Hydrates/dehydrates a SimpleSchema into something that can be stored in Mongo.',
  git: 'http://github.com/clinical-meteor/clinical-schema-hydrator',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('aldeed:simple-schema@1.1.0');

  api.addFiles('lib/SchemaHydrator.js');

  api.export('SchemaHydrator');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:schema-hydrator');
  api.addFiles('tests/schema-hydrator-tests.js');
});
