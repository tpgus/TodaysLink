//서버측 파일 시스템 관련 utils
import fs from "fs/promises";
import path from "path";

export const buildFilePath = (fileName: string) => {
  return path.join(process.cwd(), "public", "static-data", fileName);
};

export const readFileData = async <T>(filePath: string) => {
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData.toString()) as T;
  return data;
};
