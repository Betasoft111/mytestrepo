module.exports = function(grunt) {

  grunt.initConfig({
  	 gitpush: {
        your_target: {
      options: {
        cwd: "pushit/"
      },
      files: [
        {
          src: ["fileone.txt", "filetwo.js"],
          expand: true,
          cwd: "dolbyzerr/grunt-github-releaser"
        }
      ]
    }
    },
  "github-release": {
    options: {
      repository: 'dolbyzerr/grunt-github-releaser', // Path to repository
      auth: {   // Auth credentials
        user: 'dolbyzerr',
        password: ''
      }
    },
    files: {
      src: ['pushit/test.js'] // Files that you want to attach to Release
    }

  },
  	
   
  });

grunt.loadNpmTasks('grunt-git');
grunt.loadNpmTasks('grunt-github-releaser');

};
