package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;

public class LoginControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String id = req.getParameter("id"); //client 에게 받는 매개값
		String pw = req.getParameter("pw"); //client 에게 받는 매개값
		
		BoardService bsv = new BoardServiceImpl(); // 보드서비스 객체 생성
		
		
		if(bsv.checkMember(id, pw)) { //  checkMember함수에 clinet에게 받은 매개값 삽입
			// 로그인
			HttpSession session = req.getSession();
			session.setAttribute("logId", id);
			
			resp.sendRedirect("main.do");
		}else{
			resp.sendRedirect("loginForm.do");
		}

	}

}
