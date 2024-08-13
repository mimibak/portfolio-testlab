export async function fetchData() {
  try {
    let response = await fetch("./src/component/api/db.json");
    if (!response.ok) {
      throw new Error("Fetch error:" + response.status);
    }
    let user = await response.json();
    return user;
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
  }
}
