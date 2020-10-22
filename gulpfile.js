'use strict';

var gulp 			= require('gulp'),
	sass 			= require('gulp-sass'),
	rename 			= require('gulp-rename'),
	autoprefixer 	= require('gulp-autoprefixer'),
	cleanCSS 		= require('gulp-clean-css'),
	sourcemaps 		= require('gulp-sourcemaps'),
	notify 			= require('gulp-notify'),
	browserSync 	= require('browser-sync'),
	babel 			= require('gulp-babel'),
	concat 			= require('gulp-concat'),
	uglify 			= require('gulp-uglify');

sass.compiler = require('node-sass');

gulp.task('browser-sync', function() {
	browserSync.init({
		// proxy: "localhost/php_formulaire_2019/", au cas où vous êtes sur un serveur local
    	server: {
    		baseDir: "./" // à utiliser en cas de fichier html
    	}
	})
});

gulp.task('styles', function() {
	return gulp.src('./scss/**/*.scss')
	.pipe(sourcemaps.init()) // récupère tous les fichiers scss
	.pipe(sass({outputStyle: 'compressed'}).on('error', notify.onError())) // compile, si erreur il l'affiche
	// renomme le fichier pour sa version reduite par exemple, "style.min.css"
	.pipe(rename({suffix: '.min', prefix: ''}))
	// pour adapter aux versions precedente
	.pipe(autoprefixer(['last 15 versions']))
	// clean css enleve tous les commentaires pour une lecture plus rapide du code
	.pipe(cleanCSS({level : { 1: { specialComments: 0 }}})) 
	.pipe(sourcemaps.write())
    .pipe(gulp.dest('./css')) // dossier de destination du fichier compilé
    .pipe(notify({message: 'Bravo : scss compilé !!!', onLast: true}))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src([
		'./libs/jQuery/jquery-3.5.1.min.js',
		// './app/libs/plugins/**/*.js',
		'./js/src/**/*.js'
	])
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(concat('scripts.min.js'))
	// Uglify pour reduce la longueur d'une variable
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./js/dist'))
	.pipe(notify({message: 'Bravo : js compilé !!!', onLast: true}))
	.pipe(browserSync.stream());
});

gulp.task('code', function() { 
	return gulp.src('**/*.html') // en html pour le moment, à modifier si php
	.pipe(browserSync.stream());
});

gulp.task('watch', function() {
	gulp.watch('./scss/**/*.scss', gulp.parallel('styles'));
	gulp.watch(['./libs/**/*.js','./js/src/**/*.js'], gulp.parallel('scripts'));
	gulp.watch('**/*.html', gulp.parallel('code')); // en html pour le moment, à modifier si php
});

gulp.task('default', gulp.parallel('styles','scripts', 'watch', 'code', 'browser-sync'));