
describe('clinical:schema-hydrator', function () {
  var server = meteor();
  var client = browser(server);

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

  it('SchemaHydrator can hydrate a JSON object into SimpleSchema', function () {
    return client.execute(function () {
      expect(SchemaHydrator.isTrue()).to.be.true;
    });
  });


  it('SchemaHydrator can hydrate a JSON object into SimpleSchema', function () {
    return client.execute(function () {

    var hydratedSchema = SchemaHydrator.hydrate({
          "_id" : "Blood_Specimen_form",
          "name" : "Blood_Specimen_form",
          "commonName" : "Blood Specimen Form",
          "version" : "V1",
          "n" : 17,
          "incompleteCount" : 0,
          "schema" : {
              "CreatedAt" : {
                  "label" : "Created At",
                  "type" : "Date"
              },
              "Patient_ID" : {
                  "label" : "Patient ID",
                  "type" : "String"
              },
              "Timepoint" : {
                  "allowedValues" : [
                      "Baseline",
                      "3 Months",
                      "Progression",
                      "Progression2",
                      "Progression3"
                  ],
                  "label" : "Collection Timepoint",
                  "type" : "String",
                  "autoform" : {
                      "afFieldInput" : {
                          "options" : [
                              {
                                  "label" : "Baseline",
                                  "value" : "Baseline"
                              },
                              {
                                  "label" : "3 Months",
                                  "value" : "3 Months"
                              },
                              {
                                  "label" : "Progression",
                                  "value" : "Progression"
                              },
                              {
                                  "label" : "Progression2",
                                  "value" : "Progression2"
                              },
                              {
                                  "label" : "Progression3",
                                  "value" : "Progression3"
                              }
                          ]
                      }
                  }
              },
              "Draw_Date" : {
                  "label" : "Draw Date",
                  "type" : "Date",
                  "autoform" : {
                      "afFieldInput" : {
                          "type" : "date",
                          "timezoneId" : "America/Los_Angeles"
                      }
                  }
              },
              "CRC_at_Collection" : {
                  "label" : "CRC at Collection",
                  "optional" : true,
                  "type" : "String"
              }
          },
          "fieldOrder" : [
              "Patient_ID",
              "Timepoint",
              "Draw_Date",
              "CRC_at_Collection"
          ],
          "study" : "prad_wcdt"
      });

      expect(hydratedSchema._schemaKeys[0]).to.equal("Patient_ID");
      expect(hydratedSchema._schemaKeys[1]).to.equal("Timepoint");
      expect(hydratedSchema._schemaKeys[2]).to.equal("Draw_Date");
      expect(hydratedSchema._schemaKeys[3]).to.equal("CRC_at_Collection");

      expect(hydratedSchema._schema.CRC_at_Collection.label).to.equal("CRC at Collection");
      expect(hydratedSchema._schema.CRC_at_Collection.optional).to.be.true;
      expect(hydratedSchema._schema.CRC_at_Collection.type).to.equal(String);

      expect(hydratedSchema._schema.Timepoint.autoform.afFieldInput.options[0].label).to.equal("Baseline");
      expect(hydratedSchema._schema.Timepoint.autoform.afFieldInput.options[0].value).to.equal("Baseline");
      expect(hydratedSchema._schema.Timepoint.label).to.equal("Collection Timepoint");
      expect(hydratedSchema._schema.Timepoint.type).to.equal(String);
    });
  });

});
