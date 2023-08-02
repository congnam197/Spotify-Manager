package com.example.demo.repository;

import com.example.demo.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IStatusRepository extends JpaRepository<Status,Integer> {
    @Query (value = "select * from status",nativeQuery = true)
    List<Status> findAllStatus();

    @Query(value = "select * from  status where status_id=:id",nativeQuery = true)
    Status findStatusById(@Param("id") Integer id);
}
