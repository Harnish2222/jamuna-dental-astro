export async function getHomepageContent() {
  try {
    const response = await fetch(new URL("../content/homepage.json", import.meta.url));
    if (!response.ok) {
      console.error("Failed to load homepage content");
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error("Error loading homepage content:", error);
    return null;
  }
}
