import React from "react";

export default function TableUserVehicle() {
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
      <form
        action="mainController"
        method="post"
        className="form-inline pt-3"
        style={{ marginLeft: 860 }}
      >
        <div
          className="form-group"
          style={{ color: "black", backgroundColor: "white" }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Enter Vehicle's Plate Num"
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
              Vehicle ID
            </th>
            <th
              scope="col"
              style={{
                textAlign: "center",
                backgroundColor: "#01a2ff",
                color: "white",
              }}
            >
              Plate Number
            </th>
            <th
              scope="col"
              style={{
                textAlign: "center",
                backgroundColor: "#01a2ff",
                color: "white",
              }}
            >
              Vehicle Image
            </th>
            <th
              scope="col"
              style={{
                textAlign: "center",
                backgroundColor: "#01a2ff",
                color: "white",
              }}
            >
              Vehicle Description
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
              29A-F1666.66
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
              This is a Porsche
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              <button type="button" className="btn btn-primary">
                Edit
              </button>
              <button type="button" className="btn btn-danger">
                Delete
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
              9A-B262.13
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
              This is a Camry
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              <button type="button" className="btn btn-primary">
                Edit
              </button>
              <button type="button" className="btn btn-danger">
                Delete
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
              29D-999.13
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
              This is a Mercedes
            </td>
            <td
              scope="col"
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                color: "rgb(123, 123, 123)",
              }}
            >
              <button type="button" className="btn btn-primary">
                Edit
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
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
                className="btn btn-success font-weight-bold"
              >
                + Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
