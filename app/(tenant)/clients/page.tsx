import ServerComponent from "./server-component";

export default async function () {
  return (
    <div data-ui="page-clients">
      <h3>Tenant's Clients</h3>
      {/* @ts-ignore */}
      <ServerComponent />
    </div>
  );
}
