/** 
 * A callback is a function that is to be executed after another function has
 * sfinished executing — hence the name ‘call back’.
 * 
 * More:
 * https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
*/

/* --- Simple callback example --- */
// The function receives another function as a parameter and executes it at the end of the function
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
// The callback function
doHomework('math', function() {
  alert('Finished my homework');
});

/* --- Request callback example --- */
get('search/homeworks', params, function(err, data, response) {
  if(!err){
    // This is where the magic will happen
  } else {
    console.log(err);
  }
})
/*
  Note: A callback is important here because we need to wait for a response
  from the server before we can move forward in our code.
*/
