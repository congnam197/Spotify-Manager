package com.example.demo.service;

import com.example.demo.model.Song;
import com.example.demo.model.Status;
import com.example.demo.repository.ISongRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ISongService {
    Page<Song> getAllSongs(Pageable pageable);

    List<Song> getAllSongs();

    Song getSongById(Integer id);

    List<Song> searchSongByName(String name);

    void createNewSong(Song song);

    void editSong(Integer id, String name_song, String singer, String artist, String time_up, Long number_fav, Integer status);

    void deleteSong(Integer id);
}
