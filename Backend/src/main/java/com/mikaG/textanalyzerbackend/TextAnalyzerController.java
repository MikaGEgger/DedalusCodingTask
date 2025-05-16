package com.mikaG.textanalyzerbackend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/analyzer")
@CrossOrigin(origins = "http://localhost:4200")
public class TextAnalyzerController {

   

    @PostMapping
    public ResponseEntity<Map<String, Object>> analyzeText(@RequestBody AnalyzeRequest request) {

            Map<String, Object> response = TextAnalyzer.AnalyzeText(request);
            return ResponseEntity.ok(response);
    }
}