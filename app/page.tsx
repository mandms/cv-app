import styles from "./page.module.css";

export default function Home() {
  return (
  <div className={styles.cv}>
    <h1>Юдин Георгий Александрович</h1>
    <div className={styles.info}>
        <p>Email: for4ik4@gmail.com</p>
        <p>Телефон: +7 (999) 999-99-99</p>
        <p>Адрес: г. МЙошкар-Ола, ул Пушкина, дом Колотушкина</p>
    </div>

    <div className={styles.education}>
        <h2 className={styles.title}>Образование</h2>
        <p><strong>Поволжский государственный технологический университет</strong>, Йошкар-Ола</p>
        <p>Факультет информатики и вычислительной техники, Программная инженерия</p>
        <p>- 2026 г.</p>
    </div>

    <div className={styles.experience}>
        <h2 className={styles.title}>Опыт работы</h2>
        <p><strong>Web-программист</strong>, Юнисистемс</p>
        <p>Июнь 2024 — Июль 2024, 2 месяца</p>
        <ul>
            <li>В июне 2024 проходил практику в Юнисистемс, делали сервис поиска для студентов на С# с
            использованием RabbitMq.</li>
        </ul>

        <p><strong>Web-программист</strong>, TravelLine</p>
        <p>Июнь 2018 - Август 2018</p>
        <ul>
            <li>В июле 2023 проходил практику Трэвел Лайн Системс, изучали бэкэнд на C#, фронтенд на React.</li>
        </ul>
    </div>

    <div className={styles.skills}>
        <h2 className={styles.title}>Навыки</h2>
        <ul>
            <li>JavaScript, TypeScript, .NET Core, ASP.NET Core </li>
            <li>React, Node.js, Docker, PostgreSQL</li>
            <li>Работа с Git и GitHub</li>
            <li>Английский язык — средний уровень</li>
        </ul>
    </div>
  </div>
  );
}
