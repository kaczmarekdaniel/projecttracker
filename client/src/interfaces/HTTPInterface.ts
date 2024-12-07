enum HttpMethod {
	GET = "GET",
	POST = "POST",
	PUT = "PUT",
	DELETE = "DELETE",
}

class ApiError extends Error {
	public code: number;

	constructor(code: number, message: string) {
		super(message);
		this.code = code;
		this.name = "ApiError";
		Object.setPrototypeOf(this, ApiError.prototype);
	}
}

export class BaseHttpService {
	protected async callApi<T>(method: HttpMethod, url: string): Promise<T> {
		const response = await fetch(url, {
			credentials: "include",
			method: method,
		});

		if (!response.ok) {
			throw new ApiError(response.status, response.statusText);
		}

		const data: T = await response.json();
		return data;
	}
}