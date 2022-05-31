import React from "react";

export default function TableAdminRequestMana() {
  return (
    <div
      className="bg-white"
      style={{
        marginRight: 60,
        marginLeft: 47,
        height: "65vh",
        position: "relative",
        boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.25)",
      }}
    >
      <form
        action="mainController"
        method="post"
        className="form-inline"
        style={{ marginLeft: 860 }}
      >
        <div
          className="form-group"
          style={{ color: "black", backgroundColor: "white" }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Enter User's ID"
            name="txtAccountSearch"
            defaultValue
          />
        </div>
        <button
          type="submit"
          value="searchAccount"
          name="action"
          className="btn btn-outline-primary my-2 my-sm-0"
        >
          Search
        </button>
      </form>
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
              User ID
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
            <th
              scope="col"
              style={{
                textAlign: "center",
                backgroundColor: "#01a2ff",
                color: "white",
              }}
            >
              Action
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
                color: "rgb(0, 179, 255)",
              }}
            >
              Processing
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              <button type="button" className="btn btn-success">
                Accept
              </button>
              <button type="button" className="btn btn-danger">
                Reject
              </button>
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
              20/5/2022
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
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            />
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
              4
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
              21/4/2022
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
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
