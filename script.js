
function getDog()
{
  // get server data
  $.get( "https://dog.ceo/api/breeds/image/random", function( data ) {
    // source of image
    $('#dogo').attr('src', data.message)
  });
}