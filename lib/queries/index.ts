import { getClient, getClients} from "./client";

export const AUTH_QUERIES = {
  'get-client': getClient,
  'get-clients': getClients,
}

const t = typeof AUTH_QUERIES