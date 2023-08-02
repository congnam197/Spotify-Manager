package com.example.demo.service.impl;

import com.example.demo.model.Song;
import com.example.demo.model.Status;
import com.example.demo.repository.ISongRepository;
import com.example.demo.service.ISongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongServiceImpl implements ISongService {
    @Autowired
    private ISongRepository songRepository;

    @Override
    public Page<Song> getAllSongs(Pageable pageable) {
        return songRepository.getAllSong(pageable);
    }

    @Override
    public List<Song> getAllSongs() {
        return null;
    }

    @Override
    public Song getSongById(Integer id) {
        return songRepository.findSongById(id);
    }

    @Override
    public List<Song> searchSongByName(String name) {
        return songRepository.findAllSongByName(name);
    }

    @Override
    public void createNewSong(Song song) {
        songRepository.addNewSong(song);
    }

    @Override
    public void editSong(Integer id, String name_song, String singer, String artist, String time_up, Long number_fav, Integer status) {
        songRepository.updateSongById(id, name_song, singer, artist, time_up, number_fav, status);
    }

    @Override
    public void deleteSong(Integer id) {
        songRepository.deleteSongById(id);
    }
}
