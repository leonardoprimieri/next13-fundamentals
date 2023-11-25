import { env } from "~/env";

export function api(path: string, init?: RequestInit) {
  const BASE_URL = env.NEXT_PUBLIC_BASE_API_URL;
  const API_PREFIX = "/api";
  const url = new URL(API_PREFIX.concat(path), BASE_URL);

  return fetch(url, init);
}
