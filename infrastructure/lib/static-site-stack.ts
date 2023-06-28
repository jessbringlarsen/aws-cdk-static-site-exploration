import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { S3 } from './constructs/S3';

export class StaticSiteStack extends cdk.Stack {

  public readonly s3: S3;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    this.s3 = new S3(this, 'S3');
  }
}
