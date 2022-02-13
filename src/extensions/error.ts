import { HttpException, HttpStatus } from '@nestjs/common';

export const ShowError = (errorCode: string, status?: HttpStatus) => {
  throw new HttpException(
    {
      message: errorCode,
    },
    status ?? HttpStatus.CONFLICT,
  );
};
