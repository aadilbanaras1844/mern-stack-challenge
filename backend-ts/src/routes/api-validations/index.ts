import Joi from 'joi';

export const githubSearch = Joi.object({
    searchType: Joi.string().valid('users','repositories', 'issues').required(),
    searchText: Joi.string().required(),
});
