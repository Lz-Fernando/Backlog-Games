package com.luiz.backlog.repository;

import com.luiz.backlog.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // Additional query methods can be defined here if needed
}