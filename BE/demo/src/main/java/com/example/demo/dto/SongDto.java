package com.example.demo.dto;

import com.example.demo.model.Status;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class SongDto {
    private  Integer id;
    @NotBlank(message = "Không được để trống")
    @NotEmpty
    @Size()
    private String name_song;
    @NotBlank(message = "Không được để trống")
    @NotEmpty
    @Size(max= 30,message ="Không quá 30 kí tự")
    private  String singer;
    @NotBlank(message = "Không được để trống")
    @NotEmpty
    @Size(max = 30,message ="Không quá 30 kí tự" )
    private String artist;
    @NotBlank(message = "Không được để trống")
    @NotEmpty
    private String time;
    private Long number_fav;
    private Status status;

    public SongDto(Integer id, String name_song, String singer, String artist, String time, Long number_fav, Status status) {
        this.id = id;
        this.name_song = name_song;
        this.singer = singer;
        this.artist = artist;
        this.time = time;
        this.number_fav = number_fav;
        this.status = status;
    }

    public SongDto() {
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

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
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
