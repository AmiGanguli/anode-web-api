import * as db from "./libs/dynamodb-lib";
import {success, failure} from "./libs/response-lib";

export async function
main(event, context, callback)
{
	const params = {
		TableName: 'anode-web-notes',
		Key: {
			userId: event.requestContext.identity.cognitoIdentityId,
			noteId: event.pathParameters.id
		}
	};
	try {
		const result = await db.call("delete", params);
		callback(null, success({status: true}));
	} catch (e) {
		callback(null, failure({status: false}));
	}
}

