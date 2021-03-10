import * as core from "@aws-cdk/core";
import * as wafv2 from '@aws-cdk/aws-wafv2';


export class WafV2Stack extends core.Stack {
    constructor(scope: core.App, id: string, props?: core.StackProps) {
      super(scope, id, props);

      const webAcl = new wafv2.CfnWebACL(this, "WebAcl", {
        defaultAction: { allow: {} },
        rules: [
          {
            priority: 1,
            overrideAction: { none: {} },
            visibilityConfig: {
              sampledRequestsEnabled: true,
              cloudWatchMetricsEnabled: true,
              metricName: "AWS-AWSManagedRulesAmazonIpReputationList",
            },
            name: "AWS-AWSManagedRulesAmazonIpReputationList",
            statement: {
              managedRuleGroupStatement: {
                vendorName: "AWS",
                name: "AWSManagedRulesAmazonIpReputationList",
              },
            },
          },
          {
            priority: 2,
            overrideAction: { none: {} },
            visibilityConfig: {
              sampledRequestsEnabled: true,
              cloudWatchMetricsEnabled: true,
              metricName: "AWS-AWSManagedRulesCommonRuleSet",
            },
            name: "AWS-AWSManagedRulesCommonRuleSet",
            statement: {
              managedRuleGroupStatement: {
                vendorName: "AWS",
                name: "AWSManagedRulesCommonRuleSet",
              },
            },
          },
          {
            priority: 3,
            overrideAction: { none: {} },
            visibilityConfig: {
              sampledRequestsEnabled: true,
              cloudWatchMetricsEnabled: true,
              metricName: "AWS-AWSManagedRulesKnownBadInputsRuleSet",
            },
            name: "AWS-AWSManagedRulesKnownBadInputsRuleSet",
            statement: {
              managedRuleGroupStatement: {
                vendorName: "AWS",
                name: "AWSManagedRulesKnownBadInputsRuleSet",
              },
            },
          },
        ],
        scope: "REGIONAL",
        visibilityConfig: {
          sampledRequestsEnabled: true,
          cloudWatchMetricsEnabled: true,
          metricName: "web-acl",
        },
      });

    new wafv2.CfnWebACLAssociation(this, "WebAclAssociation", {
        webAclArn: webAcl.attrArn,
        resourceArn: "EXAMPLE_ARN",
      });
    }
}


