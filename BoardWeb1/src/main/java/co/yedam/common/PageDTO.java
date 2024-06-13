package co.yedam.common;

import lombok.Data;

@Data
public class PageDTO {
	private int startPage, endPage; // 맨 첫페이지 , 맨 마지막 페이지
	private boolean prev, next; // 이전 10개 페이지 , 이후 10개 페이지
	private int page;
	
	//생성자
	public PageDTO(int page, int totalCnt) {
		this.page = page; // 현 페이지 4page 보여지는 페이지 1page 마지막페이지 10page  
		this.endPage = (int)(Math.ceil(page/10.0) * 10); //endPage 계산 : 현재페이지에 보여지는 마지막페이지 계산
		this.startPage = this.endPage - 9; // startPage : 현재페이지 블록의 첫번째 페이지 번호 계산
		
		int realEnd =(int)(Math.ceil(totalCnt/5.0)); // 전체 페이지수 계산
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage;
		
		this.prev = this.startPage > 1;
		this.next = this.endPage == realEnd ? false : true;
	}
}
