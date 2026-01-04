import dotenv from "dotenv"

dotenv.config();

export const ENV={
    PORT:process.env.PORT,
    DB_URl:process.env.DB_URl
};