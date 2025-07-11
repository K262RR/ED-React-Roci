import cls from "./DownloadApp.module.scss";

export default function DownloadApp() {
  return (
    <section className={`section ${cls.downloadApp}`}>
      <div className="container">
        <div className={cls.downloadApp__inner}>
          <div className={cls.downloadApp__content}>
            <h2>Скачивай наше мобильное приложение</h2>
            <p>
              Download the app to manage your projects, keep track of the
              progress and complete tasks without procastinating. Stay on track
              and complete on time!
            </p>
            <div className={cls.downloadApp__content__download}>
              <p>Скачать</p>
              <img src="/images/appstore.png" alt="App Store" />
              <img src="/images/googleplay.png" alt="Google Play" />
            </div>
          </div>
          <div className={cls.downloadApp__image}>
            <img src="/images/downloadapp.png" alt="Download App" />
          </div>
        </div>
      </div>
    </section>
  );
}
