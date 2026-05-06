import fs from "fs";
import path from "path";

export async function loadLandingContent() {
  try {
    const contentPath = path.join(process.cwd(), "src/data/landing/dental.json");
    const fileContent = fs.readFileSync(contentPath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error loading landing content:", error);
    return null;
  }
}
