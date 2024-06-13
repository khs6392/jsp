<%@page import="co.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../public/header.jsp" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<h3>상세화면(board.jsp)</h3>
<%
 BoardVO board = (BoardVO) request.getAttribute("board");
%>
<form action="modifyBoard.do">
<table class="table">
 <tr>
   <th>글번호</th><td><input type="text" value="<%=board.getBoardNo() %>" name="bno"></td>
   <th>조회수</th><td></td>
 </tr>
 <tr>
 	<th>제목</th><td><input type="text" value="<%=board.getTitle() %>" name="title"></td>
 </tr>
 <tr>
   <th>내용</th>
   <td colspan="3">
     <textarea class="form-control" name="content"><%=board.getContent() %></textarea>
    </td>
 </tr>
 <tr>
  <th>작성자</th><td><c:out value="${board.writer }"/></td>
  <th>작성일자</th><td><c:out value="${board.creationDate }"/></td>
  </tr>
  <tr>
  <td colspan="4">
  <input class="btn btn-warning" type="submit" value="수정처리">
  </td>
  </tr>
</table>
</form>



<%@include file="../public/footer.jsp" %>    