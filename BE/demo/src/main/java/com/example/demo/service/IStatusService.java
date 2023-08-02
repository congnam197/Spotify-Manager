package com.example.demo.service;

import com.example.demo.model.Status;
import org.springframework.stereotype.Service;

import java.util.List;

public interface IStatusService {
    List<Status> getAllStatus();
    Status findStatusById(Integer id);

}
