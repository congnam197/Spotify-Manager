import { useEffect, useState } from "react";
import {
  UpdateSong,
  deleteSongById,
  findAllSongs,
  findSongById,
} from "../service/songs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { findStatusById } from "../service/status";
import { SearchByNameSong } from "../service/songs";

export default function ListSongs() {
  const [songs, setSongs] = useState([]);
  const [page, setPage] = useState(0);
  const [play, setPlay] = useState([]);
  // Phân Trang
  const nextPage = async () => {
    const data = await findAllSongs(page);
    if (page < data.totalPages - 1) {
      setPage(page + 1);
    }
  };
  const previousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  //  danh sách bài hát
  const getAllSongs = async () => {
    const data = await findAllSongs(page);
    setSongs(data.content);
  };
  useEffect(() => {
    getAllSongs();
  }, [page]);

  //Công khai bài hát
  const handleSubmit = async (id) => {
    const song = await findSongById(id);
    const status = await findStatusById(2);
    console.log(status);
    const object = {
      ...song,
      status: status,
    };
    await UpdateSong(object);
    getAllSongs();
    Swal.fire({
      title: "bài hát đã được công khai",
      timer: 2000,
      icon: "success",
    });
  };

  function confirmSubmit(name, id) {
    console.log(id);
    Swal.fire({
      title: "Xác nhận",
      showConfirmButton: true,
      confirmButtonText: "Có",
      cancelButtonText: "Không",
      text: "Bạn có muốn công khai bài hát : " + name + "?",
    }).then((result) => {
      if (result.isConfirmed) {
        handleSubmit(id);
      }
    });
  }
  // tìm kiếm
  const searchSongs = async () => {
    const name = document.getElementById("name_song").value;
    if (name == null) {
      getAllSongs();
    }
    const data = await SearchByNameSong(name);
    console.log(data);
    setSongs(data);
  };
  //Xóa bài hát
  function confirmDelete(name, id) {
    Swal.fire({
      title: "Xác nhận",
      showConfirmButton: true,
      confirmButtonText: "Có",
      cancelButtonText: "Không",
      text: "Bạn có muốn xóa bài hát : " + name + "?",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteSong(id);
      }
    });
  }
  const handleDeleteSong = async (id) => {
    try {
      await deleteSongById(id);
      getAllSongs();
      Swal.fire({
        title: "Xóa thành công!!",
        text: "Bài hát đã xóa khỏi danh sách",
        icon: "success",
        timer: 2000,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  //Phát nhạc
  const playing = async (id) => {
    const song = await findSongById(id);
    setPlay(song);
  };

  return (
    <div className="container">
      <div className="playing-song">
        <h3>Tên bài Hát: {play.name_song}</h3>
        <h4>Ca Sĩ :{play.singer}</h4>
        <h4>Thời lượng: {play.time_up}</h4>
      </div>
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>
                Kho Quản Lý Bài Hát <b>Spotify</b>
              </h2>
            </div>
            <div className="col-sm-6">
              <Link to="/create" className="btn btn-success">
                <i className="material-icons"></i> <span>Đăng Ký Bài Hát</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="search">
          <input
            type="text"
            id="name_song"
            name="name_song"
            placeholder=" Nhập tên bài hát "
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              searchSongs();
            }}
          >
            Search
          </button>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên Bài Hát</th>
              <th>Ca Sĩ</th>
              <th>Thời Gian Phát</th>
              <th>Số Lượt Yêu Thích</th>
              <th>Trạng Thái</th>
              <th colSpan={2} className="action">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <tr key={song.id}>
                <td>{song.id}</td>
                <td>
                  <button
                    onClick={() => {
                      playing(`${song.id}`);
                    }}
                  >
                    {song.name_song}
                  </button>
                </td>
                <td>{song.singer}</td>
                {/* <td>{song.artist}</td> */}
                <td>{song.time_up}</td>
                <td>{song.number_fav}</td>
                <td>{song.status.description}</td>

                <td>
                  <button
                    className="delete"
                    onClick={() => {
                      confirmSubmit(`${song.name_song}`, `${song.id}`);
                    }}
                  >
                    Công Khai
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    className="delete"
                    onClick={() => {
                      confirmDelete(`${song.name_song}`, `${song.id}`);
                    }}
                  >
                    Xóa bài hát
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={() => {
            previousPage();
          }}
        >
          Trước
        </button>
        <span style={{ padding: "10px" }}>
          {page + 1} / {}
        </span>
        <button
          onClick={() => {
            nextPage();
          }}
        >
          Sau
        </button>
      </div>
    </div>
  );
}
