package com.blogs.dashboard.service;

import com.blogs.dashboard.model.comment;
import com.blogs.dashboard.model.dashboardModel;
import com.blogs.dashboard.repository.commentRepo;
import com.blogs.dashboard.repository.dashboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class dashboardService implements dashboardServiceInterface {
    @Autowired
    dashboardRepository repo;
    public String fileName;
    @Autowired
    commentRepo cRepo;
    @Override
    public dashboardModel addBlog(dashboardModel model) {
        List<String> temp=new ArrayList<String>();
        model.setUserName(temp);
        return repo.save(model);
    }

    @Override
    public List<dashboardModel> showBlogs() {
        return repo.findAll();
    }

    @Override
    public comment addComm(comment com)
    {
        cRepo.save(com);
        return com;
    }

    @Override
    public List<comment> showCom(String vId) {
        List<comment> coms =cRepo.findByVId(vId);
        return coms;
    }

    @Override
    public List<dashboardModel> findFav(String userName) {
        List<dashboardModel> model=repo.findAll();
        List<dashboardModel> favourite=new ArrayList<dashboardModel>();
        for(dashboardModel mod:model)
        {
                List<String> temp=new ArrayList<String>();
                if(mod.getUserName()==null)
                {
                    temp.add("noUserd2e12");
                    mod.setUserName(temp);
                    repo.save(mod);
                }
                List<String> favs=mod.getUserName();
                for(String com:favs)
                {
                    if(com.equals(userName))
                    {
                        favourite.add(mod);
                        System.out.println(mod);
                    }
                }
        }
        return favourite;
    }

    @Override
    public dashboardModel setFav(String userN, String vId) {
        boolean stuck=false;
        dashboardModel model=repo.findByVId(vId);
        List<String> temp=new ArrayList<String>();
        if(model.getUserName()==null)
        {
            temp.add("noUserd2e12");
            model.setUserName(temp);
        }
        List<String> userName=model.getUserName();
        for(String com:userName)
        {
            if(com.equals(userN))
            {
                stuck=true;
            }
        }
        if(!stuck)
        {
            userName.add(userN);
        }
        repo.save(model);
        return model;
    }

    @Override
    public dashboardModel findByV(String vId) {
        return repo.findByVId(vId);
    }

    @Override
    public dashboardModel removeFav(String userName, String vId) {
        dashboardModel model=repo.findByVId(vId);
        List<String> temp=new ArrayList<String>();
        if(model.getUserName()==null)
        {
            temp.add("noUserd2e12");
            model.setUserName(temp);
        }
        List<String> userN=model.getUserName();
        userN.remove(userName);
        repo.save(model);
        return model;
    }
}
