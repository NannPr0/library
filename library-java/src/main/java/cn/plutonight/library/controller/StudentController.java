package cn.plutonight.library.controller;


import cn.plutonight.library.config.MyUserDetails;
import cn.plutonight.library.dto.StudentDto;
import cn.plutonight.library.service.IStudentService;
import cn.plutonight.library.utils.ResponseGenerator;
import cn.plutonight.library.utils.ResponseMsg;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 * 学生信息 前端控制器
 * </p>
 *
 * @author LPH
 * @since 2020-10-18
 */
@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    IStudentService studentService;

    @ApiOperation(value = "info", notes = "用户信息接口")
    @GetMapping("/info")
    public ResponseMsg info () {

        MyUserDetails userDetails = (MyUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        StudentDto studentDto = studentService.getStudentInfo(userDetails.getId());
        if (studentDto == null) {
            return ResponseGenerator.getFailureResponse();
        } else {
            return ResponseGenerator.getSuccessResponse(studentDto);
        }

    }

}
