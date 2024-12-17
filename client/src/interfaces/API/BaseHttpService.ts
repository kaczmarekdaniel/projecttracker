type TMethod = "POST" | "PUT" | "DELETE" | "GET" | "PATCH";

class ApiError extends Error {
	public code: number;

	constructor(code: number, message: string) {
		super(message);
		this.code = code;
		this.name = "ApiError";
		console.log(code, message)
		Object.setPrototypeOf(this, ApiError.prototype);
	}
}

export class BaseHttpService {
	protected async api<T>(method: TMethod, url: string): Promise<T> {
		const response = await fetch(url, {
			credentials: "include",
			method: method,
		});

		if (!response.ok) {
			throw new ApiError(response.status, response.statusText);
		}

		return await response.json();
	}
}