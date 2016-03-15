/**
 * Created by andywalpole on 07/12/2015.
 */


for (var i = 0; i < 5; i++) {

  setTimeout(function () {
    console.log(i);
  }.bind(i));

}
