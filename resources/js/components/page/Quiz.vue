<template>
  <div>
    <header>
      <div class="container text-center">
        <h1>4 Answers Quiz 4択クイズ&クイズ徹底解説</h1>
        <a href="/">
          <img class="header-nav__logo" src="/public/images/header-logo.png" />
        </a>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand" id="header-nav__home" href="/">ホーム</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
           >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a id="header-nav__login" href="/login">ログイン</a>
              </li>
              <li class="nav-item">
                <a id="header-nav__register" href="/register">ユーザー登録</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div class="container">
        <div class="row">
          <article class="col-sm-8">
          <section>
            <h2 class="quiz-question-h2">
              <img class="quiz-question__logo" src="public/images/what-is-mark.png" />
              第1問
            </h2>
            <p>正しい敬語を使った表現を１つ選んでください。</p>
            <div class="quiz-answer__list">
              <ul>
                <li>
                  <a>
                    <button>1</button>
                  </a>
                  受付でうかがってください。
                </li>
                <li>
                  <a>
                    <button>2</button>
                  </a>
                  課長がおっしゃったように、ファイルをご覧ください。
                </li>
                <li>
                  <a>
                    <button>3</button>
                  </a>
                  部長が申されたように進めていきます。
                </li>
                <li>
                  <a>
                    <button>4</button>
                  </a>
                  ○△商事の□□様がお越しになられました。
                </li>
              </ul>
            </div>
          </section>
          <section>
            <h2 class="quiz-correct-h2">
              <img class="quiz-correct__logo" src="public/images/correct-mark.png" />正解
            </h2>
            <p>
              <button class="quiz-correct-answer">1</button>
            </p>
            <button class="quiz-show-answer">正解を表示する</button>
            <div class="alert alert-info">
              <strong>正解!</strong>
            </div>
            <div class="alert alert-danger">
              <strong>不正解!</strong>
            </div>
          </section>
          <section >
            <h2 class="quiz-commentary-h2">
              <img class="quiz-commentary__logo" src="public/images/commentary-mark.png" />解説
            </h2>
            <div class="quiz-commentary">
              1）3）4）は、どこが間違っていたの？ <br>
              1）受付でうかがってください。<br>
              「うかがう」は謙譲語。謙譲語は自分または身内（自分の会社も含みます）の者に使う言葉で、相手に使うのは間違いです。<br>
              『受付でお尋ねください。』が正解です。<br><br>
              3）部長が申されたように進めていきます。<br>
              「申す」も謙譲語です。謙譲語にれる・られるを付けても尊敬語にはなりません。<br>
              『社長がおっしゃったように進めていきます。』が正解です。<br><br>
              4）○△商事の□□様がお越しになられました。<br>
              「なられました」は二重敬語の典型的な表現です。<br>
              『○△商事の□□様がお越しになりました。』が正解です。<br>
            </div>
            <button type="button" class="btn btn-primary d-block mx-auto quiz-next__button">次の問題へ</button>
            <button type="button" class="d-block mx-auto quiz-finish__button">結果を見る</button>
          </section>
          </article>
          <aside class="col-sm-4">
            <section class="sidebar-sns-section">
              <h3 class="text-center sidebar-sns-h3">SNS共有</h3>
              <div class="sidebar-sns-links">
                <ShareNetwork network="twitter" url="" title="shareボタン">
                  <div class="twitter__share">
                    <i class="fab fa-twitter"></i> Twitter
                  </div>
                </ShareNetwork>
                <ShareNetwork network="facebook" url="" title="shareボタン">
                  <div class="facebook__share">
                    <i class="fab fa-facebook"></i> Facebook
                  </div>
                </ShareNetwork>
                <ShareNetwork network="line" url="" title="shareボタン">
                  <div class="line__share"><i class="fab fa-line"></i> Line</div>
                </ShareNetwork>
                <ShareNetwork network="linkedin" url="" title="shareボタン">
                  <div class="linkedin__share"><i class="fab fa-linkedin"></i> LinkedIn</div>
                </ShareNetwork>
              </div>
            </section>
            <section class="sidebar-keywords">
              <h3 class="text-center sidebar-keywords-h3">キーワード集</h3>
              <ul class="sidebar-keywords__links">
                <li>
                  <a href="/keyword?initial=A">Ａ</a>
                  <a href="/keyword?initial=B">Ｂ</a>
                  <a href="/keyword?initial=C">Ｃ</a>
                  <a href="/keyword?initial=D">Ｄ</a>
                  <a href="/keyword?initial=E">Ｅ</a>
                  <a href="/keyword?initial=F">Ｆ</a>
                  <a href="/keyword?initial=G">Ｇ</a>
                  <a href="/keyword?initial=H">Ｈ</a>
                  <a href="/keyword?initial=I">Ｉ</a>
                  <a href="/keyword?initial=J">Ｊ</a>
                </li>
                <li>
                  <a href="/keyword?initial=K">Ｋ</a>
                  <a href="/keyword?initial=L">Ｌ</a>
                  <a href="/keyword?initial=M">Ｍ</a>
                  <a href="/keyword?initial=N">Ｎ</a>
                  <a href="/keyword?initial=O">Ｏ</a>
                  <a href="/keyword?initial=P">Ｐ</a>
                  <a href="/keyword?initial=Q">Ｑ</a>
                  <a href="/keyword?initial=R">Ｒ</a>
                  <a href="/keyword?initial=S">Ｓ</a>
                  <a href="/keyword?initial=T">Ｔ</a>
                </li>
                <li>
                  <a href="/keyword?initial=U">Ｕ</a>
                  <a href="/keyword?initial=V">Ｖ</a>
                  <a href="/keyword?initial=W">Ｗ</a>
                  <a href="/keyword?initial=X">Ｘ</a>
                  <a href="/keyword?initial=Y">Ｙ</a>
                  <a href="/keyword?initial=Z">Ｚ</a>
                </li>
                <li>
                  <a href="/keyword?initial=あ">あ</a>
                  <a href="/keyword?initial=い">い</a>
                  <a href="/keyword?initial=う">う</a>
                  <a href="/keyword?initial=え">え</a>
                  <a href="/keyword?initial=お">お</a>
                  <a href="/keyword?initial=か">か</a>
                  <a href="/keyword?initial=き">き</a>
                  <a href="/keyword?initial=く">く</a>
                  <a href="/keyword?initial=け">け</a>
                  <a href="/keyword?initial=こ">こ</a>
                </li>
                <li>
                  <a href="/keyword?initial=さ">さ</a>
                  <a href="/keyword?initial=し">し</a>
                  <a href="/keyword?initial=す">す</a>
                  <a href="/keyword?initial=せ">せ</a>
                  <a href="/keyword?initial=そ">そ</a>
                  <a href="/keyword?initial=た">た</a>
                  <a href="/keyword?initial=ち">ち</a>
                  <a href="/keyword?initial=つ">つ</a>
                  <a href="/keyword?initial=て">て</a>
                  <a href="/keyword?initial=と">と</a>
                </li>
                <li>
                  <a href="/keyword?initial=な">な</a>
                  <a href="/keyword?initial=に">に</a>
                  <a href="/keyword?initial=ぬ">ぬ</a>
                  <a href="/keyword?initial=ね">ね</a>
                  <a href="/keyword?initial=の">の</a>
                  <a href="/keyword?initial=は">は</a>
                  <a href="/keyword?initial=ひ">ひ</a>
                  <a href="/keyword?initial=ふ">ふ</a>
                  <a href="/keyword?initial=へ">へ</a>
                  <a href="/keyword?initial=ほ">ほ</a>
                </li>
                <li>
                  <a href="/keyword?initial=ま">ま</a>
                  <a href="/keyword?initial=み">み</a>
                  <a href="/keyword?initial=む">む</a>
                  <a href="/keyword?initial=め">め</a>
                  <a href="/keyword?initial=も">も</a>
                  <a href="/keyword?initial=ら">ら</a>
                  <a href="/keyword?initial=り">り</a>
                  <a href="/keyword?initial=る">る</a>
                  <a href="/keyword?initial=れ">れ</a>
                  <a href="/keyword?initial=ろ">ろ</a>
                </li>
                <li>
                  <a href="/keyword?initial=や">や</a>
                  <a href="/keyword?initial=ゆ">ゆ</a>
                  <a href="/keyword?initial=よ">よ</a>
                  <a href="/keyword?initial=わ">わ</a>
                  <a href="/keyword?initial=を">を</a>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </main>
    <footer>
      <div class="container text-center">
        <small>© 2020 4Answers-quiz. All rights reserved.</small>
      </div>
    </footer>
  </div>
</template>