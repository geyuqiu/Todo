import crossFetch from "cross-fetch";

const fetch = crossFetch;

export class HttpClient {
	async get(url: string): Promise<any> {
		return await fetch(url)
			.then((resp: any) => resp.json())
			.then((data: any) => data)
			.catch((error: any) => {
				throw new Error(
					`Received no response because of following error: ${error}`
				);
			});
	}
}

export const httpClient = new HttpClient();
