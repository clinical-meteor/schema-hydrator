SchemaHydrator = {
  /**
   * @summary Converts a JSON object into a SimpleSchema object.
   * @locus Anywhere
   * @memberOf SchemaHydrator
   * @name hydrate
   * @version 1.2.3
   * @returns {SimpleSchema}
   * @example
   * ```js
   * var Foo = new Collection('foo');
   * Foo.attachSchema(SchemaHydrator.hydrate(Metadata.findOne({name: "AcmeWidgetSchema"})))
   * ```
   */
  hydrate: function (dehydratedSchema){
    console.log('Hydrating a schema....');
    console.log('dehydratedSchema', dehydratedSchema);

    var hydratedObject = {};
    if (dehydratedSchema.fieldOrder) {

      console.log('dehydratedSchema.fieldOrder.length', dehydratedSchema.fieldOrder.length);

      for (var i = 0; i < dehydratedSchema.fieldOrder.length; i++) {

        var schemaKey = dehydratedSchema.fieldOrder[i];
        console.log('schemaKey', schemaKey);

        if (schemaKey) {
          hydratedObject[schemaKey] = {};

          if (dehydratedSchema.schema[schemaKey]) {
            if (dehydratedSchema.schema[schemaKey].label) {
              hydratedObject[schemaKey].label = dehydratedSchema.schema[dehydratedSchema.fieldOrder[i]].label;
            }
            if (dehydratedSchema.schema[schemaKey].optional) {
              hydratedObject[schemaKey].optional = dehydratedSchema.schema[schemaKey].optional;
            }
            if (dehydratedSchema.schema[schemaKey].autoform) {
              hydratedObject[schemaKey].autoform = dehydratedSchema.schema[schemaKey].autoform;
            }

            if (dehydratedSchema.schema[schemaKey].type === "String") {
              hydratedObject[schemaKey].type = String;
            }
            if (dehydratedSchema.schema[schemaKey].type === "Boolean") {
              hydratedObject[schemaKey].type = Boolean;
            }
            if (dehydratedSchema.schema[schemaKey].type === "Number") {
              hydratedObject[schemaKey].type = Number;
            }
            if (dehydratedSchema.schema[schemaKey].type === "Date") {
              hydratedObject[schemaKey].type = Date;
            }
            if (dehydratedSchema.schema[schemaKey].type === "Object") {
              hydratedObject[schemaKey].type = Object;
            }
            if (dehydratedSchema.schema[schemaKey].type === "ObjectArray") {
              hydratedObject[schemaKey].type = [Object];
            }
            if (dehydratedSchema.schema[schemaKey].type === "StringArray") {
              hydratedObject[schemaKey].type = [String];
            }


          }
        }

      }
    }
    console.log('hydrateSchema', hydratedObject);

    return new SimpleSchema(hydratedObject);
  },
  /**
   * @summary Converts a JSON object representing a schena object into a proper SimpleSchema.  Used in the FormBuilder API.
   * @locus Anywhere
   * @memberOf SchemaHydrator
   * @name hydratePartialSchema
   * @version 1.2.3
   * @returns {JSON}
   */
  hydratePartialSchema: function (partialSchema){
    console.log('Hydrating a partialSchema....', partialSchema);

    var hydratedObject = {};

    console.log('partialSchema.keyName', partialSchema.keyName);

    if (partialSchema.keyName) {
      hydratedObject[partialSchema.keyName] = {};

      if (partialSchema.schemaTemplate.label) {
        hydratedObject[partialSchema.keyName].label = partialSchema.schemaTemplate.label;
      }
      if (partialSchema.schemaTemplate.optional) {
        hydratedObject[partialSchema.keyName].optional = partialSchema.schemaTemplate.optional;
      }
      if (partialSchema.schemaTemplate.autoform) {
        hydratedObject[partialSchema.keyName].autoform = partialSchema.schemaTemplate.autoform;
      }


      if (partialSchema.schemaTemplate.type === "String") {
        hydratedObject[partialSchema.keyName].type = String;
      }
      if (partialSchema.schemaTemplate.type === "Number") {
        hydratedObject[partialSchema.keyName].type = Number;
      }
      if (partialSchema.schemaTemplate.type === "Date") {
        hydratedObject[partialSchema.keyName].type = Date;
      }
      if (partialSchema.schemaTemplate.type === "Object") {
        hydratedObject[partialSchema.keyName].type = Object;
      }
      if (partialSchema.schemaTemplate.type === "StringArray") {
        hydratedObject[partialSchema.keyName].type = Array;
      }
    }

    console.log('hydrateSchema', hydratedObject);

    return new SimpleSchema(hydratedObject);
  },
  /**
   * @summary Converts a SimpleSchema object into a JSON object which can be stored in Mongo.  Loses any functions or methods associated with the Schema.
   * @locus Anywhere
   * @memberOf SchemaHydrator
   * @name dehydrate
   * @version 1.2.3
   * @returns {JSON}
   */
  dehydrate: function (schema){
    if (process.env.DEBUG) {
      console.log('dehydrating schema...', schema);
    }

    Object.keys(schema).forEach(function (key){
      // console.log('hydrating schema key ', key);
      // console.log('hydrating schema key.type ', schema[key].type);
      if (schema[key].type === "String") {
        schema[key].type = String;
      }
      if (schema[key].type === "Number") {
        schema[key].type = Number;
      }
    });
    if (process.env.DEBUG) {
      console.log('dehydrated schema: ', schema);
    }
    return schema;
  }
};
