// var Github = require('github-api');
// var github = new Github({
// 			  username: "betasoft111",
// 			  password: "betasoft@123",
// 			  auth: "basic"
// 			});
 

module.exports = function(grunt) {
	grunt.initConfig({
	 config : grunt.file.readJSON('config.json'),
	 gitadd: {
	    task: {
	      options: {
	        force: true
	      },
	      files: {
	        src: ['<%= config.github.source %>/*']
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
                src: ['<%= config.github.source %>/*']
            }
        }
    },
     gitpush: {
	    your_target: {
	      options: {
	        remote:'<%= config.github.remote %>',
	        branch : '<%= config.github.branch %>',
	        upstream : '<%= config.github.github.upstream %>'
	      }
	    }
	  },
	  gitpull: {
	    your_target: {
	      options: {
	      	
	      	
	      }
	    }
	  },
	  gitclone: {
	    your_target: {
	      options: {
	        repository: '<%= config.github.github.upstream %>',
                branch: 'master'
                
	      }
	    }
	  },

	});

	 
grunt.loadNpmTasks('grunt-git');

};
