<%@page import="co.yedam.common.PageDTO"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="co.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<jsp:include page="../public/header.jsp" />
<%
  String paging = (String)request.getAttribute("page"); // Attribute 값 읽어오기
  BoardVO board = (BoardVO) request.getAttribute("board");
  SimpleDateFormat sdf = new SimpleDateFormat("yyyy년 MM월 dd일 EEEE hh시 mm분 ss초");
  String yyyymmdd = sdf.format(board.getCreationDate());
  //로그인 아이디
  String loginId = (String)session.getAttribute("logId");
%>
<p>------board.jsp-------</p>
<c:set var="name" value="hong"></c:set>  <!--  변수값을 넣어주는 명령어 c:set -->
<c:forEach var="i" begin="1" end="5" step="1">
<p>${i}</p>
</c:forEach>
<p>${board}</p>
<form name="myFrm" action="deleteForm.do">
  <input type="hidden" value="${board.boardNo}" name="bno">
<table class="table table-sm">
  <tr>
    <th style="width:100px">글번호</th>
    <td><c:out value="${board.boardNo }"/></td>
    <th style="width:150px">조회수</th>
    <td style="width:20px"><c:out value="${board.clickCnt }"/></td>
  </tr>
    <tr>
    <th>제목</th>
    <td colspan="3" class="underlined"><c:out value="${board.title }"/></td>
    </tr>
    <tr>
    <th>내용</th>
    <td colspan="4" ><textarea rows="10" cols="50"><c:out value="${board.content }"/></textarea></td>
    </tr>
    <tr>
    <th>작성자</th>
    <td colspan="5"><c:out value="${board.writer }"/></td>
    </tr>
    <tr>
    <th>작성일시</th>
    <td colspan="6"><fmt:formatDate pattern="yyyy-MM-dd EE HH:mm:ss"  value="${board.creationDate }"/></td>
    </tr>
		<tr>
			<td colspan="3" align="center">
			
				<c:choose>
					<c:when test="${!empty logId && logId == board.writer }">
						<button type="button" class="btn btn-primary" id="modBtn">수정화면으로 이동</button>
						<button type="submit" class="btn btn-danger">삭제화면으로 이동</button>
					</c:when>
					<c:otherwise>
						<button type="button" disabled class="btn btn-primary" id="modBtn">수정화면으로 이동</button>
						<button type="submit" disabled class="btn btn-danger">삭제화면으로 이동</button>
					
					</c:otherwise>
				</c:choose>
		
			</td>
		</tr>
	</table>

 </form>
 
 <script>
console.log(document.querySelector('#modBtn'))
	document.querySelector('#modBtn').addEventListener('click',
			function(e) {
				//삭제화면 이동일 경우에는 removeForm.do
				// 수정화면이동으로 처리 할 경우에는 action="modifyForm.do"
				document.forms.myFrm.action = "modifyForm.do";
				document.forms.myFrm.submit();
			});
	
</script>
  <a href="boardList.do?page=${page }" type="button" class="btn btn-primary">목록으로 이동하기</a>
  

<jsp:include page="../public/footer.jsp" />