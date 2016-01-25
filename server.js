var Github = require('github-api');

var github = new Github({
		  username: "betasoft111",
		  password: "betasoft@123",
		  auth: "basic"
		});
		var repo = github.getRepo("betasoft111", "prelaunch");
		repo.show(function(err, repo) {
			console.log(repo);
		});