export default function BProfile() {
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
                <h3 className="info-name">Имя компании</h3>
            </div>
            <p className="info-description">
                Передовое предприятие, предлагающее инновационные решения в
                различных отраслях. Стремясь к совершенству, мы поставляем
                исключительные продукты и услуги, которые удовлетворяют растущие
                потребности наших клиентов по всему миру.{" "}
            </p>
        </div>
        
        <div className="button-profile">Редактировать профиль</div>
        <div className="button-profile">Создать опрос</div>

        <div className="surveys-recently-container">
            <h2>Недавние опросы</h2>

            <div className="surveys-recently-card-container">
                <div className="survyes-row">
                    <div className="survey-card-creator"><h4>Опрос о том</h4></div>
                </div>
                <div className="survyes-row">
                    <div className="survey-card-creator"><h4>Опрос о сем</h4></div>
                </div>
                <div className="survyes-row">
                    <div className="survey-card-creator"><h4>Опрос о том и сем</h4></div>
                </div>
            </div>
        </div>
    </div>
    );
  }