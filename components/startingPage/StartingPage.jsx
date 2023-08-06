import style from "./StartingPage.module.css";

function StartingPageContent() {
  // Show Link to Login page if NOT auth

  return (
    <section className={style.starting}>
      <h1>Welcome on Board!</h1>
    </section>
  );
}

export default StartingPageContent;
