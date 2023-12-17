export default function Profile() {
    return(
        <div className="profile-page-container">
            <div className="profile-info-container">
                <h2>Ваш профиль</h2>
                <div className="profile-info-card-container">
                    <img/>
                    <h3>Имя пользователя</h3>
                    <p>Он проводит опросы на тему цифровых продуктов и сервисов, 
                        чтобы помочь компаниям улучшить свои продукты и услуги. 
                        Этот пользователь также может задавать вопросы
                         о предпочтениях и опыте использования цифровых продуктов, чтобы получить более точную информацию для опросов.</p>
                    <div className="edit-profile-button">Редактировать профиль</div>
                </div>
            </div>
            <div className="profile-recently-survey-container">
                <h3>Опросы</h3>
                <div className="profile-card">
                    <h4>Недавние опросы</h4>
                    <div className="recently-surveys-cards">
                        <div className="recently-surveys-card">
                            <div className="recently-surveys-card-name">Имя опроса</div>
                            <div>Опрос</div>
                        </div>
                        <div className="recently-surveys-card">
                            <div className="recently-surveys-card-name">Имя опроса</div>
                            <div>Опрос</div>
                        </div>
                        <div className="recently-surveys-card">
                            <div className="recently-surveys-card-name">Имя опроса</div>
                            <div>Опрос</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }