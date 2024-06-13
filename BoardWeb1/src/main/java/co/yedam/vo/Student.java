package co.yedam.vo;


import lombok.Data;

@Data
public class Student {
	private String stdNo;  //오라클에서는 대소문자 구문 안함
	private String stdName;
	private String phone;
	private String bldType;
	private String createDate;
	
}
