import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { createTutor } from "../../../services/tutorService";
import CreateEnderecoForm from "./createEnderecoForm";
import CreateTutorForm from "./createTutorForm";
import styles from "./index.module.css";

function CreateTutorEnderecoForm() {
    const router = useRouter();

    const [errors, setErrors] = useState({});

    const [tutorFormData, setTutorFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        cpf: "",
        rg: "",
        telefone: "",
        endereco: {
            cep: "",
            rua: "",
            municipio: "",
            cidade: "",
            numero: "",
            bairro: ""
        }
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setTutorFormData({ ...tutorFormData, [name]: value });
    }

    const validateForm = () => {
        const newErrors = {};

        // Validação para o campo "nome"
        if (!tutorFormData.nome) {
            newErrors.nome = "Nome é obrigatório";
        }

        // Validação para o campo "email"
        if (!tutorFormData.email) {
            newErrors.email = "E-mail é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(tutorFormData.email)) {
            newErrors.email = "E-mail inválido";
        }

        // Validação para o campo "senha"
        if (!tutorFormData.senha) {
            newErrors.senha = "Senha é obrigatória";
        }

        // Validação para o campo "cpf"
        if (!tutorFormData.cpf) {
            newErrors.cpf = "CPF é obrigatório";
        } else if (!/^\d{11}$/.test(tutorFormData.cpf)) {
            newErrors.cpf = "CPF inválido";
        }

        // Validação para o campo "rg"
        if (!tutorFormData.rg) {
            newErrors.rg = "RG é obrigatório";
        } else if (!/^\d{7}$/.test(tutorFormData.rg)) {
            newErrors.rg = "RG inválido";
        }

        // Validação para o campo "telefone"
        if (!tutorFormData.telefone) {
            newErrors.telefone = "Telefone é obrigatório";
        } else if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(tutorFormData.telefone)) {
            newErrors.telefone = "Telefone inválido";
        }

        // Validação para o campo "endereco"
        if (!tutorFormData.endereco) {
            newErrors.endereco = {};
        }

        // Validação para os campos de endereço
        const enderecoFields = ["rua", "bairro", "numero", "municipio", "cidade"];
        enderecoFields.forEach((field) => {
            if (!tutorFormData.endereco[field]) {
                newErrors.endereco[field] = `O campo ${field} é obrigatório`;
            }
        });

        // Validação para o campo "rg"
        if (!tutorFormData.endereco.cep) {
            newErrors.rg = "CEP é obrigatório";
        } else if (!/^\d{8}$/.test(tutorFormData.endereco.cep)) {
            newErrors.endereco.cep = "CEP inválido";
        }

        // Atualiza o estado de erros
        setErrors(newErrors);

        // Retorna verdadeiro se não houver erros
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Verifica se o formulário é válido antes de prosseguir
        if (validateForm()) {
            try {
                const response = await createTutor(tutorFormData);
                console.log(response);
                //router.push(`/cadastroendereco/${tutorId}`);
            } catch (error) {
                console.error("Erro ao cadastrar tutor:", error);
            }
        } else {
            console.log("Formulário inválido. Corrija os erros.");
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={styles.box}>
                    <div>
                        <CreateTutorForm
                            tutorFormData={tutorFormData}
                            handleInputChange={handleInputChange}
                            errors={errors}
                        />
                    </div>
                    <div>
                        <CreateEnderecoForm
                            tutorFormData={tutorFormData}
                            handleInputChange={handleInputChange}
                            errors={errors.endereco}
                        />
                    </div>
                    <div>
                        <button className={styles.button}>Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateTutorEnderecoForm;
