import React from "react";

export default function TableAdminUserMana() {
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
            placeholder="Enter account"
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
              AccI D
            </th>
            <th
              scope="col"
              style={{
                textAlign: "center",
                backgroundColor: "#01a2ff",
                color: "white",
              }}
            >
              AccName
            </th>
            <th
              scope="col"
              style={{
                textAlign: "center",
                backgroundColor: "#01a2ff",
                color: "white",
              }}
            >
              Password
            </th>
            <th
              scope="col"
              style={{
                textAlign: "center",
                backgroundColor: "#01a2ff",
                color: "white",
              }}
            >
              Email
            </th>
            <th
              scope="col"
              style={{
                textAlign: "center",
                backgroundColor: "#01a2ff",
                color: "white",
              }}
            >
              Phone
            </th>
            <th
              scope="col"
              style={{
                textAlign: "center",
                backgroundColor: "#01a2ff",
                color: "white",
              }}
            >
              Full Name
            </th>
            <th
              scope="col"
              style={{
                textAlign: "center",
                backgroundColor: "#01a2ff",
                color: "white",
              }}
            >
              Role
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
              admin01
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              aaaaaaa
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              admin12@gmail.com
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              097654365
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              Administrator
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              Admin
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(89, 238, 102)",
              }}
            >
              Active
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
              daisy02
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              12345678
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              user2@gmail.com
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              0987652365
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              Anna Tran
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              User
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(248, 68, 28)",
              }}
            >
              Inactive
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
                Unblock
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
              daisy01
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              123456
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              user1@gmail.com
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              0987652653
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              Will William
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              User
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(89, 238, 102)",
              }}
            >
              Active
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              <button type="button" className="btn btn-danger">
                Block
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
              daisy06
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              12345612
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              user3@gmail.com
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              0982132653
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              Will Chris
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              User
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(89, 238, 102)",
              }}
            >
              Active
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              <button type="button" className="btn btn-danger">
                Block
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
