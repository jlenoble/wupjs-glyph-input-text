import gulp from 'gulp';
import mocha from 'gulp-mocha';

export const test = () => {
  return gulp.src('build/test/wupjs-glyph-input-text.test.js')
    .pipe(mocha());
};

gulp.task('test', test);
