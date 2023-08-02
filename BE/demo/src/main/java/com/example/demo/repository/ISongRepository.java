package com.example.demo.repository;

import com.example.demo.model.Song;
import com.example.demo.model.Status;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
@Transactional
@Repository
public interface ISongRepository extends JpaRepository<Song, Integer> {
    @Query(value = "select * from songs ", nativeQuery = true)
    Page<Song> getAllSong(Pageable pageable);

    @Query(value = "select * from songs where id_song =:id", nativeQuery = true)
    Song findSongById(@Param("id") Integer id);

    @Query(value = "select * from  songs where  name_song like concat('%',:name,'%')", nativeQuery = true)
    List<Song> findAllSongByName(@Param("name") String name);

    @Modifying
    @Query(value = "delete from songs e where e.id_song = :id", nativeQuery = true)
    void deleteSongById(@Param("id") Integer id);

    @Modifying
    @Query(nativeQuery = true, value = "insert into songs (name_song, singer, artist, time_up, number_fav, status_status_id) " +
            "values (:#{#song.name_song},:#{#song.singer},:#{#song.artist},:#{#song.time_up},:#{#song.number_fav},:#{#song.status.id});")
    void addNewSong(@Param("song") Song song);

    @Modifying
    @Query(value = "update songs e set e.name_song = :name,e.singer=:singer,e.artist=:artist,e.time_up=:time_up,e.number_fav=:number_fav,e.status_status_id=:status" +
            " where e.id_song = :id",nativeQuery = true)
    void updateSongById(@Param("id") Integer id,@Param("name") String name, @Param("singer") String singer, @Param("artist") String artist,
                      @Param("time_up") String time,
                      @Param("number_fav") Long number_fav, @Param("status")Integer status );

}
