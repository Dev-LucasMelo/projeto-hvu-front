import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./createTutorForm.module.css";

function CreateTutorForm({ tutorFormData, handleInputChange, errors }) {
    return (
        <div className={`${styles.boxcadastrotutor} ${styles.container}`}>
            <div className={styles.cadastrotutor}>
                <div className={styles.titulo}>Informações do Tutor</div>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome Completo</label>
                    <input
                        type="text"
                        className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
                        name="nome"
                        placeholder="Insira o nome completo"
                        value={tutorFormData.nome}
                        onChange={handleInputChange}
                    />
                    {errors.nome && <div className="invalid-feedback">{errors.nome}</div>}
                </div>
                <div className={styles.espacodosforms}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                name="email"
                                placeholder="Insira o seu e-mail"
                                value={tutorFormData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="col">
                            <label htmlFor="senha" className="form-label">Senha</label>
                            <input
                                type="password"
                                className={`form-control ${errors.senha ? 'is-invalid' : ''}`}
                                name="senha"
                                placeholder="Insira uma senha"
                                value={tutorFormData.senha}
                                onChange={handleInputChange}
                            />
                            {errors.senha && <div className="invalid-feedback">{errors.senha}</div>}
                        </div>
                    </div>
                </div>
                <div className={styles.espacodosforms}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="cpf" className="form-label">CPF</label>
                            <input
                                type="text"
                                className={`form-control ${errors.cpf ? 'is-invalid' : ''}`}
                                placeholder="Ex: 123.456.789-00"
                                name="cpf"
                                maxLength={11}
                                minLength={11}
                                value={tutorFormData.cpf}
                                onChange={handleInputChange}
                            />
                            {errors.cpf && <div className="invalid-feedback">{errors.cpf}</div>}
                        </div>
                        <div className="col">
                            <label htmlFor="rg" className="form-label">RG</label>
                            <input
                                type="text"
                                className={`form-control ${errors.rg ? 'is-invalid' : ''}`}
                                name="rg"
                                placeholder="Insira o RG"
                                maxLength={7}
                                minLength={7}
                                value={tutorFormData.rg}
                                onChange={handleInputChange}
                            />
                            {errors.rg && <div className="invalid-feedback">{errors.rg}</div>}
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="telefone" className="form-label">Telefone para contato</label>
                    <input
                        type="tel"
                        className={`form-control ${errors.telefone ? 'is-invalid' : ''}`}
                        name="telefone"
                        placeholder="(xx) xxxxx-xxxx"
                        maxLength={11}
                        minLength={11}
                        value={tutorFormData.telefone}
                        onChange={handleInputChange}
                    />
                    {errors.telefone && <div className="invalid-feedback">{errors.telefone}</div>}
                </div>
            </div>
        </div>
    );
}

export default CreateTutorForm;
