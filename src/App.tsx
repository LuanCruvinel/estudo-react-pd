import React, {useState} from 'react';
import './App.css';

function App() {
    const [email, setEmail] = useState("");

    const handleRegister = () => {
        console.log(`Email registered: ${email}`);
        setEmail("");
    };
    return (
        <div className="App">
            <h2>HOME</h2>
            <p>Cadastro de email</p>
            <input
                type="text"
                placeholder="Digite seu e-mail..."
                value={email}
                onChange={blablabla => setEmail(blablabla.target.value)}
            />
            <button onClick={handleRegister}>Cadastrar</button>
        </div>
    );
}

export default App;