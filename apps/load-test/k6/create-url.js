import http from "k6/http";
import { check } from "k6";

export const options = {
  scenarios: {
    load: {
      executor: "constant-vus",
      vus: 100,
      duration: "1s",
    },
  },
};
// export const options = {
//   vus: 100,
//   iterations: 100
// };
const BASE_URL = "http://localhost:3001";
const JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzgxODc3ODM1LCJleHAiOjE3ODE5NjQyMzV9.zMfZlZmcbG0PWTLBfNre4z3xBAMjoNWUW9FOncgrvEg";

export default function () {
  const payload = JSON.stringify({
    url: "google.com",
  });

 const params = {
  headers: {
    Cookie: `accessToken=${JWT_TOKEN}`,
    "Content-Type": "application/json",
  },
};
  

  const res = http.post(`${BASE_URL}/url`, payload, params);

  console.log(`status=${res.status}`);
  console.log(`body=${res.body}`);

  check(res, {
    "success": (r) => r.status >= 200 && r.status < 300,
  });
}