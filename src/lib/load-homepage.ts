import fs from "fs";
import path from "path";

export async function loadHomepageContent() {
  try {
    const contentPath = path.join(process.cwd(), "src/data/homepage.json");
    const fileContent = fs.readFileSync(contentPath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error loading homepage content:", error);
    return null;
  }
}
