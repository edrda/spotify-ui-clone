import './Footer.css'

const Footer = () => {
    return (
        <footer className="rodape">
            <div className="rodape__texto">
                <h1 className="titulo">Testar o Premium de graça</h1>
                <p className="texto">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
            </div>
        
            <div className="rodape_botao">
                <button type="button">Inscreva-se grátis</button>
            </div>
        </footer>
    )
};

export default Footer;