package com.blogs.dashboard.service;

import com.blogs.dashboard.model.comment;
import com.blogs.dashboard.model.dashboardModel;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
@Service
public interface dashboardServiceInterface {
    public dashboardModel addBlog(dashboardModel model);
    public List<dashboardModel> showBlogs();
    public comment addComm(comment com);

    public List<comment> showCom(String vId);

    public List<dashboardModel> findFav(String userName);

    public dashboardModel setFav(String userName, String vId);

    public dashboardModel findByV(String vId);

    public dashboardModel removeFav(String userName, String vId);
}
