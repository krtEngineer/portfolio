import { createClient } from "contentful";

export const handler = async (event) => {
  try {
    const client = createClient({
      accessToken: process.env.VITE_ACCESS_TOKEN,
      space: process.env.VITE_SPACE_ID,
      environment: "master",
    });

    const { searchRequest } = event.queryStringParameters;
    console.log(JSON.parse(searchRequest));
    const data = await client.getEntries(JSON.parse(searchRequest));
    return {
      statusCode: 200,
      body: JSON.stringify({
        error: null,
        data: data,
      }),
    };
  } catch (error) {
    console.log(error.message);
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: error.message,
        data: null,
      }),
    };
  }
};
