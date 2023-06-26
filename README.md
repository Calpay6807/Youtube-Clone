# Youtube-Clone

# YouTubeClone

-React.js
-React İcons
-Reatc-Router-Dom
-Axios
-Tailwind Css(Sayfadan)
-Millify
-HTML5
-JAVASCRİPT


# Yapilacaklar

-`SideNav.jsx` bileşende Kategorileri Lİstele 
--Seçilen Kategorileri Bilgisini Bütün Erişebilmesi için Context Yapısında Tut

--seçilen kategori stati her Değiştiğinde ilgili kategoriye ait youtube video verisin çek
-bu veriyi `Feed.jsx` kullan ve herbir video objesi için ekrana `VideoCard.jsx` bas

- Videolardan birini tıkladığında kullanıcıyı o videonun id'sini parametro olarak
içeren bir linke yönlendir
--`VideoDetail.jsx` sayfasında urlden parametreyi al
--parametreyle beraber apiyi video detayları için istek at 
--api'den gelen veriyi ekrana bas

Eski Yönlendirdiğimiz Link :
--/results/${query}
---Bu Şekilde yönlendirme yapınca özel karakterlerle ilgili sorun oluyor

-Bu yüzden url parametresi yöntemiyle yönlendirme yapıcaz
--arama terimi yöntemiyle
Yeni Yönlendirdiğimiz Link 
--/results?search_query=${query}

<h1>Proje Gif</h1>


<img src="/youtube/src/assets/youtube.gif" />
