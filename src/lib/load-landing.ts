import { client } from "../../tina/__generated__/client";

export async function loadLandingContent() {
  try {
    const { data } = await client.queries.landing({ relativePath: "dental.json" });
    return data.landing;
  } catch (error) {
    console.error("Error loading landing content:", error);
    return null;
  }
}
