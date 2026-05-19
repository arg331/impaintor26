package com.impaintor.feature.game.service;

import com.impaintor.feature.game.models.GameState;
import com.impaintor.feature.game.models.GuessResult;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class GameLogicServiceTest {

    private GameLogicService gameLogicService;
    private GameState mockState;

    @BeforeEach
    void setUp() {
        gameLogicService = new GameLogicService();
        mockState = new GameState();
        mockState.setSecretWord("word");
    }

    @Test
    void testImpostorCorrectGuess() {
        GuessResult result = gameLogicService.handleImpostorGuess(mockState, "word");
        assertTrue(result.isCorrect());
        assertTrue(result.isGameOver());
        assertEquals("IMPAINTOR", result.getWinner());
    }

    @Test
    void testImpostorWrongGuess() {
        GuessResult result = gameLogicService.handleImpostorGuess(mockState, "wrong");
        assertFalse(result.isCorrect());
        assertTrue(result.isGameOver());
        assertEquals("PAINTORS", result.getWinner());
    }
}
