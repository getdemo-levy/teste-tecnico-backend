export const demo3html = `<!DOCTYPE html> 
<div style="
  font-family: Arial, sans-serif;
  background: #f0f2f5;
  min-height: 100vh;
  padding: 2rem;
">
  <header style="
    text-align: center;
    margin-bottom: 3rem;
  ">
    <h1 style="color: #2d3436; font-size: 2.5rem;">Contato</h1>
    <p style="color: #636e72;">Entre em contato conosco</p>
  </header>

  <section style="
    max-width: 600px;
    margin: 0 auto;
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  ">
    <form>
      <div style="margin-bottom: 1rem;">
        <label style="display: block; margin-bottom: 0.5rem; color: #2d3436;">Nome</label>
        <input type="text" style="
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 5px;
        ">
      </div>

      <div style="margin-bottom: 1rem;">
        <label style="display: block; margin-bottom: 0.5rem; color: #2d3436;">Email</label>
        <input type="email" style="
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 5px;
        ">
      </div>

      <div style="margin-bottom: 1rem;">
        <label style="display: block; margin-bottom: 0.5rem; color: #2d3436;">Mensagem</label>
        <textarea style="
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          min-height: 150px;
        "></textarea>
      </div>

      <button type="submit" style="
        background: #0984e3;
        color: white;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
      ">Enviar Mensagem</button>
    </form>
  </section>

  <footer style="
    text-align: center;
    margin-top: 3rem;
    color: #636e72;
  ">
    <p>© 2023 TechStart. Todos os direitos reservados.</p>
  </footer>
</div>
`