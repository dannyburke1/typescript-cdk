import * as core from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";

export class BucketResourceStack extends core.Stack {
    constructor(scope: core.App, id: string, props?: core.StackProps) {
      super(scope, id, props);

      const bucketResource = new s3.CfnBucket(this, "MyServerlessStackBucket");

      // Get name of bucket to which we replicate from config file:
      const bucketName = this.node.tryGetContext("bucketName");
    }
}