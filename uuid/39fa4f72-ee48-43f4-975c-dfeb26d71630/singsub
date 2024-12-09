{
  "log": {
    "disabled": false,
    "level": "fatal",
    "timestamp": true
  },
  "experimental": {
    "clash_api": {
      "external_controller": "0.0.0.0:9090",
      "external_ui": "../files/yacd",
      "external_ui_download_url": "https://github.com/MetaCubeX/Yacd-meta/archive/gh-pages.zip",
      "secret": "",
      "default_mode": "rule"
    },
    "cache_file": {
      "enabled": true,
      "store_fakeip": true
    }
  },
  "dns": {
    "servers": [
      {
        "address": "tls://8.8.8.8",
        "address_resolver": "dns-direct",
        "tag": "dns-remote"
      },
      {
        "address": "https://dns.digitalsize.net/dns-query",
        "address_resolver": "dns-plain",
        "detour": "direct",
        "tag": "dns-direct"
      },
      {
        "address": "8.8.8.8",
        "address_resolver": "dns-local",
        "detour": "direct",
        "tag": "dns-plain"
      },
      {
        "address": "local",
        "detour": "direct",
        "tag": "dns-local"
      },
      {
        "address": "rcode://success",
        "tag": "dns-block"
      },
      {
        "address": "fakeip",
        "strategy": "ipv4_only",
        "tag": "dns-fake"
      }
    ],
    "rules": [
      {
        "domain_suffix": [
          ".ir"
        ],
        "server": "dns-local"
      },
      {
        "rule_set": [
          "geosite-ir"
        ],
        "server": "dns-local"
      },
      {
        "outbound": "any",
        "server": "dns-direct"
      },
      {
        "disable_cache": true,
        "inbound": [
          "tun-in"
        ],
        "query_type": [
          "A",
          "AAAA"
        ],
        "server": "dns-fake"
      }
    ],
    "final": "dns-remote",
    "reverse_mapping": true,
    "strategy": "prefer_ipv4",
    "independent_cache": true,
    "fakeip": {
      "enabled": true,
      "inet4_range": "198.18.0.0/15",
      "inet6_range": "fc00::/18"
    }
  },
  "inbounds": [
    {
      "listen": "0.0.0.0",
      "listen_port": 6450,
      "override_address": "8.8.8.8",
      "override_port": 53,
      "tag": "dns-in",
      "type": "direct"
    },
    {
      "type": "tun",
      "tag": "tun-in",
      "interface_name": "tun0",
      "address": [
        "172.19.0.1/28",
        "fdfe:dcba:9876::1/126"
      ],
      "mtu": 1500,
      "auto_route": true,
      "strict_route": true,
      "stack": "system",
      "endpoint_independent_nat": true,
      "sniff": true,
      "sniff_override_destination": false
    },
    {
      "listen": "0.0.0.0",
      "listen_port": 2080,
      "sniff": true,
      "sniff_override_destination": false,
      "tag": "mixed-in",
      "type": "mixed"
    }
  ],
  "outbounds": [
    {
      "tag": "proxy",
      "type": "selector",
      "outbounds": [
        "URL-TEST",
        "1.WS_worker-jolly-glitter-4026.behebo3543.workers.dev",
        "2.WS_worker-fancy-dawn-95ce.delelac408.workers.dev",
        "3.WS_worker-patient-feather-008f.nigiv19673488.workers.dev",
        "4.WS_worker-jolly-wind-9900.loyeg208429244.workers.dev",
        "5.WS_hello-world-summer.ciyapo89104656.workers.dev",
        "6.WS_worker-royal-dream-abe4.nelemit482.workers.dev",
        "7.WS_worker-patient-poetry-2664.xaviyi79713307.workers.dev",
        "8.WS_worker-white-violet-4932.conos72495.workers.dev",
        "9.WS_worker-ancient-credit-e712.cakaxis510.workers.dev",
        "10.WS_worker-shy-shadow-16be.lanihi8359.workers.dev",
        "11.WS_worker-cold-base-8d04.xexer3509625.workers.dev",
        "12.WS_worker-green-lab-ec7d.kifol7170846.workers.dev",
        "13.WS_worker-cold-hat-ac26.vosira42314853.workers.dev",
        "14.WS_worker-sweet-sky-65fa.xawoc843846295.workers.dev",
        "15.WS_hello-world-wispy.rewah709861910.workers.dev",
        "16.WS_hello-world-purple.vivecil650202.workers.dev",
        "17.WS_worker-royal-mode-7f2.xexer3509625.workers.dev",
        "18.WS_worker-floral-snow-8ad7.topah684115784.workers.dev",
        "19.WS_hello-world-aged-credit-ab62.kegag40987.workers.dev",
        "20.WS_worker-sweet-grass-c13d.jameb91780.workers.dev",
        "21.WS_worker-polished-thunder-b76.vabex76694.workers.dev",
        "22.WS_flat-scene-697d.vebiyo9904.workers.dev",
        "23.WS_hello-world1.yofigey7761658.workers.dev",
        "24.WS_worker-mute-sky-6cdc.renesok5743819.workers.dev",
        "25.WS_worker-calm-snow-a135.jivep17561.workers.dev",
        "26.WS_worker-wandering-breeze-558f.libit96375.workers.dev",
        "27.WS_worker-restless-hat-a207.horini5085.workers.dev",
        "28.WS_worker-muddy-mud-80b0.yasad98332.workers.dev",
        "29.WS_worker-broken-limit-3fdd.ritexo49405047.workers.dev",
        "30.WS_worker-square-credit-266.voregi30768721.workers.dev",
        "31.WS_worker-still-bread-58a5.wopase7569.workers.dev",
        "32.WS_worker-autumn-limit-cda8.wonoke5503.workers.dev",
        "33.WS_worker-lively-dawn-7758.kepete84026434.workers.dev",
        "34.WS_hello-world-fancy.fodimet674395.workers.dev",
        "35.WS_worker-damp-mud-2037.vepoki35667904.workers.dev",
        "36.WS_hello-world-restless3.lelibe23561755.workers.dev",
        "37.WS_hello-world-cold-firefly-2f0.xawatit7388876.workers.dev",
        "38.WS_hello-world-tiny-sky-185b.jowihe66665102.workers.dev",
        "39.WS_worker-muddy-smoke-8ab.xaxom25638790.workers.dev",
        "40.WS_hello-world1.neroda58356546.workers.dev",
        "41.WS_worker-yellow-band-d54b.pomot263322431.workers.dev",
        "42.WS_hello-world-icy-firefly-047e.kagigal9105857.workers.dev",
        "43.WS_heheh.doxivi75166473.workers.dev",
        "44.WS_worker-aged-firefly-f12f.jisirof4606348.workers.dev",
        "45.WS_worker-rapid-wood-2a3.voxigi99841388.workers.dev",
        "46.TLS_worker-patient-feather-008f.nigiv19673488.workers.dev",
        "47.TLS_corafap622.pages.dev",
        "48.TLS_ritexo4940.pages.dev",
        "49.TLS_69901ae8.dorefa9190.pages.dev",
        "50.TLS_worker-fancy-dawn-95ce.delelac408.workers.dev",
        "51.TLS_renesok574.pages.dev",
        "52.TLS_mitid53210.pages.dev",
        "53.TLS_nigiv19673.pages.dev",
        "54.TLS_heheh.doxivi75166473.workers.dev",
        "55.TLS_hello-world-purple.vivecil650202.workers.dev",
        "56.TLS_worker-cold-hat-ac26.vosira42314853.workers.dev",
        "57.TLS_potiv98445.pages.dev",
        "58.TLS_pahose8240.pages.dev",
        "59.TLS_worker-calm-snow-a135.jivep17561.workers.dev",
        "60.TLS_hello-world-icy-firefly-047e.kagigal9105857.workers.dev",
        "61.TLS_worker-rapid-wood-2a3.voxigi99841388.workers.dev",
        "62.TLS_hello-world-summer.ciyapo89104656.workers.dev",
        "63.TLS_worker-sweet-grass-c13d.jameb91780.workers.dev",
        "64.TLS_gicih84774.pages.dev",
        "65.TLS_worker-autumn-limit-cda8.wonoke5503.workers.dev",
        "66.TLS_hejaw18456.pages.dev",
        "67.TLS_worker-white-violet-4932.conos72495.workers.dev",
        "68.TLS_pojihe2933.pages.dev",
        "69.TLS_hello-world-wispy.rewah709861910.workers.dev",
        "70.TLS_diyovo3977.pages.dev",
        "71.TLS_jotic55393.pages.dev",
        "72.TLS_wenise9964.pages.dev",
        "73.TLS_balitac173.pages.dev",
        "74.TLS_worker-patient-poetry-2664.xaviyi79713307.workers.dev",
        "75.TLS_worker-green-lab-ec7d.kifol7170846.workers.dev",
        "76.TLS_worker-broken-limit-3fdd.ritexo49405047.workers.dev",
        "77.TLS_worker-still-bread-58a5.wopase7569.workers.dev",
        "78.TLS_worker-wandering-breeze-558f.libit96375.workers.dev",
        "79.TLS_worker-aged-firefly-f12f.jisirof4606348.workers.dev",
        "80.TLS_pomot26332.pages.dev",
        "81.TLS_worker-sweet-sky-65fa.xawoc843846295.workers.dev",
        "82.TLS_worker-jolly-wind-9900.loyeg208429244.workers.dev",
        "83.TLS_worker-square-credit-266.voregi30768721.workers.dev",
        "84.TLS_hokibog915.pages.dev",
        "85.TLS_worker-polished-thunder-b76.vabex76694.workers.dev",
        "86.TLS_vodoyo1710.pages.dev",
        "87.TLS_worker-mute-sky-6cdc.renesok5743819.workers.dev",
        "88.TLS_worker-lively-dawn-7758.kepete84026434.workers.dev",
        "89.TLS_hello-world-restless3.lelibe23561755.workers.dev",
        "90.TLS_wonoke5503.pages.dev",
        "91.TLS_mowirix651.pages.dev",
        "92.TLS_lokocad452.pages.dev",
        "93.TLS_worker-royal-mode-7f2.xexer3509625.workers.dev",
        "94.TLS_worker-ancient-credit-e712.cakaxis510.workers.dev",
        "95.TLS_worker-shy-shadow-16be.lanihi8359.workers.dev",
        "96.TLS_worker-floral-snow-8ad7.topah684115784.workers.dev",
        "97.TLS_cakaxis510.pages.dev",
        "98.TLS_hello-world1.neroda58356546.workers.dev",
        "99.TLS_hello-world-fancy.fodimet674395.workers.dev",
        "100.TLS_worker-jolly-glitter-4026.behebo3543.workers.dev",
        "101.TLS_hello-world-cold-firefly-2f0.xawatit7388876.workers.dev",
        "102.TLS_worker-royal-dream-abe4.nelemit482.workers.dev",
        "103.TLS_hello-world-tiny-sky-185b.jowihe66665102.workers.dev",
        "104.TLS_worker-cold-base-8d04.xexer3509625.workers.dev",
        "105.TLS_flat-scene-697d.vebiyo9904.workers.dev",
        "106.TLS_hello-world1.yofigey7761658.workers.dev",
        "107.TLS_worker-muddy-mud-80b0.yasad98332.workers.dev",
        "108.TLS_worker-yellow-band-d54b.pomot263322431.workers.dev",
        "109.TLS_hello-world-aged-credit-ab62.kegag40987.workers.dev",
        "110.TLS_nihenab866.pages.dev",
        "111.TLS_worker-restless-hat-a207.horini5085.workers.dev",
        "112.TLS_worker-muddy-smoke-8ab.xaxom25638790.workers.dev",
        "113.TLS_worker-damp-mud-2037.vepoki35667904.workers.dev"
      ]
    },
    {
      "tag": "URL-TEST",
      "type": "urltest",
      "outbounds": [
        "1.WS_worker-jolly-glitter-4026.behebo3543.workers.dev",
        "2.WS_worker-fancy-dawn-95ce.delelac408.workers.dev",
        "3.WS_worker-patient-feather-008f.nigiv19673488.workers.dev",
        "4.WS_worker-jolly-wind-9900.loyeg208429244.workers.dev",
        "5.WS_hello-world-summer.ciyapo89104656.workers.dev",
        "6.WS_worker-royal-dream-abe4.nelemit482.workers.dev",
        "7.WS_worker-patient-poetry-2664.xaviyi79713307.workers.dev",
        "8.WS_worker-white-violet-4932.conos72495.workers.dev",
        "9.WS_worker-ancient-credit-e712.cakaxis510.workers.dev",
        "10.WS_worker-shy-shadow-16be.lanihi8359.workers.dev",
        "11.WS_worker-cold-base-8d04.xexer3509625.workers.dev",
        "12.WS_worker-green-lab-ec7d.kifol7170846.workers.dev",
        "13.WS_worker-cold-hat-ac26.vosira42314853.workers.dev",
        "14.WS_worker-sweet-sky-65fa.xawoc843846295.workers.dev",
        "15.WS_hello-world-wispy.rewah709861910.workers.dev",
        "16.WS_hello-world-purple.vivecil650202.workers.dev",
        "17.WS_worker-royal-mode-7f2.xexer3509625.workers.dev",
        "18.WS_worker-floral-snow-8ad7.topah684115784.workers.dev",
        "19.WS_hello-world-aged-credit-ab62.kegag40987.workers.dev",
        "20.WS_worker-sweet-grass-c13d.jameb91780.workers.dev",
        "21.WS_worker-polished-thunder-b76.vabex76694.workers.dev",
        "22.WS_flat-scene-697d.vebiyo9904.workers.dev",
        "23.WS_hello-world1.yofigey7761658.workers.dev",
        "24.WS_worker-mute-sky-6cdc.renesok5743819.workers.dev",
        "25.WS_worker-calm-snow-a135.jivep17561.workers.dev",
        "26.WS_worker-wandering-breeze-558f.libit96375.workers.dev",
        "27.WS_worker-restless-hat-a207.horini5085.workers.dev",
        "28.WS_worker-muddy-mud-80b0.yasad98332.workers.dev",
        "29.WS_worker-broken-limit-3fdd.ritexo49405047.workers.dev",
        "30.WS_worker-square-credit-266.voregi30768721.workers.dev",
        "31.WS_worker-still-bread-58a5.wopase7569.workers.dev",
        "32.WS_worker-autumn-limit-cda8.wonoke5503.workers.dev",
        "33.WS_worker-lively-dawn-7758.kepete84026434.workers.dev",
        "34.WS_hello-world-fancy.fodimet674395.workers.dev",
        "35.WS_worker-damp-mud-2037.vepoki35667904.workers.dev",
        "36.WS_hello-world-restless3.lelibe23561755.workers.dev",
        "37.WS_hello-world-cold-firefly-2f0.xawatit7388876.workers.dev",
        "38.WS_hello-world-tiny-sky-185b.jowihe66665102.workers.dev",
        "39.WS_worker-muddy-smoke-8ab.xaxom25638790.workers.dev",
        "40.WS_hello-world1.neroda58356546.workers.dev",
        "41.WS_worker-yellow-band-d54b.pomot263322431.workers.dev",
        "42.WS_hello-world-icy-firefly-047e.kagigal9105857.workers.dev",
        "43.WS_heheh.doxivi75166473.workers.dev",
        "44.WS_worker-aged-firefly-f12f.jisirof4606348.workers.dev",
        "45.WS_worker-rapid-wood-2a3.voxigi99841388.workers.dev",
        "46.TLS_worker-patient-feather-008f.nigiv19673488.workers.dev",
        "47.TLS_corafap622.pages.dev",
        "48.TLS_ritexo4940.pages.dev",
        "49.TLS_69901ae8.dorefa9190.pages.dev",
        "50.TLS_worker-fancy-dawn-95ce.delelac408.workers.dev",
        "51.TLS_renesok574.pages.dev",
        "52.TLS_mitid53210.pages.dev",
        "53.TLS_nigiv19673.pages.dev",
        "54.TLS_heheh.doxivi75166473.workers.dev",
        "55.TLS_hello-world-purple.vivecil650202.workers.dev",
        "56.TLS_worker-cold-hat-ac26.vosira42314853.workers.dev",
        "57.TLS_potiv98445.pages.dev",
        "58.TLS_pahose8240.pages.dev",
        "59.TLS_worker-calm-snow-a135.jivep17561.workers.dev",
        "60.TLS_hello-world-icy-firefly-047e.kagigal9105857.workers.dev",
        "61.TLS_worker-rapid-wood-2a3.voxigi99841388.workers.dev",
        "62.TLS_hello-world-summer.ciyapo89104656.workers.dev",
        "63.TLS_worker-sweet-grass-c13d.jameb91780.workers.dev",
        "64.TLS_gicih84774.pages.dev",
        "65.TLS_worker-autumn-limit-cda8.wonoke5503.workers.dev",
        "66.TLS_hejaw18456.pages.dev",
        "67.TLS_worker-white-violet-4932.conos72495.workers.dev",
        "68.TLS_pojihe2933.pages.dev",
        "69.TLS_hello-world-wispy.rewah709861910.workers.dev",
        "70.TLS_diyovo3977.pages.dev",
        "71.TLS_jotic55393.pages.dev",
        "72.TLS_wenise9964.pages.dev",
        "73.TLS_balitac173.pages.dev",
        "74.TLS_worker-patient-poetry-2664.xaviyi79713307.workers.dev",
        "75.TLS_worker-green-lab-ec7d.kifol7170846.workers.dev",
        "76.TLS_worker-broken-limit-3fdd.ritexo49405047.workers.dev",
        "77.TLS_worker-still-bread-58a5.wopase7569.workers.dev",
        "78.TLS_worker-wandering-breeze-558f.libit96375.workers.dev",
        "79.TLS_worker-aged-firefly-f12f.jisirof4606348.workers.dev",
        "80.TLS_pomot26332.pages.dev",
        "81.TLS_worker-sweet-sky-65fa.xawoc843846295.workers.dev",
        "82.TLS_worker-jolly-wind-9900.loyeg208429244.workers.dev",
        "83.TLS_worker-square-credit-266.voregi30768721.workers.dev",
        "84.TLS_hokibog915.pages.dev",
        "85.TLS_worker-polished-thunder-b76.vabex76694.workers.dev",
        "86.TLS_vodoyo1710.pages.dev",
        "87.TLS_worker-mute-sky-6cdc.renesok5743819.workers.dev",
        "88.TLS_worker-lively-dawn-7758.kepete84026434.workers.dev",
        "89.TLS_hello-world-restless3.lelibe23561755.workers.dev",
        "90.TLS_wonoke5503.pages.dev",
        "91.TLS_mowirix651.pages.dev",
        "92.TLS_lokocad452.pages.dev",
        "93.TLS_worker-royal-mode-7f2.xexer3509625.workers.dev",
        "94.TLS_worker-ancient-credit-e712.cakaxis510.workers.dev",
        "95.TLS_worker-shy-shadow-16be.lanihi8359.workers.dev",
        "96.TLS_worker-floral-snow-8ad7.topah684115784.workers.dev",
        "97.TLS_cakaxis510.pages.dev",
        "98.TLS_hello-world1.neroda58356546.workers.dev",
        "99.TLS_hello-world-fancy.fodimet674395.workers.dev",
        "100.TLS_worker-jolly-glitter-4026.behebo3543.workers.dev",
        "101.TLS_hello-world-cold-firefly-2f0.xawatit7388876.workers.dev",
        "102.TLS_worker-royal-dream-abe4.nelemit482.workers.dev",
        "103.TLS_hello-world-tiny-sky-185b.jowihe66665102.workers.dev",
        "104.TLS_worker-cold-base-8d04.xexer3509625.workers.dev",
        "105.TLS_flat-scene-697d.vebiyo9904.workers.dev",
        "106.TLS_hello-world1.yofigey7761658.workers.dev",
        "107.TLS_worker-muddy-mud-80b0.yasad98332.workers.dev",
        "108.TLS_worker-yellow-band-d54b.pomot263322431.workers.dev",
        "109.TLS_hello-world-aged-credit-ab62.kegag40987.workers.dev",
        "110.TLS_nihenab866.pages.dev",
        "111.TLS_worker-restless-hat-a207.horini5085.workers.dev",
        "112.TLS_worker-muddy-smoke-8ab.xaxom25638790.workers.dev",
        "113.TLS_worker-damp-mud-2037.vepoki35667904.workers.dev"
      ],
      "url": "https://www.gstatic.com/generate_204",
      "interval": "30m",
      "tolerance": 50
    },
    {
      "tag": "direct",
      "type": "direct"
    },
    {
      "tag": "block",
      "type": "block"
    },
    {
      "tag": "dns-out",
      "type": "dns"
    },
    {
      "type": "vless",
      "tag": "1.WS_worker-jolly-glitter-4026.behebo3543.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "e2120410-485f-40be-8b65-9ef619a950bc",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-jolly-glitter-4026.behebo3543.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "2.WS_worker-fancy-dawn-95ce.delelac408.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "53c3289b-efde-4185-92ce-4ebe486aa534",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-fancy-dawn-95ce.delelac408.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "3.WS_worker-patient-feather-008f.nigiv19673488.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "1722aa12-28eb-421c-a0cb-b16328b51e46",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-patient-feather-008f.nigiv19673488.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "4.WS_worker-jolly-wind-9900.loyeg208429244.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "40f89f30-89f3-4848-9e32-c16d8adfcd43",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-jolly-wind-9900.loyeg208429244.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "5.WS_hello-world-summer.ciyapo89104656.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "9ace2ba2-a445-4529-b5d9-a33e520e43c0",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-summer.ciyapo89104656.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "6.WS_worker-royal-dream-abe4.nelemit482.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "702c1740-8d68-4a67-9de6-7e70b91ef255",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-royal-dream-abe4.nelemit482.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "7.WS_worker-patient-poetry-2664.xaviyi79713307.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "dec47465-17aa-4f00-823e-e407d5329b7f",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-patient-poetry-2664.xaviyi79713307.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "8.WS_worker-white-violet-4932.conos72495.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "0f9190e0-3b43-4034-9f10-0d1459d7d4da",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-white-violet-4932.conos72495.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "9.WS_worker-ancient-credit-e712.cakaxis510.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "05df98ba-7566-4418-99bf-12dafed17871",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-ancient-credit-e712.cakaxis510.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "10.WS_worker-shy-shadow-16be.lanihi8359.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "de6fc376-0303-4fce-b6ae-add6304706b8",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-shy-shadow-16be.lanihi8359.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "11.WS_worker-cold-base-8d04.xexer3509625.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "a7515847-f8ef-405a-92ff-3403651c1e9e",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-cold-base-8d04.xexer3509625.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "12.WS_worker-green-lab-ec7d.kifol7170846.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "c7a832e5-68fa-459d-8419-db849695f84e",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-green-lab-ec7d.kifol7170846.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "13.WS_worker-cold-hat-ac26.vosira42314853.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "58940e19-7510-4660-9555-359bad737de2",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-cold-hat-ac26.vosira42314853.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "14.WS_worker-sweet-sky-65fa.xawoc843846295.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "cbaf244e-eaaf-4747-ba7e-2a90f9454835",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-sweet-sky-65fa.xawoc843846295.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "15.WS_hello-world-wispy.rewah709861910.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "c31e4148-cb69-44a4-a4bb-f88a78396efd",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-wispy.rewah709861910.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "16.WS_hello-world-purple.vivecil650202.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "676972be-d068-41f0-a296-2ee1c326bed5",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-purple.vivecil650202.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "17.WS_worker-royal-mode-7f2.xexer3509625.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "d7d590a8-783f-448a-9d42-fe3513d4d248",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-royal-mode-7f2.xexer3509625.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "18.WS_worker-floral-snow-8ad7.topah684115784.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "559a3313-a160-46c6-8064-bc56cdfae42c",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-floral-snow-8ad7.topah684115784.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "19.WS_hello-world-aged-credit-ab62.kegag40987.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "da943b90-bb03-4b9d-ab97-f3cdc3817209",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-aged-credit-ab62.kegag40987.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "20.WS_worker-sweet-grass-c13d.jameb91780.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "6ce42949-4d5d-4e49-84e1-6d9052d711a3",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-sweet-grass-c13d.jameb91780.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "21.WS_worker-polished-thunder-b76.vabex76694.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "f3f4f193-64ad-4cb5-801f-cc18e112504e",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-polished-thunder-b76.vabex76694.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "22.WS_flat-scene-697d.vebiyo9904.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "246df9ee-2bce-42f0-b1ec-f988c5a99550",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "flat-scene-697d.vebiyo9904.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "23.WS_hello-world1.yofigey7761658.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "3ff177f9-41d9-4459-9fe4-d0e26cd19205",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world1.yofigey7761658.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "24.WS_worker-mute-sky-6cdc.renesok5743819.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "ece65da6-ecef-4193-92e5-856559bb8d39",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-mute-sky-6cdc.renesok5743819.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "25.WS_worker-calm-snow-a135.jivep17561.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "fb5b5db7-3384-4ee8-b103-90158a50847b",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-calm-snow-a135.jivep17561.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "26.WS_worker-wandering-breeze-558f.libit96375.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "6b7b95fa-573e-47ca-abf8-d19afcc9eee7",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-wandering-breeze-558f.libit96375.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "27.WS_worker-restless-hat-a207.horini5085.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "2abd9b82-8fdd-4f14-87a0-7f7c046a4d96",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-restless-hat-a207.horini5085.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "28.WS_worker-muddy-mud-80b0.yasad98332.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "7da2bcb6-4b8a-4bd9-8c5a-167c625a8fec",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-muddy-mud-80b0.yasad98332.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "29.WS_worker-broken-limit-3fdd.ritexo49405047.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "7a9e4417-f2f8-45de-80dc-db0fbdc64052",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-broken-limit-3fdd.ritexo49405047.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "30.WS_worker-square-credit-266.voregi30768721.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "e7c89a9a-7295-436e-b8f1-2d26f0115ddb",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-square-credit-266.voregi30768721.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "31.WS_worker-still-bread-58a5.wopase7569.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "1892dd81-2753-47e0-82f0-df4d75a0723c",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-still-bread-58a5.wopase7569.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "32.WS_worker-autumn-limit-cda8.wonoke5503.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "babc91b1-5783-4911-98ce-7174219cb53e",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-autumn-limit-cda8.wonoke5503.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "33.WS_worker-lively-dawn-7758.kepete84026434.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "32c0c23a-e61c-4862-ad0e-358b09efb29c",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-lively-dawn-7758.kepete84026434.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "34.WS_hello-world-fancy.fodimet674395.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "1819783d-54f8-4fd8-93a1-76208b12ae6b",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-fancy.fodimet674395.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "35.WS_worker-damp-mud-2037.vepoki35667904.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "46fdc5e5-4e43-4500-8c44-ca4318a0cc87",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-damp-mud-2037.vepoki35667904.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "36.WS_hello-world-restless3.lelibe23561755.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "42adae60-e75c-4974-babf-4ecb7683d3f4",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-restless3.lelibe23561755.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "37.WS_hello-world-cold-firefly-2f0.xawatit7388876.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "eaab1f71-8482-49bb-9c5c-0694ca7ce0b1",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-cold-firefly-2f0.xawatit7388876.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "38.WS_hello-world-tiny-sky-185b.jowihe66665102.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "86852ac8-d00b-4f4e-80af-263cb5d8acc2",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-tiny-sky-185b.jowihe66665102.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "39.WS_worker-muddy-smoke-8ab.xaxom25638790.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "a6f6b48f-8743-4d28-8137-2a5d96397ec8",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-muddy-smoke-8ab.xaxom25638790.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "40.WS_hello-world1.neroda58356546.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "f8644e01-da8e-464f-b11c-fbf94d731581",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world1.neroda58356546.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "41.WS_worker-yellow-band-d54b.pomot263322431.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "449a0b78-4411-4bdf-b482-a717495e4869",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-yellow-band-d54b.pomot263322431.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "42.WS_hello-world-icy-firefly-047e.kagigal9105857.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "ed35c3b2-3824-425f-a81b-eea3aee07b59",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-icy-firefly-047e.kagigal9105857.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "43.WS_heheh.doxivi75166473.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "9d8e7ed4-a88a-40da-a143-aae4cbb7a6a3",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "heheh.doxivi75166473.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "44.WS_worker-aged-firefly-f12f.jisirof4606348.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "a5e2f39f-333c-4b13-bcbf-1d0e1ea83680",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-aged-firefly-f12f.jisirof4606348.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "45.WS_worker-rapid-wood-2a3.voxigi99841388.workers.dev",
      "server": "b2n.ir",
      "server_port": 8880,
      "uuid": "88c6ed22-4ae2-46fd-965f-b72d7bcdf449",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-rapid-wood-2a3.voxigi99841388.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "46.TLS_worker-patient-feather-008f.nigiv19673488.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "1722aa12-28eb-421c-a0cb-b16328b51e46",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-patient-feather-008f.nigiv19673488.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-patient-feather-008f.nigiv19673488.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "47.TLS_corafap622.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "3e77511c-c70b-4ce5-ab40-ef0ac7663831",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "corafap622.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "corafap622.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "48.TLS_ritexo4940.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "b0a3a688-fbdd-4b75-8d51-61709187fbbf",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "ritexo4940.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "ritexo4940.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "49.TLS_69901ae8.dorefa9190.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "38d6cc55-bd54-4363-a677-79802d6ca8d6",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "69901ae8.dorefa9190.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "69901ae8.dorefa9190.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "50.TLS_worker-fancy-dawn-95ce.delelac408.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "53c3289b-efde-4185-92ce-4ebe486aa534",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-fancy-dawn-95ce.delelac408.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-fancy-dawn-95ce.delelac408.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "51.TLS_renesok574.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "355c9233-97c5-4456-95f0-9eaf1bdab3ab",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "renesok574.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "renesok574.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "52.TLS_mitid53210.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "ae76663f-012b-4279-a640-f189bc2c7652",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "mitid53210.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "mitid53210.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "53.TLS_nigiv19673.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "bd34082f-cbff-4904-bc98-2c9c412e36f0",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "nigiv19673.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "nigiv19673.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "54.TLS_heheh.doxivi75166473.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "9d8e7ed4-a88a-40da-a143-aae4cbb7a6a3",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "heheh.doxivi75166473.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "heheh.doxivi75166473.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "55.TLS_hello-world-purple.vivecil650202.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "676972be-d068-41f0-a296-2ee1c326bed5",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "hello-world-purple.vivecil650202.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-purple.vivecil650202.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "56.TLS_worker-cold-hat-ac26.vosira42314853.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "58940e19-7510-4660-9555-359bad737de2",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-cold-hat-ac26.vosira42314853.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-cold-hat-ac26.vosira42314853.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "57.TLS_potiv98445.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "6d1c2fa2-09dc-43e4-b4fa-7cd67b09e400",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "potiv98445.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "potiv98445.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "58.TLS_pahose8240.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "10a66660-da1f-42a2-b5b1-7ac2be2c09b3",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "pahose8240.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "pahose8240.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "59.TLS_worker-calm-snow-a135.jivep17561.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "fb5b5db7-3384-4ee8-b103-90158a50847b",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-calm-snow-a135.jivep17561.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-calm-snow-a135.jivep17561.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "60.TLS_hello-world-icy-firefly-047e.kagigal9105857.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "ed35c3b2-3824-425f-a81b-eea3aee07b59",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "hello-world-icy-firefly-047e.kagigal9105857.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-icy-firefly-047e.kagigal9105857.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "61.TLS_worker-rapid-wood-2a3.voxigi99841388.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "88c6ed22-4ae2-46fd-965f-b72d7bcdf449",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-rapid-wood-2a3.voxigi99841388.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-rapid-wood-2a3.voxigi99841388.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "62.TLS_hello-world-summer.ciyapo89104656.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "9ace2ba2-a445-4529-b5d9-a33e520e43c0",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "hello-world-summer.ciyapo89104656.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-summer.ciyapo89104656.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "63.TLS_worker-sweet-grass-c13d.jameb91780.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "6ce42949-4d5d-4e49-84e1-6d9052d711a3",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-sweet-grass-c13d.jameb91780.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-sweet-grass-c13d.jameb91780.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "64.TLS_gicih84774.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "b13fc331-e74f-4c19-a965-6ec57e63defa",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "gicih84774.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "gicih84774.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "65.TLS_worker-autumn-limit-cda8.wonoke5503.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "babc91b1-5783-4911-98ce-7174219cb53e",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-autumn-limit-cda8.wonoke5503.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-autumn-limit-cda8.wonoke5503.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "66.TLS_hejaw18456.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "740ac28a-e1bd-4409-8016-52dcfb9cad3c",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "hejaw18456.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hejaw18456.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "67.TLS_worker-white-violet-4932.conos72495.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "0f9190e0-3b43-4034-9f10-0d1459d7d4da",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-white-violet-4932.conos72495.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-white-violet-4932.conos72495.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "68.TLS_pojihe2933.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "df1055ff-576f-4f47-a57e-4a1270b230f3",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "pojihe2933.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "pojihe2933.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "69.TLS_hello-world-wispy.rewah709861910.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "c31e4148-cb69-44a4-a4bb-f88a78396efd",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "hello-world-wispy.rewah709861910.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-wispy.rewah709861910.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "70.TLS_diyovo3977.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "e9bce215-25ad-4566-8d2b-a69dcc60406b",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "diyovo3977.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "diyovo3977.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "71.TLS_jotic55393.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "f6751daa-8c21-4d3e-bf50-80743c467ca7",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "jotic55393.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "jotic55393.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "72.TLS_wenise9964.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "3f89040c-8dec-4e48-9cd7-268fd1cf0f63",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "wenise9964.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "wenise9964.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "73.TLS_balitac173.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "b0f8c04d-8102-42a9-bf37-21863d80f9bf",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "balitac173.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "balitac173.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "74.TLS_worker-patient-poetry-2664.xaviyi79713307.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "dec47465-17aa-4f00-823e-e407d5329b7f",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-patient-poetry-2664.xaviyi79713307.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-patient-poetry-2664.xaviyi79713307.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "75.TLS_worker-green-lab-ec7d.kifol7170846.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "c7a832e5-68fa-459d-8419-db849695f84e",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-green-lab-ec7d.kifol7170846.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-green-lab-ec7d.kifol7170846.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "76.TLS_worker-broken-limit-3fdd.ritexo49405047.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "7a9e4417-f2f8-45de-80dc-db0fbdc64052",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-broken-limit-3fdd.ritexo49405047.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-broken-limit-3fdd.ritexo49405047.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "77.TLS_worker-still-bread-58a5.wopase7569.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "1892dd81-2753-47e0-82f0-df4d75a0723c",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-still-bread-58a5.wopase7569.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-still-bread-58a5.wopase7569.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "78.TLS_worker-wandering-breeze-558f.libit96375.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "6b7b95fa-573e-47ca-abf8-d19afcc9eee7",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-wandering-breeze-558f.libit96375.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-wandering-breeze-558f.libit96375.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "79.TLS_worker-aged-firefly-f12f.jisirof4606348.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "a5e2f39f-333c-4b13-bcbf-1d0e1ea83680",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-aged-firefly-f12f.jisirof4606348.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-aged-firefly-f12f.jisirof4606348.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "80.TLS_pomot26332.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "3ba3bc59-4d7f-4136-b9af-3f22af869f10",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "pomot26332.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "pomot26332.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "81.TLS_worker-sweet-sky-65fa.xawoc843846295.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "cbaf244e-eaaf-4747-ba7e-2a90f9454835",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-sweet-sky-65fa.xawoc843846295.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-sweet-sky-65fa.xawoc843846295.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "82.TLS_worker-jolly-wind-9900.loyeg208429244.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "40f89f30-89f3-4848-9e32-c16d8adfcd43",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-jolly-wind-9900.loyeg208429244.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-jolly-wind-9900.loyeg208429244.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "83.TLS_worker-square-credit-266.voregi30768721.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "e7c89a9a-7295-436e-b8f1-2d26f0115ddb",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-square-credit-266.voregi30768721.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-square-credit-266.voregi30768721.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "84.TLS_hokibog915.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "e960d2c8-e1b0-4c7d-b8d5-21f4cfaf61c9",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "hokibog915.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hokibog915.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "85.TLS_worker-polished-thunder-b76.vabex76694.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "f3f4f193-64ad-4cb5-801f-cc18e112504e",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-polished-thunder-b76.vabex76694.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-polished-thunder-b76.vabex76694.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "86.TLS_vodoyo1710.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "dcfed073-0f34-487f-b05f-44117478c4a1",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "vodoyo1710.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "vodoyo1710.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "87.TLS_worker-mute-sky-6cdc.renesok5743819.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "ece65da6-ecef-4193-92e5-856559bb8d39",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-mute-sky-6cdc.renesok5743819.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-mute-sky-6cdc.renesok5743819.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "88.TLS_worker-lively-dawn-7758.kepete84026434.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "32c0c23a-e61c-4862-ad0e-358b09efb29c",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-lively-dawn-7758.kepete84026434.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-lively-dawn-7758.kepete84026434.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "89.TLS_hello-world-restless3.lelibe23561755.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "42adae60-e75c-4974-babf-4ecb7683d3f4",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "hello-world-restless3.lelibe23561755.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-restless3.lelibe23561755.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "90.TLS_wonoke5503.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "b1c8f5de-1b05-4a3e-a6c5-ef46c6c043f4",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "wonoke5503.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "wonoke5503.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "91.TLS_mowirix651.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "587eca68-17d5-4ce8-954d-1944e475ffb7",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "mowirix651.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "mowirix651.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "92.TLS_lokocad452.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "a76ea0d2-6eab-4a17-ab98-5952e9b60dd8",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "lokocad452.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "lokocad452.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "93.TLS_worker-royal-mode-7f2.xexer3509625.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "d7d590a8-783f-448a-9d42-fe3513d4d248",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-royal-mode-7f2.xexer3509625.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-royal-mode-7f2.xexer3509625.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "94.TLS_worker-ancient-credit-e712.cakaxis510.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "05df98ba-7566-4418-99bf-12dafed17871",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-ancient-credit-e712.cakaxis510.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-ancient-credit-e712.cakaxis510.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "95.TLS_worker-shy-shadow-16be.lanihi8359.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "de6fc376-0303-4fce-b6ae-add6304706b8",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-shy-shadow-16be.lanihi8359.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-shy-shadow-16be.lanihi8359.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "96.TLS_worker-floral-snow-8ad7.topah684115784.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "559a3313-a160-46c6-8064-bc56cdfae42c",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-floral-snow-8ad7.topah684115784.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-floral-snow-8ad7.topah684115784.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "97.TLS_cakaxis510.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "4f05460c-4150-4c7f-9d78-8d54de371d56",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "cakaxis510.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "cakaxis510.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "98.TLS_hello-world1.neroda58356546.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "f8644e01-da8e-464f-b11c-fbf94d731581",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "hello-world1.neroda58356546.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world1.neroda58356546.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "99.TLS_hello-world-fancy.fodimet674395.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "1819783d-54f8-4fd8-93a1-76208b12ae6b",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "hello-world-fancy.fodimet674395.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-fancy.fodimet674395.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "100.TLS_worker-jolly-glitter-4026.behebo3543.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "e2120410-485f-40be-8b65-9ef619a950bc",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-jolly-glitter-4026.behebo3543.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-jolly-glitter-4026.behebo3543.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "101.TLS_hello-world-cold-firefly-2f0.xawatit7388876.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "eaab1f71-8482-49bb-9c5c-0694ca7ce0b1",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "hello-world-cold-firefly-2f0.xawatit7388876.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-cold-firefly-2f0.xawatit7388876.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "102.TLS_worker-royal-dream-abe4.nelemit482.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "702c1740-8d68-4a67-9de6-7e70b91ef255",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-royal-dream-abe4.nelemit482.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-royal-dream-abe4.nelemit482.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "103.TLS_hello-world-tiny-sky-185b.jowihe66665102.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "86852ac8-d00b-4f4e-80af-263cb5d8acc2",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "hello-world-tiny-sky-185b.jowihe66665102.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-tiny-sky-185b.jowihe66665102.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "104.TLS_worker-cold-base-8d04.xexer3509625.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "a7515847-f8ef-405a-92ff-3403651c1e9e",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-cold-base-8d04.xexer3509625.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-cold-base-8d04.xexer3509625.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "105.TLS_flat-scene-697d.vebiyo9904.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "246df9ee-2bce-42f0-b1ec-f988c5a99550",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "flat-scene-697d.vebiyo9904.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "flat-scene-697d.vebiyo9904.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "106.TLS_hello-world1.yofigey7761658.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "3ff177f9-41d9-4459-9fe4-d0e26cd19205",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "hello-world1.yofigey7761658.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world1.yofigey7761658.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "107.TLS_worker-muddy-mud-80b0.yasad98332.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "7da2bcb6-4b8a-4bd9-8c5a-167c625a8fec",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-muddy-mud-80b0.yasad98332.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-muddy-mud-80b0.yasad98332.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "108.TLS_worker-yellow-band-d54b.pomot263322431.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "449a0b78-4411-4bdf-b482-a717495e4869",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-yellow-band-d54b.pomot263322431.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-yellow-band-d54b.pomot263322431.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "109.TLS_hello-world-aged-credit-ab62.kegag40987.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "da943b90-bb03-4b9d-ab97-f3cdc3817209",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "hello-world-aged-credit-ab62.kegag40987.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "hello-world-aged-credit-ab62.kegag40987.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "110.TLS_nihenab866.pages.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "9c897791-9c74-4c8a-97f7-a06ebcdba669",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "nihenab866.pages.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "nihenab866.pages.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "111.TLS_worker-restless-hat-a207.horini5085.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "2abd9b82-8fdd-4f14-87a0-7f7c046a4d96",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-restless-hat-a207.horini5085.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-restless-hat-a207.horini5085.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "112.TLS_worker-muddy-smoke-8ab.xaxom25638790.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "a6f6b48f-8743-4d28-8137-2a5d96397ec8",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-muddy-smoke-8ab.xaxom25638790.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-muddy-smoke-8ab.xaxom25638790.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "113.TLS_worker-damp-mud-2037.vepoki35667904.workers.dev",
      "server": "b2n.ir",
      "server_port": 8443,
      "uuid": "46fdc5e5-4e43-4500-8c44-ca4318a0cc87",
      "flow": "",
      "packet_encoding": "xudp",
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker-damp-mud-2037.vepoki35667904.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "h2",
          "http/1.1"
        ]
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "worker-damp-mud-2037.vepoki35667904.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    }
  ],
  "route": {
    "auto_detect_interface": true,
    "override_android_vpn": true,
    "final": "proxy",
    "rule_set": [
      {
        "tag": "geosite-ir",
        "type": "remote",
        "format": "binary",
        "url": "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-ir.srs"
      },
      {
        "tag": "geoip-ir",
        "type": "remote",
        "format": "binary",
        "url": "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-ir.srs"
      }
    ],
    "rules": [
      {
        "protocol": "dns",
        "outbound": "dns-out"
      },
      {
        "inbound": "dns-in",
        "outbound": "dns-out"
      },
      {
        "port": 53,
        "outbound": "dns-out"
      },
      {
        "ip_cidr": [
          "224.0.0.0/3",
          "ff00::/8"
        ],
        "outbound": "block",
        "source_ip_cidr": [
          "224.0.0.0/3",
          "ff00::/8"
        ]
      },
      {
        "domain_suffix": [
          "ir"
        ],
        "outbound": "direct"
      },
      {
        "ip_is_private": true,
        "outbound": "direct"
      },
      {
        "rule_set": [
          "geosite-ir",
          "geoip-ir"
        ],
        "outbound": "direct"
      }
    ]
  }
}
