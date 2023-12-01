import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./createEnderecoForm.module.css";

function CreateEnderecoForm({ tutorFormData, handleInputChange }) {

  return (
    <div className={`${styles.boxcadastrotutor}`}>
      <div className={styles.titulo}>Endereço</div>
      <div className="mb-3">
          <label htmlFor="rua" className="form-label">Rua</label>
          <input type="text" 
            className="form-control" 
            name="rua"
            placeholder="Ex: Avenida Bom Pastor"
            value={tutorFormData.rua}
            onChange={handleInputChange}>
          </input>
      </div>

      <div className="mb-3">
        <label htmlFor="bairro" className="form-label">Bairro</label>
        <input type="text" 
          className="form-control" 
          name="bairro" 
          placeholder="Ex: Centro"
          value={tutorFormData.bairro}
          onChange={handleInputChange}>
        </input>
      </div>

      <div className="mb-3">
        <div className="row">
            <div className="col ">
              <label htmlFor="estado" className="form-label">Número</label>
              <input type="text" 
                className="form-control" 
                name="numero"
                placeholder="Ex: 140" 
                value={tutorFormData.numero}
                onChange={handleInputChange}>
              </input>
            </div>
            <div className="col">
              <label htmlFor="cidade" className="form-label">CEP</label>
              <input type="text" 
                className="form-control" 
                name="cep"
                placeholder="Ex: 55250-000" 
                maxLength={8}
                minLength={8}
                value={tutorFormData.cep}
                onChange={handleInputChange}>
              </input>
            </div>
          </div>
      
          <div className="row">
            <div className="col ">
              <label htmlFor="municipio" className="form-label">Município</label>
              <input type="text" 
                className="form-control" 
                name="municipio"
                placeholder="Ex: Pernambuco" 
                value={tutorFormData.municipio}
                onChange={handleInputChange}>
              </input>
            </div>
            <div className="col">
              <label htmlFor="cidade" className="form-label">Cidade</label>
              <input 
                type="text" 
                className="form-control" 
                name="cidade"
                placeholder="Ex: Garanhuns" 
                value={tutorFormData.cidade}
                onChange={handleInputChange}>
              </input>
            </div>
          </div>
      </div>
    </div>
  );
}

export default CreateEnderecoForm
