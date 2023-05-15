import { body, query } from 'express-validator';

export const userUpdateValidation = [
	body('avatarUrl', 'Given Name lenght must be minimum 3 symbols').isURL(),
	body('coverUrl', 'Given Name lenght must be minimum 3 symbols').isURL(),
	body('givenName', 'Given Name lenght must be minimum 3 symbols').isLength({ min: 3 }),
	body('surname', 'Surname lenght must be minimum 3 symbols').isLength({ min: 3 }),
	body('bio', 'Surname lenght must be minimum 3 symbols').isLength({ min: 0, max: 1000 }),
];

export const userSearchValidation = [
	query('search', 'Specify search text').isString(),
	// query(['page', 'limit'], 'Specify search options'),
];
