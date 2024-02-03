// App.tsx
import React from 'react';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="logo">PRODATA GESTÃO ESTRATÉGICA</div>
                <form className="login-form">
                    <input type="text" placeholder="Usuário" />
                    <input type="password" placeholder="Senha" />
                    <button type="submit">Entrar</button>
                    <a href="#forgot">Esqueceu a senha?</a>
                </form>
                <div className="info-messages">
                    <div className="message">
                        <strong>PDchat indisponível</strong>
                        <p>PD Chat temporariamente indisponível para evolução e melhorias; opte pelo VoIP e GLPI, que estão funcionando normalmente.</p>
                    </div>
                    <div className="message">
                        <strong>Versão disponível</strong>
                        <p>Atualize o SIG Prodata para a última versão disponível - Versão 2.6.38 - 05/01/2024</p>
                    </div>
                    <div className="message">
                        <strong>Manual do Novo GLPI</strong>
                        <p>Confira o passo a passo para usar o Novo GLPI <a href="#manual">Clique Aqui</a></p>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
