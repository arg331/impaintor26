package com.impaintor.feature.game.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GuessResult {
    private boolean isCorrect;
    private boolean isGameOver;
    private String winner;
}
