package com.example.demo.service.impl;

import com.example.demo.model.Status;
import com.example.demo.repository.IStatusRepository;
import com.example.demo.service.IStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StatusServiceImpl implements IStatusService {
    @Autowired
    private IStatusRepository statusRepository;
    @Override
    public List<Status> getAllStatus() {
        return statusRepository.findAllStatus();
    }

    @Override
    public Status findStatusById(Integer id) {
        return statusRepository.findStatusById(id);
    }
}
