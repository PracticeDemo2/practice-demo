
fis.match('**.less', {
	parser: fis.plugin('less'),
	rExt: '.css'
});

fis.match('*', {
	release: './$0'
});