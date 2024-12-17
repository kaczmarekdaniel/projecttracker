// import { render } from '@testing-library/react';

import { BaseHttpService } from "@/interfaces/API/BaseHttpService.ts";

globalThis.fetch = jest.fn((method, body) => {
  console.log(method)
  if (body.method === "GET") {
    return Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ eth: 0.6, btc: 0.02, ada: 1 }), // Mocked GET response data
    });
  } else if (body.method === "POST") {
    return Promise.resolve({
      ok: true,
      status: 201,
      json: () => Promise.resolve({ message: "Created", data: { id: 1, name: "John Doe" } }), // Mocked POST response data
    });
  }
  return Promise.reject(new Error("Method not supported"));
}) as jest.Mock;


describe('Test BaseHttpService methods', () => {
  it('get ', async () => {
    class TestService extends BaseHttpService {
      async getData() {
        return this.api("GET", "");
      }
    }
    const httpService = new TestService();

    const response = await httpService.getData()

    expect(response).toEqual({ eth: 0.6, btc: 0.02, ada: 1 });

  });
});

//
// describe('App', () => {
//   it('should work as expected', () => {
//     render(<Header />);
//   });
// });