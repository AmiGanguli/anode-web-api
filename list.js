import * as db from "./libs/dynamodb-lib";
import {success, failure} from "./libs/response-lib";

export async function
main(event, context, callback)
{
	const params = {
		TableName: "anode-web-notes",
		KeyConditionExpression: "userId = :userId",
		ExpressionAttributeValues: {
			":userId": event.requestContext.identity.cognitoIdentityId
		}
	};
	try {
		const result = await db.call("query", params);
		callback(null, success(result.Items));
	} catch (e) {
		callback(null, failure({status: false}));
	}
}

