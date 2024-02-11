package com.blogs.dashboard.service;

import com.blogs.dashboard.model.comment;
import com.blogs.dashboard.model.dashboardModel;
import com.blogs.dashboard.repository.commentRepo;
import com.blogs.dashboard.repository.dashboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
        List<dashboardModel> blogs=new ArrayList<dashboardModel>();
        List<dashboardModel> temp=repo.findAll();
        for(dashboardModel model:temp)
        {
            if(model.isApproved().equals("true"))
            {
                blogs.add(model);
            }
        }
        return blogs;
    }
    public List<dashboardModel> showAdminBlogs()
    {
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
    public String delBlogs(String blogId) {
        dashboardModel model = repo.findByVId(blogId);
        repo.delete(model);
        List<comment> coms = cRepo.findByVId(blogId);
        for (comment com : coms) {
            cRepo.delete(com);
        }
        return "Deleted";
    }
    @Override
    public String delComm(String blogId,String commId) {
        List<comment> coms=cRepo.findByVId(blogId);
        for(comment com:coms)
        {
            if(com.getCommentId().equals((commId)))
            {
                cRepo.delete(com);
                return "Deleted";
            }
        }
        return "Not found";
    }

    @Override
    public String approveBlog(String vId,String response) {
        if(response.equals("true")) {
            dashboardModel model=repo.findByVId(vId);
            model.setApproved("true");
            repo.save(model);
            return "Approved";
        }
        else if(response.equals("false")){
            dashboardModel model=repo.findByVId(vId);
            repo.delete(model);
            return "Declined";
        }
        return "Can't say";
    }

    @Override
    public List<dashboardModel> showPendingBlogs() {
        List<dashboardModel> blogs=new ArrayList<dashboardModel>();
        List<dashboardModel> temp=repo.findAll();
        for(dashboardModel model:temp)
        {
            if(model.isApproved().equals("false"))
            {
                blogs.add(model);
            }
        }
        return blogs;
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
