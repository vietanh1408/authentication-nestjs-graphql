import { HttpException, HttpStatus } from '@nestjs/common';

export const ShowError = (errorCode) => {
  throw new HttpException(
    {
      message: errorCode,
    },
    HttpStatus.CONFLICT,
  );
};
