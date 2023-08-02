package com.example.demo.controller;

import com.example.demo.model.Status;
import com.example.demo.service.IStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/status")
public class StatusController {
    @Autowired
    private IStatusService statusService;

    @GetMapping("/")
    public ResponseEntity<List<Status>> getAllStatus() {
        List<Status> statusList = statusService.getAllStatus();
        return new ResponseEntity<>(statusList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Status> getStatusById(@PathVariable Integer id) {
        Status status = statusService.findStatusById(id);
        if (status == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(status, HttpStatus.OK);
    }
}
