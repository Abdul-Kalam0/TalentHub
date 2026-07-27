import initializeDB from "./config/db.js";
import server from "./index.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await initializeDB();
    server.listen(PORT, () => {
      console.log(`✅ Server is listening on ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error starting server", error);
    process.exit(1);
  }
}

startServer();
