package com.mikaG.textanalyzerbackend;

public  class AnalyzeRequest {
    private String text;
    private boolean vowels;


    public String getText() { return text; }
    public void setText(String text) { this.text = text; }

    public boolean checkVowels() { return vowels; }
    public void setVowels(boolean vowels) { this.vowels = vowels; }

}