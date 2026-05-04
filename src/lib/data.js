import path from "path";
import fs from "node:fs";

export const urlMaker = (fileName) => {
  const filePath = path.join(process.cwd(), "public", fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);
  return data;
};