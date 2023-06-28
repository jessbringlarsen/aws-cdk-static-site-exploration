#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StaticSiteStack } from '../lib/static-site-stack';

const app = new cdk.App();
new StaticSiteStack(app, 'StaticSiteStack', {
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
  env: { region: 'eu-north-1' }
});