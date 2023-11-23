import { createWriteStream } from 'node:fs';

import * as morgan from 'morgan';
import { INestApplication } from '@nestjs/common';

export default function addMorgan(app: INestApplication) {
  const accessLogStream = createWriteStream('./access.log', {
    flags: 'a',
  });

  app.use(morgan('combined', { stream: accessLogStream }));
}
