package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class modifyForm implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String bno=req.getParameter("bno"); // 글 번호"bno"대한 정보를 받아서 조회
		
		BoardService svc = new BoardServiceImpl();
		BoardVO board = svc.getBoard(Integer.parseInt(bno));
	
		//요정정보의 attribute(=borad)
		req.setAttribute("board", board);
		
		
		req.getRequestDispatcher("WEB-INF/view/modifyBoardForm.jsp").forward(req, resp);
	}

}
