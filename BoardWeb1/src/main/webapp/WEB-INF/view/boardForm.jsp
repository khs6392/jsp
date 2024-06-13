<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../public/header.jsp" %>
<h3>게시글등록화면(boardForm)</h3>
<% String message = (String) request.getAttribute("message"); 
   String loginId = (String) session.getAttribute("logId");

%>

<form action="addForm.do">
<table class="table">
 <tr>
  <th>제목</th><td><input type="text" name="stitle" class="underlined"></td>
 </tr>
  <tr>
  <th>내용</th><td><textarea rows="10" cols="50"></textarea></td>
 </tr>
  <tr>
  <th>작성자</th><td><%= logId %></td>
 </tr>
  <tr>
  <td colspan="2" align="left">
   <input type="submit" class="btn btn-primary" value="저장">
  </td>
 </tr>
</table>
<% if (message != null) { %>
    <div class="error"><%= message %></div>
<% } %>
</form>
<%@include file="../public/footer.jsp" %>
