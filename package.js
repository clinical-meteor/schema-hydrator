Package.describe({
  name: 'clinical:schema-hydrator',
  version: '0.0.1',
  summary: 'Hydrates/dehydrates a SimpleSchema into something that can be stored in Mongo.',
  git: 'http://github.com/clinical-meteor/clinical-schema-hydrator',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('lib/SchemaHydrator.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('clinical:schema-hydrator');
  api.addFiles('schema-hydrator-tests.js');
});
