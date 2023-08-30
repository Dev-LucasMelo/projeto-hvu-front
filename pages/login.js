import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';
import Header from '../src/app/header';
import Text from '../src/app/texto_login_page';
import Footer from "../src/app/components/Footer";
import styles from "../src/app/components/login.module.css"
import {EntrarGreenButton} from '../src/app/green_button'

function pageLogin() {
    return (
        <>

        <div>
            <Header />
        </div>
        <div class={styles.container}>

            <div class={styles.text_box}>
                <Text />
            </div>

            <div class={styles.form_box}>
                <h1>Entrar</h1>

                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">E-mail</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha"/>
                    </div>
                    <button type="button" class="btn btn-link">Esqueceu a senha?</button>
                    <button type="button" class="btn btn-primary">Entrar</button>
                    <h6>Não possui conta? <button type="button" class="btn btn-link">Crie agora</button> </h6>
                </form>

                

            </div>

        </div>

        <div>
            <Footer />
        </div>

        </>       
    );
}

export default pageLogin
