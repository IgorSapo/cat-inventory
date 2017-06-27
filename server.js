// const express = require('express');
// const cookieParser = require('cookie-parser');
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from './webpack.config'
import Express from 'express';
import cookieParser from 'cookie-parser';

const app = new Express();

// app.use(cookieParser());

// app.use((req, res) => {s
// 	res.end('<div>Hello</div>')
// })
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/src/index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server listenening on port: ${PORT}`);
});