package co.yedam.vo;

import java.sql.Date;

import lombok.Data;

@Data
public class Student {
	
	private String stdNo;
	private String stdName;
	private String phone;
	private String bldType;
	private Date createDate;

}