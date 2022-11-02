import React from "react";

export default function MetaLayout({
  leftContent,
  children,
}: {
  leftContent: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <table style={{ width: "90%" }}>
      <tbody>
        <tr style={{ verticalAlign: "top" }}>
          <td style={{ width: "15%", minWidth: "120px", paddingRight: "1rem" }}>
            {leftContent}
          </td>
          <td style={{ paddingLeft: "1rem", borderLeft: "1px solid silver" }}>
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
