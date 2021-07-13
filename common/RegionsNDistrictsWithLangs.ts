import { AddressRegion } from './AddressRegion'
import { ServerTrans } from './Translation'

enum CityType {
  REGIONAL_CITY = 'REGIONAL_CITY',
  DISTRICT_CITY = 'DISTRICT_CITY',
  DISTRICT_TOWN = 'DISTRICT_TOWN',
  SYMLINK = 'SYMLINK',
}

export type District = {
  key: string
  title: ServerTrans
}

export type City = {
  key: string
  title: ServerTrans
  centerOf?: string
  centerOf2?: string
  type: CityType
}

export type RegionsAndDistricts = {
  key: AddressRegion
  title: ServerTrans
  districts: Array<District>
  cities: Array<City>
}


export const unknown: RegionsAndDistricts = {
  key: AddressRegion.UNKNOWN,
  title: { UA: 'Невідомо', EN: 'Unknown', RU: 'Неизвестно' },
  districts: [],
  cities: [],
}

export const regionsAndDistricts: Array<RegionsAndDistricts> = [
  {
    key: AddressRegion.CHERKASY_REGION,
    title: { UA: 'Черкаська', EN: 'Cherkasy', RU: 'Черкасская' },
    districts: [
      {
        key: 'horodyshchenskyi_district',
        title: { UA: 'Городищенський', EN: 'Horodyshchenskyi', RU: 'Городищенский' },
      },
      {
        key: 'drabivskyi_district',
        title: { UA: 'Драбівський', EN: 'Drabivskyi', RU: 'Драбовский' },
      },
      {
        key: 'zhashkivskyi_district',
        title: { UA: 'Жашківський', EN: 'Zhashkivskyi', RU: 'Жашковский' },
      },
      {
        key: 'zvenyhorodskyi_district',
        title: { UA: 'Звенигородський', EN: 'Zvenyhorodskyi', RU: 'Звенигородский' },
      },
      {
        key: 'zolotoniskyi_district',
        title: { UA: 'Золотоніський', EN: 'Zolotoniskyi', RU: 'Золотоношский' },
      },
      {
        key: 'kamianskyi_district',
        title: { UA: "Кам'янський", EN: 'Kamianskyi', RU: 'Каменский' },
      },
      { key: 'kanivskyi_district', title: { UA: 'Канівський', EN: 'Kanivskyi', RU: 'Каневский' } },
      {
        key: 'katerynopilskyi_district',
        title: { UA: 'Катеринопільський', EN: 'Katerynopilskyi', RU: 'Катеринопольский' },
      },
      {
        key: 'korsun_shevchenkivskyi_district',
        title: {
          UA: 'Корсунь-Шевченківський',
          EN: 'Korsun-Shevchenkivskyi',
          RU: 'Корсунь-Шевченковский',
        },
      },
      {
        key: 'lysianskyi_district',
        title: { UA: 'Лисянський', EN: 'Lysianskyi', RU: 'Лысянский' },
      },
      {
        key: 'mankivskyi_district',
        title: { UA: 'Маньківський', EN: 'Mankivskyi', RU: 'Маньковский' },
      },
      {
        key: 'monastyryshchenskyi_district',
        title: { UA: 'Монастирищенський', EN: 'Monastyryshchenskyi', RU: 'Монастырищенский' },
      },
      {
        key: 'smilianskyi_district',
        title: { UA: 'Смілянський', EN: 'Smilianskyi', RU: 'Смелянский' },
      },
      {
        key: 'talnivskyi_district',
        title: { UA: 'Тальнівський', EN: 'Talnivskyi', RU: 'Тальновский' },
      },
      { key: 'umanskyi_district', title: { UA: 'Уманський', EN: 'Umanskyi', RU: 'Уманский' } },
      {
        key: 'khrystynivskyi_district',
        title: { UA: 'Христинівський', EN: 'Khrystynivskyi', RU: 'Христиновский' },
      },
      {
        key: 'cherkaskyi_district',
        title: { UA: 'Черкаський', EN: 'Cherkaskyi', RU: 'Черкасский' },
      },
      {
        key: 'chyhyrynskyi_district',
        title: { UA: 'Чигиринський', EN: 'Chyhyrynskyi', RU: 'Чигиринский' },
      },
      {
        key: 'chornobaivskyi_district',
        title: { UA: 'Чорнобаївський', EN: 'Chornobaivskyi', RU: 'Чернобаевский' },
      },
      {
        key: 'shpolianskyi_district',
        title: { UA: 'Шполянський', EN: 'Shpolianskyi', RU: 'Шполянский' },
      },
    ],
    cities: [
      {
        key: 'vatutine_city',
        title: { UA: 'Ватутіне', EN: 'Vatutine', RU: 'Ватутино' },
        type: CityType.REGIONAL_CITY,
      },
      {
        key: 'horodyshche_city',
        title: { UA: 'Городище', EN: 'Horodyshche', RU: 'Городище' },
        centerOf: 'horodyshchenskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'drabiv_town',
        title: { UA: 'Драбів', EN: 'Drabiv', RU: 'Драбов' },
        centerOf: 'drabivskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'zhashkiv_city',
        title: { UA: 'Жашків', EN: 'Zhashkiv', RU: 'Жашков' },
        centerOf: 'zhashkivskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'zvenyhorodka_city',
        title: { UA: 'Звенигородка', EN: 'Zvenyhorodka', RU: 'Звенигородка' },
        centerOf: 'zvenyhorodskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'zolotonosha_city',
        title: { UA: 'Золотоноша', EN: 'Zolotonosha', RU: 'Золотоноша' },
        centerOf: 'zolotoniskyi_district',
        type: CityType.REGIONAL_CITY,
      },
      {
        key: 'kamianka_city',
        title: { UA: "Кам'янка", EN: 'Kamianka', RU: 'Каменка' },
        centerOf: 'kamianskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'kaniv_city',
        title: { UA: 'Канів', EN: 'Kaniv', RU: 'Канев' },
        centerOf: 'kanivskyi_district',
        type: CityType.REGIONAL_CITY,
      },
      {
        key: 'katerynopil_town',
        title: { UA: 'Катеринопіль', EN: 'Katerynopil', RU: 'Катеринополь' },
        centerOf: 'katerynopilskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'korsun_shevchenkivskyi_city',
        title: {
          UA: 'Корсунь-Шевченківський',
          EN: 'Korsun-Shevchenkivskyi',
          RU: 'Корсунь-Шевченковский',
        },
        centerOf: 'korsun_shevchenkivskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'lysianka_town',
        title: { UA: 'Лисянка', EN: 'Lysianka', RU: 'Лысянка' },
        centerOf: 'lysianskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'mankivka_town',
        title: { UA: 'Маньківка', EN: 'Mankivka', RU: 'Маньковка' },
        centerOf: 'mankivskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'monastyryshche_city',
        title: { UA: 'Монастирище', EN: 'Monastyryshche', RU: 'Монастырище' },
        centerOf: 'monastyryshchenskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'smila_city',
        title: { UA: 'Сміла', EN: 'Smila', RU: 'Смела' },
        centerOf: 'smilianskyi_district',
        type: CityType.REGIONAL_CITY,
      },
      {
        key: 'talne_city',
        title: { UA: 'Тальне', EN: 'Talne', RU: 'Тальное' },
        centerOf: 'talnivskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'uman_city',
        title: { UA: 'Умань', EN: 'Uman', RU: 'Умань' },
        centerOf: 'umanskyi_district',
        type: CityType.REGIONAL_CITY,
      },
      {
        key: 'khrystynivka_city',
        title: { UA: 'Христинівка', EN: 'Khrystynivka', RU: 'Христиновка' },
        centerOf: 'khrystynivskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'cherkasy_city',
        title: { UA: 'Черкаси', EN: 'Cherkasy', RU: 'Черкассы' },
        centerOf: 'cherkaskyi_district',
        type: CityType.REGIONAL_CITY,
      },
      {
        key: 'chyhyryn_city',
        title: { UA: 'Чигирин', EN: 'Chyhyryn', RU: 'Чигирин' },
        centerOf: 'chyhyrynskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'chornobai_town',
        title: { UA: 'Чорнобай', EN: 'Chornobai', RU: 'Чернобай' },
        centerOf: 'chornobaivskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'shpola_city',
        title: { UA: 'Шпола', EN: 'Shpola', RU: 'Шпола' },
        centerOf: 'shpolianskyi_district',
        type: CityType.DISTRICT_CITY,
      },
    ],
  },
  {
    key: AddressRegion.CHERNIVTSI_REGION,
    title: { UA: 'Чернівецька', EN: 'Chernivtsi', RU: 'Черновицкая' },
    districts: [
      {
        key: 'vyzhnytskyi_district',
        title: { UA: 'Вижницький', EN: 'Vyzhnytskyi', RU: 'Вижницкий' },
      },
      {
        key: 'hertsaivskyi_district',
        title: { UA: 'Герцаївський', EN: 'Hertsaivskyi', RU: 'Герцаевский' },
      },
      {
        key: 'hlybotskyi_district',
        title: { UA: 'Глибоцький', EN: 'Hlybotskyi', RU: 'Глыбокский' },
      },
      {
        key: 'zastavnivskyi_district',
        title: { UA: 'Заставнівський', EN: 'Zastavnivskyi', RU: 'Заставновский' },
      },
      {
        key: 'kelmenetskyi_district',
        title: { UA: 'Кельменецький', EN: 'Kelmenetskyi', RU: 'Кельменецкий' },
      },
      {
        key: 'kitsmanskyi_district',
        title: { UA: 'Кіцманський', EN: 'Kitsmanskyi', RU: 'Кицманский' },
      },
      {
        key: 'novoselytskyi_district',
        title: { UA: 'Новоселицький', EN: 'Novoselytskyi', RU: 'Новоселицкий' },
      },
      {
        key: 'putylskyi_district',
        title: { UA: 'Путильський', EN: 'Putylskyi', RU: 'Путильский' },
      },
      {
        key: 'sokyrianskyi_district',
        title: { UA: 'Сокирянський', EN: 'Sokyrianskyi', RU: 'Сокирянский' },
      },
      {
        key: 'storozhynetskyi_district',
        title: { UA: 'Сторожинецький', EN: 'Storozhynetskyi', RU: 'Сторожинецкий' },
      },
      {
        key: 'khotynskyi_district',
        title: { UA: 'Хотинський', EN: 'Khotynskyi', RU: 'Хотинский' },
      },
    ],
    cities: [
      {
        key: 'vyzhnytsia_city',
        title: { UA: 'Вижниця', EN: 'Vyzhnytsia', RU: 'Вижница' },
        centerOf: 'vyzhnytskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'hertsa_city',
        title: { UA: 'Герца', EN: 'Hertsa', RU: 'Герца' },
        centerOf: 'hertsaivskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'hlyboka_town',
        title: { UA: 'Глибока', EN: 'Hlyboka', RU: 'Глыбокая' },
        centerOf: 'hlybotskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'zastavna_city',
        title: { UA: 'Заставна', EN: 'Zastavna', RU: 'Заставна' },
        centerOf: 'zastavnivskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'kelmentsi_town',
        title: { UA: 'Кельменці', EN: 'Kelmentsi', RU: 'Кельменцы' },
        centerOf: 'kelmenetskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'kitsman_city',
        title: { UA: 'Кіцмань', EN: 'Kitsman', RU: 'Кицмань' },
        centerOf: 'kitsmanskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'novodnistrovsk_city',
        title: { UA: 'Новодністровськ', EN: 'Novodnistrovsk', RU: 'Новоднестровск' },
        type: CityType.REGIONAL_CITY,
      },
      {
        key: 'novoselytsya_city',
        title: { UA: 'Новоселиця', EN: 'Novoselytsya', RU: 'Новоселица' },
        centerOf: 'novoselytskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'putyla_town',
        title: { UA: 'Путила', EN: 'Putyla', RU: 'Путила' },
        centerOf: 'putylskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'sokyriany_city',
        title: { UA: 'Сокиряни', EN: 'Sokyriany', RU: 'Сокиряны' },
        centerOf: 'sokyrianskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'storozhynets_city',
        title: { UA: 'Сторожинець', EN: 'Storozhynets', RU: 'Сторожинец' },
        centerOf: 'storozhynetskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'khotyn_city',
        title: { UA: 'Хотин', EN: 'Khotyn', RU: 'Хотин' },
        centerOf: 'khotynskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'chernivtsi_city',
        title: { UA: 'Чернівці', EN: 'Chernivtsi', RU: 'Черновцы' },
        type: CityType.REGIONAL_CITY,
      },
    ],
  },
  {
    key: AddressRegion.CHERNIHIV_REGION,
    title: { UA: 'Чернігівська', EN: 'Chernihiv', RU: 'Черниговская' },
    districts: [
      {
        key: 'bakhmatskyi_district',
        title: { UA: 'Бахмацький', EN: 'Bakhmatskyi', RU: 'Бахмачский' },
      },
      {
        key: 'bobrovytskyi_district',
        title: { UA: 'Бобровицький', EN: 'Bobrovytskyi', RU: 'Бобровицкий' },
      },
      {
        key: 'borznianskyi_district',
        title: { UA: 'Борзнянський', EN: 'Borznianskyi', RU: 'Борзнянский' },
      },
      {
        key: 'varvynskyi_district',
        title: { UA: 'Варвинський', EN: 'Varvynskyi', RU: 'Варвинский' },
      },
      {
        key: 'horodnianskyi_district',
        title: { UA: 'Городнянський', EN: 'Horodnianskyi', RU: 'Городнянский' },
      },
      {
        key: 'ichnianskyi_district',
        title: { UA: 'Ічнянський', EN: 'Ichnianskyi', RU: 'Ичнянский' },
      },
      {
        key: 'kozeletskyi_district',
        title: { UA: 'Козелецький', EN: 'Kozeletskyi', RU: 'Козелецкий' },
      },
      { key: 'koropskyi_district', title: { UA: 'Коропський', EN: 'Koropskyi', RU: 'Коропский' } },
      {
        key: 'koriukivskyi_district',
        title: { UA: 'Корюківський', EN: 'Koriukivskyi', RU: 'Корюковский' },
      },
      {
        key: 'kulykivskyi_district',
        title: { UA: 'Куликівський', EN: 'Kulykivskyi', RU: 'Куликовский' },
      },
      { key: 'menskyi_district', title: { UA: 'Менський', EN: 'Menskyi', RU: 'Менский' } },
      {
        key: 'nizhynskyi_district',
        title: { UA: 'Ніжинський', EN: 'Nizhynskyi', RU: 'Нежинский' },
      },
      {
        key: 'novhorod_siverskyi_district',
        title: { UA: 'Новгород-Сіверський', EN: 'Novhorod-Siverskyi', RU: 'Новгород-Северский' },
      },
      { key: 'nosivskyi_district', title: { UA: 'Носівський', EN: 'Nosivskyi', RU: 'Носовский' } },
      {
        key: 'prylutskyi_district',
        title: { UA: 'Прилуцький', EN: 'Prylutskyi', RU: 'Прилукский' },
      },
      {
        key: 'ripkynskyi_district',
        title: { UA: 'Ріпкинський', EN: 'Ripkynskyi', RU: 'Репкинский' },
      },
      {
        key: 'semenivskyi_district',
        title: { UA: 'Семенівський', EN: 'Semenivskyi', RU: 'Семёновский' },
      },
      { key: 'snovskyi_district', title: { UA: 'Сновський', EN: 'Snovskyi', RU: 'Сновский' } },
      {
        key: 'sosnytskyi_district',
        title: { UA: 'Сосницький', EN: 'Sosnytskyi', RU: 'Сосницкий' },
      },
      {
        key: 'sribnianskyi_district',
        title: { UA: 'Срібнянський', EN: 'Sribnianskyi', RU: 'Сребнянский' },
      },
      {
        key: 'talalaivskyi_district',
        title: { UA: 'Талалаївський', EN: 'Talalaivskyi', RU: 'Талалаевский' },
      },
      {
        key: 'chernihivskyi_district',
        title: { UA: 'Чернігівський', EN: 'Chernihivskyi', RU: 'Черниговский' },
      },
    ],
    cities: [
      {
        key: 'bakhmach_city',
        title: { UA: 'Бахмач', EN: 'Bakhmach', RU: 'Бахмач' },
        centerOf: 'bakhmatskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'bobrovytsia_city',
        title: { UA: 'Бобровиця', EN: 'Bobrovytsia', RU: 'Бобровица' },
        centerOf: 'bobrovytskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'borzna_city',
        title: { UA: 'Борзна', EN: 'Borzna', RU: 'Борзна' },
        centerOf: 'borznianskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'varva_town',
        title: { UA: 'Варва', EN: 'Varva', RU: 'Варва' },
        centerOf: 'varvynskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'horodnia_city',
        title: { UA: 'Городня', EN: 'Horodnia', RU: 'Городня' },
        centerOf: 'horodnianskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'ichnia_city',
        title: { UA: 'Ічня', EN: 'Ichnia', RU: 'Ичня' },
        centerOf: 'ichnianskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'kozelets_town',
        title: { UA: 'Козелець', EN: 'Kozelets', RU: 'Козелец' },
        centerOf: 'kozeletskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'korop_town',
        title: { UA: 'Короп', EN: 'Korop', RU: 'Короп' },
        centerOf: 'koropskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'koriukivka_city',
        title: { UA: 'Корюківка', EN: 'Koriukivka', RU: 'Корюковка' },
        centerOf: 'koriukivskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'kulykivka_town',
        title: { UA: 'Куликівка', EN: 'Kulykivka', RU: 'Куликовка' },
        centerOf: 'kulykivskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'mena_city',
        title: { UA: 'Мена', EN: 'Mena', RU: 'Мена' },
        centerOf: 'menskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'nizhyn_city',
        title: { UA: 'Ніжин', EN: 'Nizhyn', RU: 'Нежин' },
        centerOf: 'nizhynskyi_district',
        type: CityType.REGIONAL_CITY,
      },
      {
        key: 'novhorod_siverskyi_city',
        title: { UA: 'Новгород-Сіверський', EN: 'Novhorod-Siverskyi', RU: 'Новгород-Северский' },
        centerOf: 'novhorod_siverskyi_district',
        type: CityType.REGIONAL_CITY,
      },
      {
        key: 'nosivka_city',
        title: { UA: 'Носівка', EN: 'Nosivka', RU: 'Носовка' },
        centerOf: 'nosivskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'pryluky_city',
        title: { UA: 'Прилуки', EN: 'Pryluky', RU: 'Прилуки' },
        centerOf: 'prylutskyi_district',
        type: CityType.REGIONAL_CITY,
      },
      {
        key: 'ripky_town',
        title: { UA: 'Ріпки', EN: 'Ripky', RU: 'Репки' },
        centerOf: 'ripkynskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'semenivka_city',
        title: { UA: 'Семенівка', EN: 'Semenivka', RU: 'Семёновка' },
        centerOf: 'semenivskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'snovsk_city',
        title: { UA: 'Сновськ', EN: 'Snovsk', RU: 'Сновск' },
        centerOf: 'snovskyi_district',
        type: CityType.DISTRICT_CITY,
      },
      {
        key: 'sosnytsia_town',
        title: { UA: 'Сосниця', EN: 'Sosnytsia', RU: 'Сосница' },
        centerOf: 'sosnytskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'sribne_town',
        title: { UA: 'Срібне', EN: 'Sribne', RU: 'Сребное' },
        centerOf: 'sribnianskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'talalaivka_town',
        title: { UA: 'Талалаївка', EN: 'Talalaivka', RU: 'Талалаевка' },
        centerOf: 'talalaivskyi_district',
        type: CityType.DISTRICT_TOWN,
      },
      {
        key: 'chernihiv_city',
        title: { UA: 'Чернігів', EN: 'Chernihiv', RU: 'Чернигов' },
        centerOf: 'chernihivskyi_district',
        type: CityType.REGIONAL_CITY,
      },
    ],
  },
]
