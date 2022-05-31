import React from "react";

export default function TableUserRequest() {
  return (
    <div
      className="bg-white"
      style={{
        marginRight: 60,
        marginLeft: 47,
        height: "65vh",
        position: "relative",
      }}
    >
      <table></table>
      <table
        className="table"
        style={{
          borderColor: "black",
          marginTop: 40,
          marginBottom: 40,
          color: "black",
        }}
      >
        <thead>
          <tr>
            <th
              scope="col"
              style={{
                textAlign: "center",
                backgroundColor: "#01a2ff",
                color: "white",
              }}
            >
              Request ID
            </th>
            <th
              scope="col"
              style={{
                textAlign: "center",
                backgroundColor: "#01a2ff",
                color: "white",
              }}
            >
              Request Description
            </th>
            <th
              scope="col"
              style={{
                textAlign: "center",
                backgroundColor: "#01a2ff",
                color: "white",
              }}
            >
              Date Of Request
            </th>
            <th
              scope="col"
              style={{
                textAlign: "center",
                backgroundColor: "#01a2ff",
                color: "white",
              }}
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              1
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              I want to report about parking slot
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              19/4/2022
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(0, 179, 255)",
              }}
            >
              Processing
            </td>
          </tr>
          <tr>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              2
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              I want to report about parking slot
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              15/4/2022
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(248, 68, 28)",
              }}
            >
              Rejected
            </td>
          </tr>
          <tr>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              3
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              I want to report about parking slot
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              15/5/2022
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(89, 238, 102)",
              }}
            >
              Accepted
            </td>
          </tr>
          <tr>
            <td
              scope="col"
              style={{
                textAlign: "center",
                color: "rgb(123, 123, 123)",
              }}
            />
            <td
              scope="col"
              style={{
                textAlign: "center",
                color: "rgb(123, 123, 123)",
              }}
            />
            <td
              scope="col"
              style={{
                textAlign: "center",
                color: "rgb(123, 123, 123)",
              }}
            />
            <td
              scope="col"
              style={{
                textAlign: "center",
                color: "rgb(123, 123, 123)",
              }}
            >
              <button
                type="button"
                className="btn btn-warning font-weight-bold"
                style={{ color: "white" }}
              >
                + Make A New Request
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
