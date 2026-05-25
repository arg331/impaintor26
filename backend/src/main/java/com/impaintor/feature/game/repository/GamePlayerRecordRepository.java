package com.impaintor.feature.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.impaintor.feature.game.model.GamePlayerRecord;

@Repository
public interface GamePlayerRecordRepository extends JpaRepository<GamePlayerRecord, Long> {
}
