import {SearchResult} from "./search-result-interface";

export const RESULTS: SearchResult[] = [
  {
    fullName: "Алексей Пушков",
    surname: "Пушков",
    position: "член Совета Федерации, ведущий аналитического шоу «Постскриптум» на канале \"ТВЦ\"",
    organization: "Совет Федерации",
    role: "Ведет госпропаганду и одобряет военные действия Путина",
    photo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Alexey_Pushkov.jpg",
    tags: ["депутат", "пропагандист"],
    socialNetworks: [
      {snName: "Youtube", snLink: "https://www.youtube.com/channel/UC_Tohvtj1sqBYn00I-vZekw/videos"},
      {snName: "Twitter", snLink: "https://twitter.com/alexey_pushkov"},
      {snName: "Telegram", snLink: "https://t.me/alexey_pushkov"}
    ],
    region: "Москва",
    phone: "+7 (495) 697-58-69",
    phoneType: "Приемная"
  },
  {
    fullName: "Владимир Соловьев",
    surname: "Соловьев",
    position: "ведущий на телеканале «Россия», \"SolovievLive\"",
    organization: "ВГТРК",
    role: "Ведет госпропаганду и одобряет военные действия Путина",
    photo: "https://upload.wikimedia.org/wikipedia/commons/d/dc/2020_Vladimir_Solovyov_%28cropped%29.jpg",
    tags: ["пропагандист"],
    socialNetworks: [
      {snName: "Youtube", snLink: "https://www.youtube.com/channel/UCQ4YOFsXjG9eXWZ6uLj2t2A/videos"},
      {snName: "Instagram", snLink: "https://www.instagram.com/vrsoloviev"},
      {snName: "Facebook", snLink: "https://www.facebook.com/vladimir.soloviev1"},
      {snName: "Twitter", snLink: "https://twitter.com/VRSoloviev"},
      {snName: "Telegram", snLink: "https://t.me/SolovievLive"},
      {snName: "VK", snLink: "https://vk.com/solovievlive"},
    ],
    region: "Москва",
    phone: "+7 (929) 970-33-33",
    phoneType: ""
  },
  {
    fullName: "Маргарита Симоньян",
    surname: "Симоньян",
    position: "Главный редактор телеканала \"Russia Today\"",
    organization: "Russia Today",
    role: "Ведет госпропаганду и одобряет военные действия Путина",
    photo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Margarita_Simonyan_2017.jpg",
    tags: ["пропагандист"],
    socialNetworks: [
      {snName: "Youtube", snLink: "https://www.youtube.com/channel/UC-tuvwdkGeUG7q_4VkItmIg"},
      {snName: "Instagram", snLink: "https://www.instagram.com/_m_simonyan_"},
      {snName: "Facebook", snLink: "https://www.facebook.com/margarita.simonyan.5"},
      {snName: "Twitter", snLink: "https://twitter.com/m_simonyan"},
      {snName: "Telegram", snLink: "https://t.me/margaritasimonyan"},
      {snName: "VK", snLink: "https://vk.com/m_s_simonyan"},
    ],
    region: "Москва",
    phone: "+7 (916) 900-80-29",
    phoneType: "Прес-секретарь Ермолина Юлия"
  }
]
