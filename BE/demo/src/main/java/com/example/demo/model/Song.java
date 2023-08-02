package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "songs")
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_song",nullable = false)
    private  Integer id;
    private String name_song;
    private  String singer;
    private String artist;
    private String time_up;
    private Long number_fav;
    @ManyToOne
    @JoinColumn(columnDefinition = "status_id",nullable = false,referencedColumnName = "status_id")
    private  Status status;

    public Song(Integer id, String name_song, String singer, String artist, String time_up, Long number_fav, Status status) {
        this.id = id;
        this.name_song = name_song;
        this.singer = singer;
        this.artist = artist;
        this.time_up = time_up;
        this.number_fav = number_fav;
        this.status = status;
    }

    public Song() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName_song() {
        return name_song;
    }

    public void setName_song(String name_song) {
        this.name_song = name_song;
    }

    public String getSinger() {
        return singer;
    }

    public void setSinger(String singer) {
        this.singer = singer;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getTime_up() {
        return time_up;
    }

    public void setTime_up(String time) {
        this.time_up = time;
    }

    public Long getNumber_fav() {
        return number_fav;
    }

    public void setNumber_fav(Long number_fav) {
        this.number_fav = number_fav;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
