const day = new Date()
const thisYear = day.getFullYear()
export const years = [...Array(100)].map((item, index) => thisYear - index)

export const months = [...Array(12)].map((item, index) => index + 1)

export const days = [...Array(31)].map((item, index) => index + 1)

export const groups = ['汪汪組', '喵喵組']

export const cityList = [
  {
    Name: '台北市',
    AreaList: [
      { ZipCode: 100, Name: '中正區', IsLand: false },
      { ZipCode: 103, Name: '大同區', IsLand: false },
      { ZipCode: 104, Name: '中山區', IsLand: false },
      { ZipCode: 105, Name: '松山區', IsLand: false },
      { ZipCode: 106, Name: '大安區', IsLand: false },
      { ZipCode: 108, Name: '萬華區', IsLand: false },
      { ZipCode: 110, Name: '信義區', IsLand: false },
      { ZipCode: 111, Name: '士林區', IsLand: false },
      { ZipCode: 112, Name: '北投區', IsLand: false },
      { ZipCode: 114, Name: '內湖區', IsLand: false },
      { ZipCode: 115, Name: '南港區', IsLand: false },
      { ZipCode: 116, Name: '文山區', IsLand: true }
    ]
  },
  {
    AreaList: [
      { ZipCode: 200, Name: '仁愛區', IsLand: false },
      { ZipCode: 201, Name: '信義區', IsLand: false },
      { ZipCode: 202, Name: '中正區', IsLand: false },
      { ZipCode: 203, Name: '中山區', IsLand: false },
      { ZipCode: 204, Name: '安樂區', IsLand: false },
      { ZipCode: 205, Name: '暖暖區', IsLand: false },
      { ZipCode: 206, Name: '七堵區', IsLand: false }
    ],
    Name: '基隆市'
  },
  {
    AreaList: [
      { ZipCode: 207, Name: '萬里區', IsLand: false },
      { ZipCode: 208, Name: '金山區', IsLand: false },
      { ZipCode: 220, Name: '板橋區', IsLand: false },
      { ZipCode: 221, Name: '汐止區', IsLand: false },
      { ZipCode: 222, Name: '深坑區', IsLand: false },
      { ZipCode: 223, Name: '石碇區', IsLand: false },
      { ZipCode: 224, Name: '瑞芳區', IsLand: false },
      { ZipCode: 226, Name: '平溪區', IsLand: true },
      { ZipCode: 227, Name: '雙溪區', IsLand: false },
      { ZipCode: 228, Name: '貢寮區', IsLand: false },
      { ZipCode: 231, Name: '新店區', IsLand: false },
      { ZipCode: 232, Name: '坪林區', IsLand: false },
      { ZipCode: 233, Name: '烏來區', IsLand: true },
      { ZipCode: 234, Name: '永和區', IsLand: false },
      { ZipCode: 235, Name: '中和區', IsLand: false },
      { ZipCode: 236, Name: '土城區', IsLand: false },
      { ZipCode: 237, Name: '三峽區', IsLand: false },
      { ZipCode: 238, Name: '樹林區', IsLand: false },
      { ZipCode: 239, Name: '鶯歌區', IsLand: false },
      { ZipCode: 241, Name: '三重區', IsLand: false },
      { ZipCode: 242, Name: '新莊區', IsLand: false },
      { ZipCode: 243, Name: '泰山區', IsLand: false },
      { ZipCode: 244, Name: '林口區', IsLand: false },
      { ZipCode: 247, Name: '蘆洲區', IsLand: false },
      { ZipCode: 248, Name: '五股區', IsLand: false },
      { ZipCode: 249, Name: '八里區', IsLand: false },
      { ZipCode: 251, Name: '淡水區', IsLand: false },
      { ZipCode: 252, Name: '三芝區', IsLand: false },
      { ZipCode: 253, Name: '石門區', IsLand: true }
    ],
    Name: '新北市'
  },
  {
    AreaList: [
      { ZipCode: 209, Name: '南竿鄉', IsLand: true },
      { ZipCode: 210, Name: '北竿鄉', IsLand: true },
      { ZipCode: 211, Name: '莒光鄉', IsLand: true },
      { ZipCode: 212, Name: '東引鄉', IsLand: true }
    ],
    Name: '連江縣'
  },
  {
    AreaList: [
      { ZipCode: 260, Name: '宜蘭市', IsLand: false },
      { ZipCode: 261, Name: '頭城鎮', IsLand: false },
      { ZipCode: 262, Name: '礁溪鄉', IsLand: false },
      { ZipCode: 263, Name: '壯圍鄉', IsLand: false },
      { ZipCode: 264, Name: '員山鄉', IsLand: false },
      { ZipCode: 265, Name: '羅東鎮', IsLand: false },
      { ZipCode: 266, Name: '三星鄉', IsLand: false },
      { ZipCode: 267, Name: '大同鄉', IsLand: true },
      { ZipCode: 268, Name: '五結鄉', IsLand: false },
      { ZipCode: 269, Name: '冬山鄉', IsLand: false },
      { ZipCode: 270, Name: '蘇澳鎮', IsLand: false },
      { ZipCode: 272, Name: '南澳鄉', IsLand: true },
      { ZipCode: 290, Name: '釣魚台', IsLand: false }
    ],
    Name: '宜蘭縣'
  },
  {
    AreaList: [{ ZipCode: 300, Name: '新竹市', IsLand: false }],
    Name: '新竹市'
  },
  {
    AreaList: [
      { ZipCode: 302, Name: '竹北市', IsLand: false },
      { ZipCode: 303, Name: '湖口鄉', IsLand: false },
      { ZipCode: 304, Name: '新豐鄉', IsLand: false },
      { ZipCode: 305, Name: '新埔鎮', IsLand: false },
      { ZipCode: 306, Name: '關西鎮', IsLand: false },
      { ZipCode: 307, Name: '芎林鄉', IsLand: false },
      { ZipCode: 308, Name: '寶山鄉', IsLand: false },
      { ZipCode: 310, Name: '竹東鎮', IsLand: false },
      { ZipCode: 311, Name: '五峰鄉', IsLand: false },
      { ZipCode: 312, Name: '橫山鄉', IsLand: false },
      { ZipCode: 313, Name: '尖石鄉', IsLand: false },
      { ZipCode: 314, Name: '北埔鄉', IsLand: false },
      { ZipCode: 315, Name: '峨眉鄉', IsLand: false }
    ],
    Name: '新竹縣'
  },
  {
    AreaList: [
      { ZipCode: 320, Name: '中壢區', IsLand: false },
      { ZipCode: 324, Name: '平鎮區', IsLand: false },
      { ZipCode: 325, Name: '龍潭區', IsLand: false },
      { ZipCode: 326, Name: '楊梅區', IsLand: false },
      { ZipCode: 327, Name: '新屋區', IsLand: false },
      { ZipCode: 328, Name: '觀音區', IsLand: false },
      { ZipCode: 330, Name: '桃園區', IsLand: false },
      { ZipCode: 333, Name: '龜山區', IsLand: false },
      { ZipCode: 334, Name: '八德區', IsLand: false },
      { ZipCode: 335, Name: '大溪區', IsLand: false },
      { ZipCode: 336, Name: '復興區', IsLand: true },
      { ZipCode: 337, Name: '大園區', IsLand: false },
      { ZipCode: 338, Name: '蘆竹區', IsLand: false }
    ],
    Name: '桃園市'
  },
  {
    AreaList: [
      { ZipCode: 350, Name: '竹南鎮', IsLand: false },
      { ZipCode: 351, Name: '頭份市', IsLand: false },
      { ZipCode: 352, Name: '三灣鄉', IsLand: false },
      { ZipCode: 353, Name: '南庄鄉', IsLand: false },
      { ZipCode: 354, Name: '獅潭鄉', IsLand: false },
      { ZipCode: 356, Name: '後龍鎮', IsLand: false },
      { ZipCode: 357, Name: '通霄鎮', IsLand: false },
      { ZipCode: 358, Name: '苑裡鎮', IsLand: false },
      { ZipCode: 360, Name: '苗栗市', IsLand: false },
      { ZipCode: 361, Name: '造橋鄉', IsLand: false },
      { ZipCode: 362, Name: '頭屋鄉', IsLand: false },
      { ZipCode: 363, Name: '公館鄉', IsLand: false },
      { ZipCode: 364, Name: '大湖鄉', IsLand: false },
      { ZipCode: 365, Name: '泰安鄉', IsLand: true },
      { ZipCode: 366, Name: '銅鑼鄉', IsLand: false },
      { ZipCode: 367, Name: '三義鄉', IsLand: false },
      { ZipCode: 368, Name: '西湖鄉', IsLand: false },
      { ZipCode: 369, Name: '卓蘭鎮', IsLand: false }
    ],
    Name: '苗栗縣'
  },
  {
    AreaList: [
      { ZipCode: 400, Name: '中區', IsLand: false },
      { ZipCode: 401, Name: '東區', IsLand: false },
      { ZipCode: 402, Name: '南區', IsLand: false },
      { ZipCode: 403, Name: '西區', IsLand: false },
      { ZipCode: 404, Name: '北區', IsLand: false },
      { ZipCode: 406, Name: '北屯區', IsLand: false },
      { ZipCode: 407, Name: '西屯區', IsLand: false },
      { ZipCode: 408, Name: '南屯區', IsLand: false },
      { ZipCode: 411, Name: '太平區', IsLand: true },
      { ZipCode: 412, Name: '大里區', IsLand: false },
      { ZipCode: 413, Name: '霧峰區', IsLand: false },
      { ZipCode: 414, Name: '烏日區', IsLand: false },
      { ZipCode: 420, Name: '豐原區', IsLand: false },
      { ZipCode: 421, Name: '后里區', IsLand: false },
      { ZipCode: 422, Name: '石岡區', IsLand: false },
      { ZipCode: 423, Name: '東勢區', IsLand: true },
      { ZipCode: 424, Name: '和平區', IsLand: true },
      { ZipCode: 426, Name: '新社區', IsLand: false },
      { ZipCode: 427, Name: '潭子區', IsLand: false },
      { ZipCode: 428, Name: '大雅區', IsLand: false },
      { ZipCode: 429, Name: '神岡區', IsLand: false },
      { ZipCode: 432, Name: '大肚區', IsLand: false },
      { ZipCode: 433, Name: '沙鹿區', IsLand: false },
      { ZipCode: 434, Name: '龍井區', IsLand: false },
      { ZipCode: 435, Name: '梧棲區', IsLand: false },
      { ZipCode: 436, Name: '清水區', IsLand: false },
      { ZipCode: 437, Name: '大甲區', IsLand: false },
      { ZipCode: 438, Name: '外埔區', IsLand: false },
      { ZipCode: 439, Name: '大安區', IsLand: false }
    ],
    Name: '台中市'
  },
  {
    Name: '彰化縣',
    AreaList: [
      { ZipCode: 500, Name: '彰化市', IsLand: false },
      { ZipCode: 502, Name: '芬園鄉', IsLand: false },
      { ZipCode: 503, Name: '花壇鄉', IsLand: false },
      { ZipCode: 504, Name: '秀水鄉', IsLand: false },
      { ZipCode: 505, Name: '鹿港鎮', IsLand: false },
      { ZipCode: 506, Name: '福興鄉', IsLand: false },
      { ZipCode: 507, Name: '線西鄉', IsLand: false },
      { ZipCode: 508, Name: '和美鎮', IsLand: false },
      { ZipCode: 509, Name: '伸港鄉', IsLand: false },
      { ZipCode: 510, Name: '員林鎮', IsLand: false },
      { ZipCode: 511, Name: '社頭鄉', IsLand: false },
      { ZipCode: 512, Name: '永靖鄉', IsLand: false },
      { ZipCode: 513, Name: '埔心鄉', IsLand: false },
      { ZipCode: 514, Name: '溪湖鎮', IsLand: false },
      { ZipCode: 515, Name: '大村鄉', IsLand: false },
      { ZipCode: 516, Name: '埔鹽鄉', IsLand: false },
      { ZipCode: 520, Name: '田中鎮', IsLand: false },
      { ZipCode: 521, Name: '北斗鎮', IsLand: false },
      { ZipCode: 522, Name: '田尾鄉', IsLand: false },
      { ZipCode: 523, Name: '埤頭鄉', IsLand: false },
      { ZipCode: 524, Name: '溪州鄉', IsLand: false },
      { ZipCode: 525, Name: '竹塘鄉', IsLand: false },
      { ZipCode: 526, Name: '二林鎮', IsLand: false },
      { ZipCode: 527, Name: '大城鄉', IsLand: false },
      { ZipCode: 528, Name: '芳苑鄉', IsLand: false },
      { ZipCode: 530, Name: '二水鄉', IsLand: false }
    ]
  },
  {
    Name: '南投縣',
    AreaList: [
      { ZipCode: 540, Name: '南投市', IsLand: false },
      { ZipCode: 541, Name: '中寮鄉', IsLand: false },
      { ZipCode: 542, Name: '草屯鎮', IsLand: false },
      { ZipCode: 544, Name: '國姓鄉', IsLand: false },
      { ZipCode: 545, Name: '埔里鎮', IsLand: false },
      { ZipCode: 546, Name: '仁愛鄉', IsLand: false },
      { ZipCode: 551, Name: '名間鄉', IsLand: false },
      { ZipCode: 552, Name: '集集鎮', IsLand: true },
      { ZipCode: 553, Name: '水里鄉', IsLand: false },
      { ZipCode: 555, Name: '魚池鄉', IsLand: false },
      { ZipCode: 556, Name: '信義鄉', IsLand: true },
      { ZipCode: 557, Name: '竹山鎮', IsLand: false },
      { ZipCode: 558, Name: '鹿谷鄉', IsLand: false }
    ]
  },
  {
    AreaList: [{ ZipCode: 600, Name: '嘉義市', IsLand: false }],
    Name: '嘉義市'
  },
  {
    Name: '嘉義縣',
    AreaList: [
      { ZipCode: 602, Name: '番路鄉', IsLand: true },
      { ZipCode: 603, Name: '梅山鄉', IsLand: false },
      { ZipCode: 604, Name: '竹崎鄉', IsLand: true },
      { ZipCode: 605, Name: '阿里山鄉', IsLand: true },
      { ZipCode: 606, Name: '中埔鄉', IsLand: true },
      { ZipCode: 607, Name: '大埔鄉', IsLand: true },
      { ZipCode: 608, Name: '水上鄉', IsLand: false },
      { ZipCode: 611, Name: '鹿草鄉', IsLand: false },
      { ZipCode: 612, Name: '太保市', IsLand: false },
      { ZipCode: 613, Name: '朴子市', IsLand: false },
      { ZipCode: 614, Name: '東石鄉', IsLand: false },
      { ZipCode: 615, Name: '六腳鄉', IsLand: false },
      { ZipCode: 616, Name: '新港鄉', IsLand: false },
      { ZipCode: 621, Name: '民雄鄉', IsLand: false },
      { ZipCode: 622, Name: '大林鎮', IsLand: false },
      { ZipCode: 623, Name: '溪口鄉', IsLand: false },
      { ZipCode: 624, Name: '義竹鄉', IsLand: false },
      { ZipCode: 625, Name: '布袋鎮', IsLand: false }
    ]
  },
  {
    Name: '雲林縣',
    AreaList: [
      { ZipCode: 630, Name: '斗南鎮', IsLand: false },
      { ZipCode: 631, Name: '大埤鄉', IsLand: false },
      { ZipCode: 632, Name: '虎尾鎮', IsLand: false },
      { ZipCode: 633, Name: '土庫鎮', IsLand: false },
      { ZipCode: 634, Name: '褒忠鄉', IsLand: false },
      { ZipCode: 635, Name: '東勢鄉', IsLand: false },
      { ZipCode: 636, Name: '台西鄉', IsLand: false },
      { ZipCode: 637, Name: '崙背鄉', IsLand: false },
      { ZipCode: 638, Name: '麥寮鄉', IsLand: false },
      { ZipCode: 640, Name: '斗六市', IsLand: false },
      { ZipCode: 643, Name: '林內鄉', IsLand: false },
      { ZipCode: 646, Name: '古坑鄉', IsLand: false },
      { ZipCode: 647, Name: '莿桐鄉', IsLand: false },
      { ZipCode: 648, Name: '西螺鎮', IsLand: false },
      { ZipCode: 649, Name: '二崙鄉', IsLand: false },
      { ZipCode: 651, Name: '北港鎮', IsLand: false },
      { ZipCode: 652, Name: '水林鄉', IsLand: false },
      { ZipCode: 653, Name: '口湖鄉', IsLand: false },
      { ZipCode: 654, Name: '四湖鄉', IsLand: false },
      { ZipCode: 655, Name: '元長鄉', IsLand: false }
    ]
  },
  {
    Name: '台南市',
    AreaList: [
      { ZipCode: 700, Name: '中西區', IsLand: true },
      { ZipCode: 701, Name: '東區', IsLand: false },
      { ZipCode: 702, Name: '南區', IsLand: false },
      { ZipCode: 704, Name: '北區', IsLand: false },
      { ZipCode: 708, Name: '安平區', IsLand: false },
      { ZipCode: 709, Name: '安南區', IsLand: false },
      { ZipCode: 710, Name: '永康區', IsLand: false },
      { ZipCode: 711, Name: '歸仁區', IsLand: false },
      { ZipCode: 712, Name: '新化區', IsLand: false },
      { ZipCode: 713, Name: '左鎮區', IsLand: false },
      { ZipCode: 714, Name: '玉井區', IsLand: false },
      { ZipCode: 715, Name: '楠西區', IsLand: false },
      { ZipCode: 716, Name: '南化區', IsLand: false },
      { ZipCode: 717, Name: '仁德區', IsLand: false },
      { ZipCode: 718, Name: '關廟區', IsLand: false },
      { ZipCode: 719, Name: '龍崎區', IsLand: false },
      { ZipCode: 720, Name: '官田區', IsLand: false },
      { ZipCode: 721, Name: '麻豆區', IsLand: false },
      { ZipCode: 722, Name: '佳里區', IsLand: false },
      { ZipCode: 723, Name: '西港區', IsLand: false },
      { ZipCode: 724, Name: '七股區', IsLand: false },
      { ZipCode: 725, Name: '將軍區', IsLand: false },
      { ZipCode: 726, Name: '學甲區', IsLand: false },
      { ZipCode: 727, Name: '北門區', IsLand: false },
      { ZipCode: 730, Name: '新營區', IsLand: false },
      { ZipCode: 731, Name: '後壁區', IsLand: false },
      { ZipCode: 732, Name: '白河區', IsLand: false },
      { ZipCode: 733, Name: '東山區', IsLand: false },
      { ZipCode: 734, Name: '六甲區', IsLand: false },
      { ZipCode: 735, Name: '下營區', IsLand: false },
      { ZipCode: 736, Name: '柳營區', IsLand: false },
      { ZipCode: 737, Name: '鹽水區', IsLand: false },
      { ZipCode: 741, Name: '善化區', IsLand: false },
      { ZipCode: 742, Name: '大內區', IsLand: false },
      { ZipCode: 743, Name: '山上區', IsLand: false },
      { ZipCode: 744, Name: '新市區', IsLand: false },
      { ZipCode: 745, Name: '安定區', IsLand: false }
    ]
  },
  {
    Name: '高雄市',
    AreaList: [
      { ZipCode: 800, Name: '新興區', IsLand: false },
      { ZipCode: 801, Name: '前金區', IsLand: false },
      { ZipCode: 802, Name: '苓雅區', IsLand: false },
      { ZipCode: 803, Name: '鹽埕區', IsLand: false },
      { ZipCode: 804, Name: '鼓山區', IsLand: false },
      { ZipCode: 805, Name: '旗津區', IsLand: false },
      { ZipCode: 806, Name: '前鎮區', IsLand: false },
      { ZipCode: 807, Name: '三民區', IsLand: false },
      { ZipCode: 811, Name: '楠梓區', IsLand: false },
      { ZipCode: 812, Name: '小港區', IsLand: false },
      { ZipCode: 813, Name: '左營區', IsLand: false },
      { ZipCode: 814, Name: '仁武區', IsLand: false },
      { ZipCode: 815, Name: '大社區', IsLand: false },
      { ZipCode: 820, Name: '岡山區', IsLand: false },
      { ZipCode: 821, Name: '路竹區', IsLand: false },
      { ZipCode: 822, Name: '阿蓮區', IsLand: false },
      { ZipCode: 823, Name: '田寮區', IsLand: false },
      { ZipCode: 824, Name: '燕巢區', IsLand: false },
      { ZipCode: 825, Name: '橋頭區', IsLand: false },
      { ZipCode: 826, Name: '梓官區', IsLand: false },
      { ZipCode: 827, Name: '彌陀區', IsLand: false },
      { ZipCode: 828, Name: '永安區', IsLand: false },
      { ZipCode: 829, Name: '湖內區', IsLand: false },
      { ZipCode: 830, Name: '鳳山區', IsLand: false },
      { ZipCode: 831, Name: '大寮區', IsLand: false },
      { ZipCode: 832, Name: '林園區', IsLand: false },
      { ZipCode: 833, Name: '鳥松區', IsLand: false },
      { ZipCode: 840, Name: '大樹區', IsLand: false },
      { ZipCode: 842, Name: '旗山區', IsLand: false },
      { ZipCode: 843, Name: '美濃區', IsLand: false },
      { ZipCode: 844, Name: '六龜區', IsLand: false },
      { ZipCode: 845, Name: '內門區', IsLand: false },
      { ZipCode: 846, Name: '杉林區', IsLand: false },
      { ZipCode: 847, Name: '甲仙區', IsLand: false },
      { ZipCode: 848, Name: '桃源區', IsLand: true },
      { ZipCode: 849, Name: '那瑪夏區', IsLand: true },
      { ZipCode: 851, Name: '茂林區', IsLand: true },
      { ZipCode: 852, Name: '茄萣區', IsLand: false }
    ]
  },
  {
    Name: '南海諸島',
    AreaList: [
      { ZipCode: 817, Name: '南海島東沙群島', IsLand: true },
      { ZipCode: 819, Name: '南海島東沙群島', IsLand: true }
    ]
  },
  {
    Name: '澎湖縣',
    AreaList: [
      { ZipCode: 880, Name: '馬公市', IsLand: true },
      { ZipCode: 881, Name: '西嶼鄉', IsLand: true },
      { ZipCode: 882, Name: '望安鄉', IsLand: true },
      { ZipCode: 883, Name: '七美鄉', IsLand: true },
      { ZipCode: 884, Name: '白沙鄉', IsLand: true },
      { ZipCode: 885, Name: '湖西鄉', IsLand: true }
    ]
  },
  {
    Name: '金門縣',
    AreaList: [
      { ZipCode: 890, Name: '金沙鎮', IsLand: true },
      { ZipCode: 891, Name: '金湖鎮', IsLand: true },
      { ZipCode: 892, Name: '金寧鄉', IsLand: true },
      { ZipCode: 893, Name: '金城鎮', IsLand: true },
      { ZipCode: 894, Name: '烈嶼鄉', IsLand: true },
      { ZipCode: 896, Name: '烏坵鄉', IsLand: true }
    ]
  },
  {
    Name: '屏東縣',
    AreaList: [
      { ZipCode: 900, Name: '屏東市', IsLand: false },
      { ZipCode: 901, Name: '三地門鄉', IsLand: true },
      { ZipCode: 902, Name: '霧台鄉', IsLand: true },
      { ZipCode: 903, Name: '瑪家鄉', IsLand: true },
      { ZipCode: 904, Name: '九如鄉', IsLand: false },
      { ZipCode: 905, Name: '里港鄉', IsLand: false },
      { ZipCode: 906, Name: '高樹鄉', IsLand: true },
      { ZipCode: 907, Name: '鹽埔鄉', IsLand: false },
      { ZipCode: 908, Name: '長治鄉', IsLand: false },
      { ZipCode: 909, Name: '麟洛鄉', IsLand: false },
      { ZipCode: 911, Name: '竹田鄉', IsLand: false },
      { ZipCode: 912, Name: '內埔鄉', IsLand: false },
      { ZipCode: 913, Name: '萬丹鄉', IsLand: false },
      { ZipCode: 920, Name: '潮州鎮', IsLand: false },
      { ZipCode: 921, Name: '泰武鄉', IsLand: true },
      { ZipCode: 922, Name: '來義鄉', IsLand: true },
      { ZipCode: 923, Name: '萬巒鄉', IsLand: true },
      { ZipCode: 924, Name: '崁頂鄉', IsLand: false },
      { ZipCode: 925, Name: '新埤鄉', IsLand: false },
      { ZipCode: 926, Name: '南州鄉', IsLand: true },
      { ZipCode: 927, Name: '林邊鄉', IsLand: false },
      { ZipCode: 928, Name: '東港鎮', IsLand: false },
      { ZipCode: 929, Name: '琉球鄉', IsLand: true },
      { ZipCode: 931, Name: '佳冬鄉', IsLand: false },
      { ZipCode: 932, Name: '新園鄉', IsLand: false },
      { ZipCode: 940, Name: '枋寮鄉', IsLand: false },
      { ZipCode: 941, Name: '枋山鄉', IsLand: true },
      { ZipCode: 942, Name: '春日鄉', IsLand: true },
      { ZipCode: 943, Name: '獅子鄉', IsLand: true },
      { ZipCode: 944, Name: '車城鄉', IsLand: true },
      { ZipCode: 945, Name: '牡丹鄉', IsLand: true },
      { ZipCode: 946, Name: '恆春鎮', IsLand: true },
      { ZipCode: 947, Name: '滿州鄉', IsLand: true }
    ]
  },
  {
    Name: '台東縣',
    AreaList: [
      { ZipCode: 950, Name: '台東市', IsLand: false },
      { ZipCode: 951, Name: '綠島鄉', IsLand: true },
      { ZipCode: 952, Name: '蘭嶼鄉', IsLand: true },
      { ZipCode: 953, Name: '延平鄉', IsLand: true },
      { ZipCode: 954, Name: '卑南鄉', IsLand: false },
      { ZipCode: 955, Name: '鹿野鄉', IsLand: false },
      { ZipCode: 956, Name: '關山鎮', IsLand: false },
      { ZipCode: 957, Name: '海端鄉', IsLand: true },
      { ZipCode: 958, Name: '池上鄉', IsLand: true },
      { ZipCode: 959, Name: '東河鄉', IsLand: true },
      { ZipCode: 961, Name: '成功鎮', IsLand: false },
      { ZipCode: 962, Name: '長濱鄉', IsLand: false },
      { ZipCode: 963, Name: '太麻里鄉', IsLand: false },
      { ZipCode: 964, Name: '金峰鄉', IsLand: true },
      { ZipCode: 965, Name: '大武鄉', IsLand: true },
      { ZipCode: 966, Name: '達仁鄉', IsLand: true }
    ]
  },
  {
    Name: '花蓮縣',
    AreaList: [
      { ZipCode: 970, Name: '花蓮市', IsLand: false },
      { ZipCode: 971, Name: '新城鄉', IsLand: false },
      { ZipCode: 972, Name: '秀林鄉', IsLand: true },
      { ZipCode: 973, Name: '吉安鄉', IsLand: false },
      { ZipCode: 974, Name: '壽豐鄉', IsLand: false },
      { ZipCode: 975, Name: '鳳林鎮', IsLand: false },
      { ZipCode: 976, Name: '光復鄉', IsLand: false },
      { ZipCode: 977, Name: '豐濱鄉', IsLand: false },
      { ZipCode: 978, Name: '瑞穗鄉', IsLand: true },
      { ZipCode: 979, Name: '萬榮鄉', IsLand: false },
      { ZipCode: 981, Name: '玉里鎮', IsLand: false },
      { ZipCode: 982, Name: '卓溪鄉', IsLand: false },
      { ZipCode: 983, Name: '富里鄉', IsLand: false }
    ]
  }
]

export const executeValidateField = ({ fieldName, fieldValue }) => {
  const validations = {
    name: {
      required: true,
      pattern: {
        RegExp: /^[a-zA-z\u4e00-\u9ffa5,.'-]{2,}$/i,
        message: '請輸入正確姓名'
      }
    },
    email: {
      required: true,
      pattern: {
        RegExp:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: '請輸入正確信箱',
        clearInvalidInput: ''
      },
      encryption: {
        value: true,
        excryFn: inputValue => {
          const accountArr = inputValue.split('@')[0].split('')
          const suffix = inputValue.split('@')[1]
          accountArr.forEach((item, index, arr) => {
            index % 2 === 1 ? (arr[index] = '*') : (arr[index] = item)
          })
          const encrypVal = `${accountArr.join('')}@${suffix}`
          return encrypVal
        }
      }
    },
    phone: {
      required: true,
      pattern: {
        RegExp: /(\w{2,3}-?|\(\w{2,3}\))\w{3,4}-?\w{4}|09\w{2}(\w{6}|-\w{3}-\w{3})/,
        message: '請輸入正確電話號碼',
        clearInvalidInput: ''
      }
    },
    competitionID: {
      required: true,
      pattern: {
        RegExp: /^[A-Za-z\u4e00-\u9fa5]{1,20}$/,
        message: '不可輸入特殊符號',
        clearInvalidInput: ''
      }
    },
    selfIntro: {
      required: true
    },
    detailAddress: {
      required: true
    },
    privacy: {
      required: true
    },
    portrait: {
      required: true
    }
  }

  let errMsg = ''
  let encryptVal = ''
  const verifiedItem = validations[fieldName]
  if (verifiedItem) {
    //required
    if (verifiedItem.required && !fieldValue) {
      errMsg = '此欄位為必填項目'
    }
    //Pattern
    let passRegExp = true
    const pattern = verifiedItem.pattern
    if (fieldValue && pattern && !pattern.RegExp.test(fieldValue)) {
      passRegExp = false
      errMsg = pattern.message
    }

    //Encryption
    if (fieldValue && passRegExp && verifiedItem.encryption) {
      encryptVal = verifiedItem.encryption.excryFn(fieldValue)
    }
  }
  return { errMsg, encryptVal }
}

export const validController = objectToBeTested => {
  const requiredFormItem = [
    'name',
    'email',
    'phone',
    'groups',
    'competitionID',
    'selfIntro',
    'years',
    'months',
    'days',
    'district',
    'detailAddress',
    'photo1',
    'privacy',
    'portrait'
  ]
  let completeStatus = false
  try {
    requiredFormItem.forEach(item => {
      if (
        !objectToBeTested[item].value ||
        Object.values(objectToBeTested[item].value).some(value => value === '') ||
        objectToBeTested[item].errMsg
      ) {
        throw false
      }
      completeStatus = true
    })
  } catch (err) {
    completeStatus = err
  }
  return completeStatus
}
