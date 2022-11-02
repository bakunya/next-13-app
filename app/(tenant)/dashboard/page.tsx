import ClientComponent from "./client-component";

export default async function () {
  return (
    <div data-ui="page-dashboard">
      <h3>Tenant Dashboard</h3>
      <ClientComponent />
    </div>
  );
}
