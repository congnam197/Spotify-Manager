import axios from "axios";
export async function findAllStatus() {
  const res = await axios.get("http://localhost:8080/status");
  return res.data;
}
export async function findStatusById(id) {
  const res = await axios.get("http://localhost:8080/status/" + id);
  return res.data;
}
