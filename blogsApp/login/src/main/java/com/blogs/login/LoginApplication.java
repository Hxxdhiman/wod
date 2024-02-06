package com.blogs.login;
import com.blogs.login.filter.filter;
import com.fasterxml.jackson.core.filter.TokenFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableDiscoveryClient
public class LoginApplication {
	public static void main(String[] args) {
		SpringApplication.run(LoginApplication.class, args);
		System.out.println("Running Login/Register Microservice");
	}
//	@Bean
//	public FilterRegistrationBean getFilter(){
//		FilterRegistrationBean filterReg= new FilterRegistrationBean();
//		filterReg.setFilter(new filter());
////		filterReg.addUrlPatterns("/auth/getAll");
//		return filterReg;
//	}

}