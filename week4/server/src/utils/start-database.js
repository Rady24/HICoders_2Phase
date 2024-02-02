export async function startDatabase(sequelizeInstance) {
  try {
    await sequelizeInstance.authenticate();
    console.log("Connection has been established successfully.");
    await sequelizeInstance.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    throw new Error("Unable to connect to the database:", error);
  }
}
