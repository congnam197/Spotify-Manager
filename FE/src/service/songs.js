import axios from "axios"
export async function findAllSongs(page) {
  const res = await axios.get(`http://localhost:8080/songs/${page}/1`);
  return res.data;
}
export async function findSongById(id) {
  const res = await axios.get("http://localhost:8080/songs/"+id);
  return res.data;
}
export async function createNewSong(song) {
  await axios.post("http://localhost:8080/songs", song);
}
export async function SearchByNameSong(name) {
  const res = await axios.get(`http://localhost:8080/songs/search/${name}`);
  return res.data
}
export async function UpdateSong(object) {
 await axios.put("http://localhost:8080/songs/"+object.id,object);
}
export async function deleteSongById(id) {
  await axios.delete("http://localhost:8080/songs/"+id);
 }
