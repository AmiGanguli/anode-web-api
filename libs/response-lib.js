export function
success(body)
{
	return buildResponse(200,body);
}

export function
failure(body)
{
	return buildResponse(500,body);
}

function
buildResponse(status_code, body)
{
	return {
		statusCode: status_code,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true
		},
		body: JSON.stringify(body)
	};
}



