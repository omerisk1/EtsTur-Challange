const data = [
  {
    id: 1,
    eventName: "Yıldız Tilbe Konseri",
    category: "Konser",
    country: "İstanbul",
    date: "18/07/2022",
    description: "Yıldız Tilbe, 26 Haziran akşamı İstanbul Büyükşehir Belediyesi Cemil Topuzlu Açıkhava Tiyatrosunda sizlerle buluşuyor…"
  },
  {
    id: 2,
    eventName: "AnadoluFest Konya",
    category: "Konser",
    country: "Konya",
    date: "05/09/2022",
    description: "Etkinlik detayları yakında paylaşılacaktır."
  },
  {
    id: 3,
    eventName: "AnadoluFest Konya",
    category: "Konser",
    country: "Konya",
    date: "05/09/2022",
    description: "Etkinlik detayları yakında paylaşılacaktır."
  },
  {
    id: 4,
    eventName: "Sagopa Kajmer Konseri",
    category: "Konser",
    country: "İstanbul",
    date: "23/07/2022",
    description: "Sagopa Kajmer ile rap müziğine doyacaksınız!"
  },
  {
    id: 5,
    eventName: "Aspova Konseri",
    category: "Konser",
    country: "İstanbul",
    date: "02/07/2022",
    description: "Aspova, dinleyicisiyle buluşmaya devam ediyor."
  },
  {
    id: 6,
    eventName: "Manga Konseri",
    category: "Konser",
    country: "Ankara",
    date: "15/07/2022",
    description: "Sevilen rock grubu maNga, sahne performansıyla seyircilerine müzik dolu bir gece yaşatmaya hazırlanıyor."
  },
  {
    id: 7,
    eventName: "Emre Aydın Konseri",
    category: "Konser",
    country: "İstanbul",
    date: "15/09/2022",
    description: "Alternatif rock müziğinin güçlü seslerinden Emre Aydın, sahne alıyor."
  },
  {
    id: 8,
    eventName: "Mary Jane Konseri",
    category: "Konser",
    country: "İstanbul",
    date: "01/09/2022",
    description: "Mary Jane dinleyicisyle buluşmaya devam ediyor."
  },
  {
    id: 9,
    eventName: "Taladro Konseri",
    category: "Konser",
    country: "İzmir",
    date: "28/06/2022",
    description: "Taladro, rap şarkılarını sevenleriyle söylüyor."
  },
  {
    id: 10,
    eventName: "Emir Can İğrek Konseri",
    category: "Konser",
    country: "İzmir",
    date: "29/06/2022",
    description: "‘Nalan’, ‘Dargın’, ‘Beyaz Skandalım’ ve ‘Kor’ gibi şarkıların mimarı Emircan İğrek, unutulmaz bir konsere imza atmaya geliyor."
  },
  {
    id: 11,
    eventName: "İlyas Yalçıntaş Konseri",
    category: "Konser",
    country: "İzmir",
    date: "03/07/2022",
    description: "İlyas Yalçıntaş şarkılarına, sanatçıyla eşlik etmek isteyenler bu konseri kaçırmayın!"
  },
  {
    id: 12,
    eventName: "Hayko Cepkin Konseri",
    category: "Konser",
    country: "İstanbul",
    date: "15/07/2022",
    description: "Alternatif metal müziğinin asi çocuğu Hayko Cepkin, ses yükseltmeye geliyor."
  },
  {
    id: 13,
    eventName: "Oğuzhan Koç Konseri",
    category: "Konser",
    country: "İstanbul",
    date: "15/10/2022",
    description: "Pop Müziğin sevilen ismi Oğuzhan Koç, şarkılarıyla eğlendirmeye geliyor."
  },
  {
    id: 14,
    eventName: "Haluk Levent Konseri",
    category: "Konser",
    country: "İzmir",
    date: "28/06/2022",
    description: "Haluk Levent dinleyicisiyle buluşmaya devam ediyor."
  },
  {
    id: 15,
    eventName: "Sertab Erener Konseri",
    category: "Konser",
    country: "İstanbul",
    date: "29/06/2022",
    description: "Sertab Erener, geçmişten günümüze sevilen tüm şarkılarını hayranlarıyla birlikte seslendiriyor."
  },
  {
    id: 16,
    eventName: "Duman Konseri",
    category: "Konser",
    country: "İstanbul",
    date: "29/07/2022",
    description: "Rock müziğin güçlü temsilcilerinden Duman grubu, dillere pelesenk olmuş şarkılarını konserinde söylemeye hazırlanıyor."
  },
  {
    id: 17,
    eventName: "Tuğçe Kandemir Konseri",
    category: "Konser",
    country: "İstanbul",
    date: "14/07/2022",
    description: "Bu Benim Öyküm adlı şarkısıyla müzik dünyasındaki bilinirliğini arttıran Tuğçe Kandemir, sevilen şarkılarını milyonlarla birlikte seslendiriyor."
  },
  {
    id: 18,
    eventName: "Ayna Konseri",
    category: "Konser",
    country: "İzmir",
    date: "14/07/2022",
    description: "Ayna grubu dinleyicisiyle buluşmaya devam ediyor."
  },
  {
    id: 19,
    eventName: "Gökhan Türkmen Konseri",
    category: "Konser",
    country: "İzmir",
    date: "14/08/2022",
    description: "Gökhan Türkmen dinleyicisiyle buluşmaya devam ediyor."
  },
  {
    id: 20,
    eventName: "Irmak Arıcı Konseri",
    category: "Konser",
    country: "Ankara",
    date: "14/06/2022",
    description: "Genç şarkıcı Irmak Arıcı, son döneme damga vuran şarkılarını Mask Beach Beylikdüzü'nde sevenleriyle birlikte söyleyecek."
  },
  {
    id: 21,
    eventName: "Yüksek Sadakat Konseri",
    category: "Konser",
    country: "İstanbul",
    date: "30/07/2022",
    description: "Sadık dinleyici kitlesine sahip olan Yüksek Sadakat, konserler vermeye devam ediyor!"
  },
  {
    id: 22,
    eventName: "İrem Derici",
    category: "Konser",
    country: "İstanbul",
    date: "30/06/2022",
    description: "İrem Derici dinleyicisiyle buluşmaya devam ediyor."
  },
  {
    id: 23,
    eventName: "İkinin Biri Oyunu",
    category: "Tiyatro",
    country: "İstanbul",
    date: "30/06/2022",
    description: "Muafazakar partiden bakan yardımcısı olan Richard Willey, yapılacak olan bir toplantı için eşi ile birlikte birkaç geceliğine Westminister Oteli'ne konaklamaya giderler. Fakat Richard Willey'in aklında bu iş gezisinden başka şeyler de vardır. Otel çalışanları ve beklenmeyen misafirler ile oyunda her kapı, ayrı bir karmaşaya açılmaktadır."
  },
  {
    id: 24,
    eventName: "İyi Kötü Çirkin Oyunu",
    category: "Tiyatro",
    country: "Ankara",
    date: "01/07/2022",
    description: "İyi Kötü Çirkin tiyatro oyunu, izleyicisiyle buluşuyor."
  },
  {
    id: 25,
    eventName: "Vişne Bahçesi Oyunu",
    category: "Tiyatro",
    country: "İstanbul",
    date: "03/07/2022",
    description: "Aristokrat bir ailenin son fertleri tüm servetlerini tüketmişlerdir. Ellerinde kalan son şey olan vişne bahçesiyle çevrili çiftlikleri ise borçlarından ötürü satılmak üzeredir. Üretmeye ve çalışmaya alışık olmayan bu insanlar; kapılarını sıkıca kapadıkları evlerinde, servetlerinin son kırıntılarını tüketirken, dışarıda yaşanan büyük değişim, sadece o ünlü vişne bahçelerini değil, eskiden olduğu gibi sürdürebileceklerini sandıkları yaşamlarını da tehdit etmektedir. Çehov, değişim denilen süreci sorgularken, 19. yüzyıl sonu Rus aristokrasisinin çözülüşüne ve çöküşüne tanıklığa çağırıyor."
  },
  {
    id: 26,
    eventName: "Etekler ve Pantolonlar Oyunu",
    category: "Tiyatro",
    country: "İzmir",
    date: "15/07/2022",
    description: "Nurcan yıllardır görüşmediği okul arkadaşı Aysel'e sürpriz yaparak evine ziyarete gelir. Nurcan kocasının kendisini aldattığını ve intikam alacağını bu konuda Aysel'den yardım istemek için geldiğini açıklar. Aysel Nurcan'ın durumuna üzülür ve ona yardım edeceğini söyler. Aysel ve Nurcan, Nurcan'ın eşine karşı strateji belirlerken, Aysel de bu durumlardan etkilenip kendi evliliğini sorgulamaya başlar. Nurcan ve Aysel evliliklerini sorgularken geçmişlerine bir yolculuk yaparlar ve aslında ikisi de hayatlarında olmak istedikleri gibi değil de, aile ve çevre baskısıyla, başkalarının onları görmek istedikleri bireylere dönüştüklerini anlarlar. İki eski arkadaşın evliliklerini sorgulamak için başladıkları süreç, artık kendi istedikleri hayatlara doğru yol aldıkları bir sürece dönüşür."
  },
  {
    id: 27,
    eventName: "Erkek Aklı Oksimoron Oyunu",
    category: "Tiyatro",
    country: "İstanbul",
    date: "30/09/2022",
    description: "Birbiriyle çelişen ya da tamamen zıt iki kavram bir araya geldiğinde, bu iki karşıt anlam bazen birbirini götürmek yerine yepyeni bir anlam doğurur. İşte oluşan bu yeni ifadeye ‘Oksimoron’ denir."
  },
  {
    id: 28,
    eventName: "Bülent Beyin Hikayesi Oyunu",
    category: "Tiyatro",
    country: "İstanbul",
    date: "11/09/2022",
    description: "Beyninizi nasıl bilirdiniz? Karışık? Buruşuk? Mucizevi?"
  },
  {
    id: 29,
    eventName: "Mahşeri Cümbüş Oyunu",
    category: "Tiyatro",
    country: "İstanbul",
    date: "11/07/2022",
    description: "Türkiye’de modern doğaçlama tiyatronun öncüsü olan Mahşer-i Cümbüş, tiyatroseverler ile buluşmaya devam ediyor.2001 yılı Mayıs ayında Ankara Üniversitesi Dil ve Tarih-Coğrafya Fakültesi Tiyatro Bölümü öğrencileri tarafından kurulan Mahşer-i Cümbüş, aynı yıl Eylül ayında Ankara Tenedos Kafe’de “Tiyatro Sporu” gösterilerine başladı.Mahşer-i Cümbüş 2003 yılının ağustos ayında İstanbul’a taşınarak faaliyetlerini İstanbul’da sürdürdü."
  },
  {
    id: 30,
    eventName: "Ran Oyunu",
    category: "Tiyatro",
    country: "Ankara",
    date: "11/06/2022",
    description: "Ran, 5 Mayıs 2017’de Londra Millfield Tiyatro’sunda Dünya prömiyerini gerçekleştirdi."
  },
  {
    id: 31,
    eventName: "Kozlu Müzik Festivali",
    category: "Festival",
    country: "İstanbul",
    date: "11/06/2022",
    description: "Bu yıl ikinci kez gerçekleştirilecek olan Kozlu Müzik Festivali 2022 yılında Karadeniz’in eşsiz doğasıyla birlikte müzikseverleri sınırsız eğlence ve müzik İle buluşturmayı amaçlıyor. Kozlu Müzik Festivali, Türkiye’nin en güzel şehirlerinden Zonguldak’ta yeşilin ve mavinin buluşma noktasında keyifli bir kamp deneyimi ve festival heyecanını sunmak için katılımcılarını bekliyor. Sınırsız müzik ve eğlencenin buluşma noktası olacak festival, 28-29-30-31 Temmuz 2022 tarihlerinde düzenlenecek ve doğa manzarasıyla birleşen müziğin keyfini çıkarmak İsteyen konuklarını ağırlayacak."
  },
  {
    id: 32,
    eventName: "Kuzey Fest Festivali",
    category: "Festival",
    country: "İstanbul",
    date: "12/07/2022",
    description: "Geçtiğimiz iki yılda yaza damga vuran Kuzey Fest, 2022 yılında da Karadeniz’in eşsiz doğasıyla birlikte müzikseverleri sınırsız eğlence ve müzik İle buluşturmayı amaçlıyor. Kuzey Fest, Türkiye’nin en mutlu şehri Sinop’ta yeşilin ve mavinin buluşma noktasında keyifli bir kamp deneyimi ve festival heyecanını sunmak için katılımcılarını bekliyor. Sınırsız müzik ve eğlencenin buluşma noktası olacak festival, 4-5-6-7 Ağustos 2022 tarihlerinde düzenlenecek ve doğa manzarasıyla birleşen müziğin keyfini çıkarmak İsteyen konuklarını ağırlayacak."
  },
  {
    id: 33,
    eventName: "Trakya Fest",
    category: "Festival",
    country: "Aydın",
    date: "21/07/2022",
    description: "Trakya Fest 2022 yılında da 21-24 Temmuz tarihleri arasında sizlerle buluşmaya hazırlanıyor."
  },
  {
    id: 34,
    eventName: "AnadoluFest Konya",
    category: "Festival",
    country: "Konya",
    date: "29/07/2022",
    description: "Etkinlik detayları yakında paylaşılacaktır."
  },
  {
    id: 35,
    eventName: "Trabzon Gençlik Festivali",
    category: "Festival",
    country: "Trabzon",
    date: "29/09/2022",
    description: "Adamlar, Dedublüman, Mavi Gri ve Ertesi Dün, Trabzon Gençlik Festivali’nde bir araya geliyor!"
  },
  {
    id: 36,
    eventName: "Gezgin Fest",
    category: "Festival",
    country: "İzmir",
    date: "11/09/2022",
    description: "Gezgin Fest - Kilyos 24 - 26 Haziran 2022 tarihlerinde 2018 yılında yapılan GezginFest İstanbul ile aynı etkinlik alanı Gümüşdere Plajında gerçekleşecektir. Etkinlik alanı 50 bin kişilik kapasiteye sahiptir."
  },
  {
    id: 37,
    eventName: "Charlie'nin Çikolata Fabrikasında Çocuk Oyunu",
    category: "Çocuk Aktivite",
    country: "İstanbul",
    date: "30/06/2022",
    description: "Dünyanın en ünlü çikolatacısı olan Bay Wonka, biletleri  bulan  çocuklara  daha önce kimsenin görmediği fabrikasını gezdirmeye karar verir. Bu fabrikada düzenlediği yarışmada birinci olan çocuğa da kimsenin bilmediği bir büyük ödül vardır. Diğer çocuklar biletleri  bulmak için farklı yollar denerken Charlie tamamen şans eseri bileti bulur ve macera başlar."
  },
  {
    id: 38,
    eventName: "Karlar Ülkesi Çocuk Oyunu",
    category: "Çocuk Aktivite",
    country: "İstanbul",
    date: "30/07/2022",
    description: "Karlar Ülkesi ile çocuklar hayal dünyasının sınırlarını zorlayan bir yolculuğa çıkıyor! Mehmet Zorlu Vakfı çatısı altında etkinlik gösteren Zorlu Çocuk Tiyatrosu tarafından bir sosyal sorumluluk projesi olarak sahnelenen, Özlem Saraç'ın Hans Christian Andersen'in Karlar Kraliçesi masalından yola çıkarak yazdığı, müziklerini Murat Asil'in yaptığı ve Gaye Cankaya'nın yönettiği Karlar Ülkesi; çocuklara dostluğun önemini anlatırken doğa sevgisini de aşılıyor. 4 yaş ve üzeri seyircisine perdelerini açan müzikal, her mevsimin kendine özgü dokusunu tüm renkleriyle sergilerken çocukların yaşadıkları dünyayı anlamasına ve anlamlandırmasına katkıda bulunmayı amaçlıyor. Müzik, dans ve birçok sanatı bünyesinde barındıran müzikalde rol alan profesyonel oyuncu ve dansçılar çocuklara sınırsız bir hayal dünyasının kapılarını açıyor. En yakın arkadaşları Kay'ı Karlar Ülkesi'nde yaşayan kötü kalpli Karlar Kraliçesi'nin elinden kurtarmak için tehlikelerle dolu bir yolculuğu göze alan Tarçın ve Gerda, amaçlarına ulaşmak için engelleri aştıkları gibi rengarenk diyarlarda her biri kendi içinde kendi mesajını barındıran mevsimleri de keşfediyor."
  },
  {
    id: 39,
    eventName: "Taş Devri Çocuk Oyunu",
    category: "Çocuk Aktivite",
    country: "İstanbul",
    date: "30/08/2022",
    description: "Çocukların eşlik edeceği birbirinden eğlenceli şarkılar."
  },

  
];

module.exports = data;
