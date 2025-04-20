import app from "./presentation/server";
import { envs } from "./config/envs";

app.listen(envs.PORT, () => {
    console.log(`Server is running on port ${envs.PORT}`);
});