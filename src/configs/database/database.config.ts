import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const databaseConfig = registerAs('database', () => {
  const values = {
    SQLITE_PATH: process.env.SQLITE_PATH,
  };

  const schema = Joi.object({
    SQLITE_PATH: Joi.string().required(),
  });

  const { error } = schema.validate(values, { abortEarly: false });

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return values;
});
