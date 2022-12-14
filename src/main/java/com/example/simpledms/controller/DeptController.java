package com.example.simpledms.controller;

import com.example.simpledms.model.Dept;
import com.example.simpledms.service.DeptService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

/**
 * packageName : com.example.modelexam.controller
 * fileName : DeptController
 * author : kangtaegyung
 * date : 2022/10/12
 * description : 부서 컨트롤러
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022/10/12         kangtaegyung          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api")
public class DeptController {

    @Autowired
    DeptService deptService;

    @GetMapping("/dept")
    public ResponseEntity<Object> getDeptAll(@RequestParam(required = false) String dname,
                                             @RequestParam(defaultValue = "10") int page,
                                             @RequestParam(defaultValue = "10") int size
                                             ) {

        try {

//            페이지 변수 저장
            Pageable pageable = PageRequest.of((int)page/size, size);

//            List<Dept> list = Collections.emptyList();
            Page<Dept> deptPage;

//          1) 부서명이 "" 이면 전체 검색, 아니면 부서명 검색이 됨
            deptPage = deptService.findAllByDnameContaining(dname, pageable);

//            첫페이지
            String previousUrl = (page > 0)? "http://10.0.2.2:8000/api/dept/?page="+page +"&size="+size : null;

//            int resSize = (deptPage.getTotalElements() - page < size )? (int)deptPage.getTotalElements() - page : size;
//            마지막 페이지
            String nextUrl = (page < deptPage.getTotalElements())? "http://10.0.2.2:8000/api/dept/?page="+page +"&size="+size : null;

            Map<String, Object> response = new HashMap<>();
            response.put("dept", deptPage.getContent());
            response.put("currentPage", deptPage.getNumber());
            response.put("totalItems", deptPage.getTotalElements());
            response.put("totalPages", deptPage.getTotalPages());
//            안드로이드 페이징 처리 변수
            response.put("previous", previousUrl);
            response.put("next", nextUrl);


            if (deptPage.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    @GetMapping("/dept")
//    public ResponseEntity<Object> getDeptAll(@RequestParam(required = false) String dname,
//                                             @RequestParam(defaultValue = "0") int page,
//                                             @RequestParam(defaultValue = "3") int size
//                                             ) {
//
//        try {
//
////            페이지 변수 저장
//            Pageable pageable = PageRequest.of(page, size);
//
////            List<Dept> list = Collections.emptyList();
//            Page<Dept> deptPage;
//
////          1) 부서명이 "" 이면 전체 검색, 아니면 부서명 검색이 됨
//            deptPage = deptService.findAllByDnameContaining(dname, pageable);
//
////            첫페이지
//            String previousUrl = (deptPage.getNumber() > 0)? "http://10.0.2.2:8000/api/dept/?page="+(deptPage.getNumber()-1) +"&size="+size : null;
////            마지막 페이지
//            String nextUrl = (deptPage.getNumber() < deptPage.getTotalPages())? "http://10.0.2.2:8000/api/dept/?page="+(deptPage.getNumber()+1) +"&size="+size : null;
//
//            Map<String, Object> response = new HashMap<>();
//            response.put("dept", deptPage.getContent());
//            response.put("currentPage", deptPage.getNumber());
//            response.put("totalItems", deptPage.getTotalElements());
//            response.put("totalPages", deptPage.getTotalPages());
////            안드로이드 페이징 처리 변수
//            response.put("previous", previousUrl);
//            response.put("next", nextUrl);
//
//
//            if (deptPage.isEmpty() == false) {
////                성공
//                return new ResponseEntity<>(response, HttpStatus.OK);
//            } else {
////                데이터 없음
//                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//            }
//        } catch (Exception e) {
////            서버 에러
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

    @GetMapping("/dept/{dno}")
    public ResponseEntity<Object> getDeptId(@PathVariable int dno) {

        try {
            Optional<Dept> optionalDept = deptService.findById(dno);

            if (optionalDept.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalDept.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/dept")
    public ResponseEntity<Object> createDept(@RequestBody Dept dept) {

        try {
            Dept dept2 = deptService.save(dept);

            return new ResponseEntity<>(dept2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/dept/{dno}")
    public ResponseEntity<Object> updateDept(@PathVariable int dno, @RequestBody Dept dept) {

        try {
            Dept dept2 = deptService.save(dept);

            return new ResponseEntity<>(dept2, HttpStatus.OK);

        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/dept/deletion/{dno}")
    public ResponseEntity<Object> deleteDept(@PathVariable int dno) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = deptService.removeById(dno);

            if (bSuccess == true) {
//                delete 문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.OK);
            }
//            delete 실패했을 경우( 0건 삭제가 될경우 )
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
//            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/dept/all")
    public ResponseEntity<Object> deleteAll() {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            deptService.removeAll();

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

















