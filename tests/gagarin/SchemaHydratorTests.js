
describe('clinical:schema-hydrator', function () {
  var server = meteor();
  var client = browser(server);

  beforeEach(function () {
    server.execute(function () {

    }).then(function (value){

    });
  });
  afterEach(function () {
    server.execute(function () {

    });
  });

  it('SchemaHydrator should exist on the client', function () {
    return client.execute(function () {
      expect(SchemaHydrator).to.exist;
    });
  });

  it('SchemaHydrator should exist on the server', function () {
    return server.execute(function () {
      expect(SchemaHydrator).to.exist;
    });
  });
});
