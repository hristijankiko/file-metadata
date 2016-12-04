let gulp = require('gulp');
let nodemon = require('gulp-nodemon');

gulp.task('start', function(){
  nodemon({
    script: 'app.js'
  });
});