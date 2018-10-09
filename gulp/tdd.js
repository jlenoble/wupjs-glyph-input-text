import gulp from 'gulp';

import './bundle';
import './test';
import './serve';
import './watch';

gulp.task('tdd', gulp.series('bundle', 'test', 'serve', 'watch'));
