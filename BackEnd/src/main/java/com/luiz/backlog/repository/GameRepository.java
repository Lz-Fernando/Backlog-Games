package com.luiz.backlog.repository;

import com.luiz.backlog.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
    // Additional query methods can be defined here if needed

}
