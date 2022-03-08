
module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      name: { type: String, required: true },
      filePath: {
          type: String
      }
    }
    
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.plugin(mongoosePaginate);

  const Pokemons = mongoose.model("pokemon", schema);
  return Pokemons;
};



