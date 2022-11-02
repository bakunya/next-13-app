import { Suspense } from "react";
import ClientComponent from "./client-component";

export default async function () {
  return (
    <div data-ui="page-settings">
      <h3>Tenant's Settings</h3>
      {/* <Suspense fallback={<p>Suspense is working...</p>}> */}
      <ClientComponent />
      {/* </Suspense> */}
    </div>
  );
}
