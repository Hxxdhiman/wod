package com.blogs.dashboard.repository;

import com.blogs.dashboard.model.comment;
import com.blogs.dashboard.model.dashboardModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface dashboardRepository extends MongoRepository<dashboardModel,String> {
    @Query("{'id':?0}")
    dashboardModel findByVId(String id);
}
