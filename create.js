import uuid from "uuid";
import * as db from "./libs/dynamodb-lib";
import {success, failure} from "./libs/response-lib";

export async function 
main(event, context, callback) 
{
	const data = JSON.parse(event.body);
	const params = {
		TableName: "anode-web-notes",
		Item: {
			userId: event.requestContext.identity.cognitoIdentityId,
			noteId: uuid.v1(),
			content: data.content,
			attachment: data.attachment,
			createdAt: new Date().getTime()
		}
	};
	try {
		await db.call("put", params);
		callback(null, success(params.Item));
	} catch (e) {
		callback(null, failure({status: e}));
	}
}
