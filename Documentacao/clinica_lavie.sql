-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema clinica_lavie
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema clinica_lavie
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `clinica_lavie` DEFAULT CHARACTER SET utf8 ;
USE `clinica_lavie` ;

-- -----------------------------------------------------
-- Table `clinica_lavie`.`psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica_lavie`.`psicologos` (
  `id_psicologo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(245) NOT NULL,
  `apresentacao` TEXT NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  PRIMARY KEY (`id_psicologo`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clinica_lavie`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica_lavie`.`pacientes` (
  `id_paciente` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `idade` DATE NOT NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  PRIMARY KEY (`id_paciente`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clinica_lavie`.`atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica_lavie`.`atendimentos` (
  `id_atendimento` INT NOT NULL AUTO_INCREMENT,
  `data_atendimento` DATE NULL,
  `observacao` TEXT NULL,
  `id_psicologo` INT NOT NULL,
  `id_paciente` INT NOT NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  PRIMARY KEY (`id_atendimento`),
  INDEX `fk_atendimentos_psicologos_idx` (`id_psicologo` ASC) VISIBLE,
  INDEX `fk_atendimentos_pacientes1_idx` (`id_paciente` ASC) VISIBLE,
  CONSTRAINT `fk_atendimentos_psicologos`
    FOREIGN KEY (`id_psicologo`)
    REFERENCES `clinica_lavie`.`psicologos` (`id_psicologo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_atendimentos_pacientes1`
    FOREIGN KEY (`id_paciente`)
    REFERENCES `clinica_lavie`.`pacientes` (`id_paciente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
