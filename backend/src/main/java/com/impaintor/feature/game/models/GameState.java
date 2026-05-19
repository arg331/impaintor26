package com.impaintor.feature.game.models;

import java.util.List;
import java.util.Map;

import lombok.Data;

@Data
public class GameState {
    private String roomCode;
    private int currentRound;
    private long impostorId;
    private String secretWord;
    private List<Long> alivePlayerId;
    private Map<String, Long> currentVotes;
}
