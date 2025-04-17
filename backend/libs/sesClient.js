import { SESClient } from '@aws-sdk/client-ses';

const region = process.env.AWS_REGION;

const sesClient = new SESClient({ region });

export { sesClient };
