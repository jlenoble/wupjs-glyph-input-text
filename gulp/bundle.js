import gulp from 'gulp';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';

import {bundleRootGlob, buildDir, bundleGlob} from './globs';
import './build';

export const bundle = () => {
  return browserify(bundleRootGlob, {
    debug: true,
  })
    .bundle()
    .pipe(source(bundleGlob))
    .pipe(buffer())
    .pipe(gulp.dest(buildDir));
};

gulp.task('bundle', gulp.series('build', bundle));
