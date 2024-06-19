package co.yedam.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.MemberVO;

public class MemberAjax implements Control {

    @Override
    public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/json;charset=utf-8");
        // json 문자열을 반환.
        // {"name":"홍길동","age":"phone":"010-1234-2345"}
        BoardService svc = new BoardServiceImpl();
        List<MemberVO> list = svc.memberList();
        StringBuilder json = new StringBuilder("[");
        for (int i = 0; i < list.size(); i++) {
            json.append("{\"userId\":\"").append(list.get(i).getUserId()) //
                .append("\",\"userPw\":\"").append(list.get(i).getUserPw()) //
                .append("\",\"userName\":\"").append(list.get(i).getUserName()) //
                .append("\",\"responsibility\":\"").append(list.get(i).getResponsibility()) //
                .append("\"}");
            if (i != list.size() - 1) {
                json.append(",");
            }
        }
        json.append("]");
        resp.getWriter().print(json.toString());
    }
}
