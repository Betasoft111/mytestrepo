// var Github = require('github-api');
// var github = new Github({
// 			  username: "betasoft111",
// 			  password: "betasoft@123",
// 			  auth: "basic"
// 			});

module.exports = function(grunt) {
	grunt.initConfig({
	 gitadd: {
	    task: {
	      options: {
	        force: true
	      },
	      files: {
	        src: ['./pushit/*']
	      }
	    }
	  },
	  gitcommit: {
        task: {
            options: {
                message: 'Testing',
                noVerify: true,
                noStatus: false
            },
            files: {
                src: ['./pushit/*.*']
            }
        }
    },
     gitpush: {
	    your_target: {
	      options: {
	        remote:'origin',
	        branch : 'master',
	        upstream : 'https://github.com/Betasoft111/mytestrepo.git'
	      }
	    }
	  },
	  gitpull: {
	    your_target: {
	      options: {
	      	
	      	
	      }
	    }
	  },

	})

	 
grunt.loadNpmTasks('grunt-git');

};
