<!DOCTYPE html><html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ChosenPeople</title>
    <style>
      body {
        margin: 0;
        font-family: sans-serif;
        background: #f9f9f9;
      }
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: #141414;
        color: white;
      }
      .menu {
        display: flex;
        gap: 20px;
      }
      .menu a {
        color: white;
        text-decoration: none;
      }
      .hero {
        padding: 30px 20px;
        background-color: #1e1e1e;
        color: white;
        text-align: center;
      }
      .section {
        padding: 20px;
      }
      .section h2 {
        margin-bottom: 10px;
      }
      .card-container {
        display: flex;
        overflow-x: auto;
        gap: 15px;
      }
      .card {
        min-width: 200px;
        border-radius: 12px;
        background: white;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      .card img {
        width: 100%;
        height: 120px;
        object-fit: cover;
      }
      .card p {
        padding: 10px;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>ChosenPeople</h1>
      <nav class="menu">
        <a href="#">Вечеринки</a>
        <a href="#">Рестораны</a>
        <a href="#">Бары</a>
        <a href="#">Театр</a>
        <a href="#">Спорт</a>
      </nav>
    </header><div class="hero">
  <h2>Выбери свой город</h2>
  <p>Москва | Питер | Бали | Бангкок</p>
</div>

<section class="section">
  <h2>События недели</h2>
  <div class="card-container">
    <div class="card">
      <img src="https://source.unsplash.com/200x120/?party" alt="" />
      <p>Ночная вечеринка в Soho Rooms</p>
    </div>
    <div class="card">
      <img src="https://source.unsplash.com/200x120/?concert" alt="" />
      <p>Концерт на крыше</p>
    </div>
    <div class="card">
      <img src="https://source.unsplash.com/200x120/?restaurant" alt="" />
      <p>Открытие нового ресторана</p>
    </div>
  </div>
</section>

  </body>
</html>
