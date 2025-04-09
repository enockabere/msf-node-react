import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const User = sequelize.define("User", {
  No_: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  User_ID: DataTypes.STRING,
  First_Name: DataTypes.STRING,
  Middle_Name: DataTypes.STRING,
  Last_Name: DataTypes.STRING,
  Name: DataTypes.STRING,
  Global_Dimension_1_Code: DataTypes.STRING,
  Global_Dimension_2_Code: DataTypes.STRING,
  Status: DataTypes.STRING,
  Job_Position: DataTypes.STRING,
  Job_Title: DataTypes.STRING,
  Supervisor: DataTypes.STRING,
  Supervisor_Email: DataTypes.STRING,
  Supervisor_Name: DataTypes.STRING,
  Supervisor_Title: DataTypes.STRING,
  External_Supervisor: DataTypes.BOOLEAN,
  Hosted_Employee: DataTypes.STRING,
  Password: DataTypes.STRING, // You can hash this later
  Verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  LeaveBalance: DataTypes.FLOAT,
});

export default User;
