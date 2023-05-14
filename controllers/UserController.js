import * as UserService from '../services/UserService.js';

export const register = async (req, res, next) => {
	try {
		const result = await UserService.register({
			email: req.body.email,
			password: req.body.password,
			givenName: req.body.givenName,
			surname: req.body.surname,
		});

		res.json(result);
	} catch (err) {
		console.log(err);
		next(err);
	}
};

export const login = async (req, res, next) => {
	try {
		const result = await UserService.login({
			email: req.body.email,
			password: req.body.password,
		});

		res.json(result);
	} catch (err) {
		console.log(err);
		next(err);
	}
};

export const getMe = async (req, res, next) => {
	try {
		const result = await UserService.getUserInfo(req.userId);

		res.json(result);
	} catch (err) {
		console.log(err);
		next(err);
	}
};
