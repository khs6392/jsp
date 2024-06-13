<%@page import="co.yedam.vo.Student"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>prdouct.jsp</title>
</head>
<body>
	<!-- webapp/WEB-INF/view/product.jsp -->
	<h3>Product페이지</h3>
	<%
	Student student = (Student) request.getAttribute("student");
	%>
	<table border="2">
	<tr>
	<th>학생번호</th><td><c:out value="${student.stdNo }"/></td>
	</tr>
	<tr>
	<th>학생이름</th><td><c:out value="${student.stdname }"/></td>
	</tr>
	
	</table>
	
	<a href="main.do">목록보기</a>
</body>
</html>