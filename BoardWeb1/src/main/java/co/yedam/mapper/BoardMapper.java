package co.yedam.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.yedam.common.SearchVO;
import co.yedam.vo.BoardVO;
import co.yedam.vo.MemberVO;

/*
 * 목록, 등록, 수정, 삭제, 단건조회
 */
public interface BoardMapper {
	List<BoardVO> boardList();   //목록가져오기
	List<BoardVO> boardListpaging(SearchVO search); // 페이지별로 5건씩
	int getTotalCnt(SearchVO search); // 페이징 계산용도
	int insertBoard(BoardVO bvo);
	int updateBoard(BoardVO bvo);
	int deleteBoard(int bno);
	BoardVO selectBoard(int bno); // 단건조회.
	
	MemberVO selectMember(@Param("id") String id, @Param("pw") String pw);//회원 id, 회원 비번
	
	
	List<MemberVO> memberList();
	int insertMemberAjax(MemberVO mvo);
	int selectMemberAjax(String id);
	int removeMemberAjax(String id);
	int modMemberAjax(MemberVO mvo);
}
