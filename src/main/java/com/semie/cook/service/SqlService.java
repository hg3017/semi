package com.semie.cook.service;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@Service
@RequiredArgsConstructor
public class SqlService {
    private final JdbcTemplate jdbcTemplate;
    private final ResourceLoader resourceLoader;

    @Transactional
    public void executeSql(String sqlType) {
        Resource resource = resourceLoader.getResource("classpath:templates/sql/" + sqlType + ".sql");
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(resource.getInputStream()))) {
            StringBuilder sql = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                sql.append(line).append("\n");
            }

            // SQL 문을 ";"로 분리
            String[] sqlStatements = sql.toString().split(";");
            for (String statement : sqlStatements) {
                String trimmedStatement = statement.trim();
                if (!trimmedStatement.isEmpty()) {
                    // SQL 문을 실행 (세미콜론 제거)
                    try {
                        jdbcTemplate.execute(trimmedStatement); // 세미콜론 없이 SQL 문을 실행
                    } catch (DataAccessException e) {
                        System.err.println("Database access error for statement: " + trimmedStatement);
                        System.err.println("Error message: " + e.getMessage());
                        e.printStackTrace();
                    }
                }
            }
        } catch (IOException e) {
            System.err.println("File reading error: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
