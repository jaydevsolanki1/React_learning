import React from "react";

function Structure() {
  return (
    <div>
      <h1 className="text-center">Folder Structure</h1>
      <div className="container d-flex gap-5 justify-content-center p-5">
        <ul className="list-unstyled">
          <h3> src</h3>
          <li>
            {" "}
            ├── components/&nbsp; →&nbsp;&nbsp;&nbsp;&nbsp; UI reusable parts
          </li>
          <li>
            {" "}
            ├── pages/&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; →&nbsp;&nbsp;&nbsp;&nbsp;
            full pages (Home, About)
          </li>
          <li>
            {" "}
            ├── hooks/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            →&nbsp;&nbsp;&nbsp;&nbsp; custom hooks (useFetch)
          </li>
          <li>
            {" "}
            ├── services/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            →&nbsp;&nbsp;&nbsp;&nbsp; API logic (axios calls)
          </li>
          <li>
            {" "}
            ├── context/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            →&nbsp;&nbsp;&nbsp;&nbsp; global state (Context API)
          </li>
          <li> ├── App.jsx</li>
          <li> ├── main.jsx</li>
        </ul>
        <table
          border="4"
          cellPadding="10"
          style={{ borderCollapse: "collapse" }}
          className=""
        >
          <thead>
            <tr>
              <th>Folder</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>components</td>
              <td>small UI (Button, Card)</td>
            </tr>
            <tr>
              <td>pages</td>
              <td>full screen pages</td>
            </tr>
            <tr>
              <td>hooks</td>
              <td>reusable logic</td>
            </tr>
            <tr>
              <td>services</td>
              <td>API calls only</td>
            </tr>
            <tr>
              <td>context</td>
              <td>global state</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
    </div>
  );
}

export default Structure;
