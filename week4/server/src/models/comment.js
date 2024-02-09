import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { v4 as uuidv4 } from "uuid";

const Comment = sequelize.define(
  "Comment",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuidv4(),
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

export default Comment;
