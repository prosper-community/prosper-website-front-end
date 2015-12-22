module.exports = function(text) {
  var linkFriendly = text.toString().toLowerCase().split(' ').join('-');

  var img = '<img class="people__list--image" src="assets/img/' + linkFriendly + '.jpg" data-interchange="[assets/img/' + linkFriendly + '.jpg, small], [assets/img/' + linkFriendly + '@2x.jpg, retina]">';

  return img;
}
