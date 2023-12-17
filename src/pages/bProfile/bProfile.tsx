export default function bProfile() {
    return(
        <div className="profile-page-container">
            <div className="profile-info-container">
                <h2>Ваш профиль</h2>
                <div className="profile-info-card-container">
                    <img/>
                    <h3>Имя компании</h3>
                    <p>Передовое предприятие, предлагающее инновационные решения в различных отраслях. 
                        Стремясь к совершенству, мы поставляем исключительные продукты и услуги, 
                        которые удовлетворяют растущие потребности наших клиентов по всему миру.</p>
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