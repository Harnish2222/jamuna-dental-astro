import { client } from "../../tina/__generated__/client";

export async function loadHomepageContent() {
  try {
    const { data } = await client.queries.homepage({ relativePath: "homepage.json" });
    return data.homepage;
  } catch (error) {
    console.error("Error loading homepage content:", error);
    return null;
  }
}
