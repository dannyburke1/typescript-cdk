pre-reqs:
	npm install -g aws-cdk
	npm install -g typescript
	npm install @aws-cdk/aws-s3 @aws-cdk/aws-lambda @aws-cdk/aws-dynamodb @aws-cdk/aws-route53 @aws-cdk/aws-ecs @aws-cdk/aws-apigateway

update-npm:
	npm update -g typescript

init:
	mkdir serverless
	cd serverless/
	cdk init app --language typescript