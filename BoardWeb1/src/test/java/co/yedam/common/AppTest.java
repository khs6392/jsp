package co.yedam.common;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.yedam.mapper.BoardMapper;

public class AppTest {
	public static void main(String[] args) {
		SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		BoardMapper mapper = sqlSession.getMapper(BoardMapper.class); 
		
		SearchVO search = new SearchVO(1, "T", "javascript");
		
		mapper.boardListpaging(search).forEach(bvo -> System.out.println(bvo));
		
		
//		BoardService svc = new BoardServiceImpl();
		
//		System.out.println(svc.getBoard(100));
		
//		SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
//		SqlSession sqlSession = sqlSessionFactory.openSession();
//		
//		//interface - 구현객체.
//		BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
//		
//		List<BoardVO> list = mapper.boardListpaging(3);
//		for(BoardVO bvo : list) {
//			System.out.println(bvo.toString());
//		}
		
//		BoardVO bvo = new BoardVO();
//		bvo.setBoardNo(4);
//		bvo.setTitle("어렵다어려워");
//		bvo.setContent("개발자하기..");
//		bvo.setWriter("이상현");
//		bvo.setClickCnt(0);
//		Student std = new Student();
//		std.setStdNo("S0017");
//		std.setStdName("김영식");		
//		std.setPhone("010-2345-5064");
//		std.setBldType("O");
//		
//		sqlSession.insert("co.yedam.mapper.StudentMapper.insertStudent", std);
//		sqlSession.commit();
//		
//		
//		std.setPhone("010-4444-4444");
//		std.setStdNo("S0015");
//		sqlSession.update("co.yedam.mapper.StudentMapper.updateStudent");
//		mapper.deleteStudent(std);
//		sqlSession.commit();
//		
//		
//		List<Student> list//
//		 		//= sqlSession.selectList("co.yedam.mapper.StudentMapper.selectBlog");
//				= mapper.selectBlog();
//		for(Student std1 : list) {
//			System.out.println(std1.toString());
//		}
	}
}
