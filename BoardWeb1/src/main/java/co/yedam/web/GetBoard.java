package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class GetBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO 파라미터정보를 읽어서 게시글번호 조회
		// board.jsp 페이지에 출력.
		String bno = req.getParameter("bno"); //bno 파라미터 정보 가져오기
		String page = req.getParameter("page"); //bno 파라미터 정보 가져오기
		String sc = req.getParameter("searchCondition");
		String kw = req.getParameter("keyword");
		
		BoardService svc = new BoardServiceImpl(); // Impl 객체생성
		BoardVO brd = svc.getBoard(Integer.parseInt(bno)); // 반환되는 정보찾아 반환값 잡아주기
		
		req.setAttribute("board", brd);
		req.setAttribute("page", page);
		req.setAttribute("searchCondition", sc);
		req.setAttribute("keyword", kw);
		
		req.getRequestDispatcher("board/board.tiles") //
						.forward(req, resp); //board.jsp 로 출력
		

	}

}
