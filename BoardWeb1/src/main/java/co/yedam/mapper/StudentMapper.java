package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.Student;

public interface StudentMapper {
	public List<Student> selectBlog();
	public int insertStudent(Student student);
	public int updateStudent(Student student);
	public int deleteStudent(Student student);
	//단건조회.
	public Student getStudent(String stdNo);
}
