export default function Profile() {
    return(
    <div className="profile-container">
        <h2>Ваш профиль</h2>

        <div className="info-container">
            <div className="info-container-avatar">
                <img
                    loading="lazy"
                    srcSet="..."
                    alt="avatar-profile"
                    className="img-avatar" />
                <h3 className="info-name">Имя пользователя</h3>
            </div>
            <p className="info-description">
            Он проводит опросы на тему цифровых продуктов и сервисов, 
            чтобы помочь компаниям улучшить свои продукты и услуги. Этот пользователь также
             может задавать вопросы о предпочтениях и опыте использования 
             цифровых продуктов, чтобы получить более точную информацию для опросов.{" "}
            </p>
        </div>
        
        <div className="button-profile">Редактировать профиль</div>

        <div className="surveys-recently-container">
            <h2>Недавние опросы</h2>

            <div className="surveys-recently-card-container">
                <div className="div-20">
                    <p>Опрос</p>
                    <p>Опрос</p>
                    <p>Опрос</p>
                </div>
                <div className="div-20">
                    <p>Опрос</p>
                    <p>Опрос</p>
                    <p>Опрос</p>
                </div>
                <div className="div-20">
                    <p>Опрос</p>
                    <p>Опрос</p>
                    <p>Опрос</p>
                </div>
            </div>
        </div>
    </div>
    );
  }