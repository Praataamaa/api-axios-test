import Joi from 'joi';

export const PostSchema = Joi.array().items({
    userId: Joi.number().required(),
    id: Joi.number().required(),
    title: Joi.string().required(),
    body: Joi.string().required()
  });

export const LoginResponse = Joi.object({
    id: Joi.number().required(),
    token: Joi.string().required()
  });

export const UserResponse = Joi.object({
    page: Joi.number().required(),
    per_page: Joi.number().required(),
    total: Joi.number().required(),
    total_pages: Joi.number().required(),
    data: Joi.array().items(
      Joi.object({
        id: Joi.number().required(),
        email: Joi.string().email().required(),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        avatar: Joi.string().uri().required(),
      }),
    ),
    support: Joi.object({
      url: Joi.string().uri().required(),
      text: Joi.string().required(),
    }).required(),
  });

  export const DeleteResponse = Joi.object({
    status: Joi.number().required(),
    data: Joi.any()
  });