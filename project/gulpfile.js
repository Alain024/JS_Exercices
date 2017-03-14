//require tells node to search for 'gulp' in the node_modules folder.
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref      = require('gulp-useref');
var uglify      = require('gulp-uglify');
var gulpIf      = require('gulp-if');

//basic syntax for a gulp task:

gulp.task('hello', function() {
  console.log('Hello Zell');
});

//Sass Task
gulp.task('sass', function() {
  //archivo sass el cual va a estar escuchando
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
  .pipe(sass()) // Using gulp-sass
  //dest es la carpeta de destino
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

//Watch Sass task
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

//BrowserSync task
gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

//Chain files
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a js file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});
