package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.yedam.common.DataSource;
import co.yedam.common.SearchVO;
import co.yedam.mapper.BoardMapper;
import co.yedam.vo.BoardVO;
import co.yedam.vo.MemberVO;

public class BoardServiceImpl implements BoardService {
	SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
	SqlSession sqlSession = sqlSessionFactory.openSession(true);

	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class); // <-- interface - 구현객체.
	@Override
	public List<BoardVO> boardList(SearchVO search) {
		// TODO Auto-generated method stub
		return mapper.boardListpaging(search);
	}

	@Override
	public BoardVO getBoard(int bno) {
		// TODO Auto-generated method stub
		return mapper.selectBoard(bno);
	}

	@Override
	public boolean addBoard(BoardVO bvo) {
		// TODO Auto-generated method stub
		return mapper.insertBoard(bvo) == 1;
	}

	@Override
	public boolean editBoard(BoardVO bvo) {
		// TODO Auto-generated method stub
		return mapper.updateBoard(bvo) == 1; 
	}

	@Override
	public boolean removeBoard(int bno) {
		// TODO Auto-generated method stub
		return mapper.deleteBoard(bno) == 1;
	}
	
	@Override
	public int boardTotal(SearchVO search) {
		// TODO Auto-generated method stub
		return mapper.getTotalCnt(search);
	}
	
	@Override
	public MemberVO checkMember(String id, String pw) {
		// TODO Auto-generated method stub
		return mapper.selectMember(id, pw);
	}

}
