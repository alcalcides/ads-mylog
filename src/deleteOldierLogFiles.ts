import * as fs from "fs/promises";

export async function deleteOldierLogFiles(logsPath: string) {
  try {
    const files = await fs.readdir(logsPath);

    const removeFilesPromise: Promise<void>[] = files.map((file) => {
      const path = `${logsPath}/${file}`
      return deleteFile(path);
    });

    await Promise.all(removeFilesPromise);
  } catch (error) {
    console.log(error);
  }
}

function deleteFile(path: string): Promise<void> {
  return fs.unlink(path);
}
