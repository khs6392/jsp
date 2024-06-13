package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.yedam.common.DataSource;
import co.yedam.mapper.BoardMapper;
import co.yedam.vo.BoardVO;

public class BoardServiceImpl implements BoardService {
	SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
	SqlSession sqlSession = sqlSessionFactory.openSession(true);

	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class); // <-- interface - 구현객체.
	@Override
	public List<BoardVO> boardList(int page) {
		// TODO Auto-generated method stub
		return mapper.boardListpaging(page);
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
	public int boardTotal() {
		// TODO Auto-generated method stub
		return mapper.getTotalCnt();
	}
	
	@Override
	public boolean checkMember(String id, String pw) {
		// TODO Auto-generated method stub
		return mapper.selectMember(id, pw) == 1;
	}

}
