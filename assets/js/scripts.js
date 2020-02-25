
$('#pokesearch').click(function() {


$.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonNameLower}`,
    type: 'GET',
    datatype: 'json',
    success: function(results) {
      console.log(results);
    }
  }).done(response).fail(error);

