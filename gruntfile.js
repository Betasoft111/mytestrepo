var Github = require('github-api');
var github = new Github({
			  username: "betasoft111",
			  password: "betasoft@123",
			  auth: "basic"
			});

module.exports = function(grunt) {

	 grunt.registerTask('gittask', function() {
	       
	       var repo = github.getRepo("betasoft111", "prelaunch");
			repo.show(function(err, repo) {
				grunt.log.writeln(repo);
			});



	 });


	 grunt.registerTask('gitpull', function() {
	       
	      var repo = github.getRepo("betasoft111", "mttestrepo");
			repo.fork(function(err) {
				if(err) return flase;
				console.log('done')
			});

	 });
  
    


};
