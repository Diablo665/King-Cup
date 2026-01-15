import styles from './ErrorPage.module.css';
import React from 'react';

const Error404 = () => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.container}>
        <div className={styles.icon}>ℹ️</div>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>Страница не найдена</p>
        <div className={styles.content}>
          <p>
            Запрашиваемая страница не существует или была перемещена. Возможно, вы
            ошиблись при наборе адреса или ссылка устарела.
          </p>
          <ul className={styles.list}>
            <li>Проверьте правильность написания URL</li>
            <li>Вернитесь на главную страницу</li>
          </ul>
          <a
            href="mailto:support@kingcup.ru"
            className={styles.supportLink}
          >
            Написать в поддержку: support@kingcup.ru
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error404;