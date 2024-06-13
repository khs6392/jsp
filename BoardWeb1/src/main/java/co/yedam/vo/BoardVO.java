package co.yedam.vo;

import java.util.Date;

import lombok.Data;
@Data // getter, setter ,toString 구현
public class BoardVO {
	private int  boardNo;
	private String  title;
	private String  content;
	private String  writer;
	private int  clickCnt;
	private Date creationDate;
	
}
