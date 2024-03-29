package com.blogs.dashboard.controller;

import com.blogs.dashboard.model.comment;
import com.blogs.dashboard.model.dashboardModel;
import com.blogs.dashboard.service.dashboardService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin("*")
public class dashboardController {
    @Autowired
    dashboardService service;

    @GetMapping("/showBlogs")
    public ResponseEntity<?> shoB() {
        return new ResponseEntity<>(service.showBlogs(), HttpStatus.OK);
    }

    @PostMapping("/addComment")
    public ResponseEntity<?> addC(@RequestBody comment com) {
        System.out.println(com);
        return new ResponseEntity<>(service.addComm(com), HttpStatus.OK);
    }

    @GetMapping("getComments/{vId}")
    public ResponseEntity<?> showC(@PathVariable String vId) {
        return new ResponseEntity<>(service.showCom(vId), HttpStatus.OK);
    }

    @PostMapping("/putBlogs")
    public ResponseEntity<?> putBlog(@RequestBody dashboardModel blogData) {
        try {
            return new ResponseEntity<>(service.addBlog(blogData), HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This is getting into exception");
        }

    }
    @GetMapping("/adminBlogs")
    public ResponseEntity<?> showAdmin()
    {
        return new ResponseEntity<>(service.showAdminBlogs(),HttpStatus.OK);
    }
    @GetMapping("/showPending")
    public ResponseEntity<?> showPending()
    {
        return new ResponseEntity<>(service.showPendingBlogs(),HttpStatus.OK);
    }
    @GetMapping("/accept/{vId}/{response}")
    public ResponseEntity<?> addBlog(@PathVariable String vId,@PathVariable String response)
    {
        try {
            return new ResponseEntity<>(service.approveBlog(vId,response), HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This is getting into exception");
        }
    }
    @DeleteMapping("/deleteBlogs/{blogId}")
    public ResponseEntity<?> delBlog(@PathVariable String blogId)
    {
        try{
            return new ResponseEntity<>(service.delBlogs(blogId),HttpStatus.CREATED);
        }
        catch(Exception e)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Got exception");
        }
    }
    @DeleteMapping("/deleteComment/{blogId}/{commId}")
    public ResponseEntity<?> delCom(@PathVariable String blogId,@PathVariable String commId)
    {
        try{
            return new ResponseEntity<>(service.delComm(blogId,commId),HttpStatus.CREATED);
        }
        catch(Exception e)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Got exception");
        }
    }
    @GetMapping("findVid/{vId}")
    public ResponseEntity<?> showBlog(@PathVariable String vId)
    {
        return new ResponseEntity<>(service.findByV(vId),HttpStatus.OK);
    }
    @GetMapping("/showFav/{userName}")
    public ResponseEntity<?> showFav(@PathVariable String userName)
    {
        try{
            return new ResponseEntity<>(service.findFav(userName),HttpStatus.OK);
        }
        catch (Exception e)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Entered exception");
        }
    }
    @GetMapping("setFav/{userName}/{vId}")
    public ResponseEntity<?> setFav(@PathVariable String userName,@PathVariable String vId)
    {
        try{
            return new ResponseEntity<>(service.setFav(userName,vId),HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>("Entered exception",HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("removeFav/{userName}/{vId}")
    public ResponseEntity<?> remoFav(@PathVariable String userName,@PathVariable String vId)
    {
        try{
            return new ResponseEntity<>(service.removeFav(userName,vId),HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>("Entered exception",HttpStatus.BAD_REQUEST);
        }
    }
}
