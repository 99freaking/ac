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
      "enabled": true
    }
  },
  "dns": {
    "servers": [
      {
        "type": "local",
        "tag": "dns-local"
      },
      {
        "type": "udp",
        "server": "8.8.8.8",
        "tag": "dns-plain"
      },
      {
        "type": "tls",
        "server": "8.8.8.8",
        "tag": "dns-remote",
        "detour": "proxy",
        "tls": {
          "enabled": true
        }
      },
      {
        "type": "https",
        "server": "dns.cloudflare.com",
        "domain_resolver": "hosts",
        "tag": "dns-frag",
        "tls": {
          "enabled": true,
          "record_fragment": true,
          "utls": {
            "enabled": true,
            "fingerprint": "chrome"
          }
        }
      },
      {
        "type": "https",
        "server": "dns.digitalsize.net",
        "domain_resolver": "dns-plain",
        "tag": "dns-direct",
        "tls": {
          "enabled": true
        }
      },
      {
        "type": "https",
        "server": "free.shecan.ir",
        "domain_resolver": "dns-plain",
        "tag": "dns-shecan",
        "tls": {
          "enabled": true
        }
      },
      {
        "type": "hosts",
        "tag": "hosts",
        "predefined": {
          "dns.cloudflare.com": [
            "104.16.219.230",
            "104.16.250.250",
            "104.17.147.22",
            "104.17.42.10",
            "104.17.88.212",
            "104.18.10.128",
            "104.19.250.20",
            "104.20.9.79",
            "104.21.63.78",
            "104.26.15.85",
            "162.159.130.234",
            "162.159.133.234",
            "172.67.135.149",
            "172.67.170.72",
            "172.67.73.174",
            "188.114.98.0"
          ]
        }
      },
      {
        "type": "fakeip",
        "tag": "fakeip",
        "inet4_range": "198.18.0.0/15",
        "inet6_range": "fc00::/18"
      }
    ],
    "rules": [
      {
        "ip_accept_any": true,
        "server": "hosts"
      },
      {
        "domain": [
          "tgju.org",
          "www.speedtest.net",
          "b2n.ir"
        ],
        "server": "dns-local"
      },
      {
        "domain_suffix": [
          ".ir"
        ],
        "server": "dns-local"
      },
      {
        "clash_mode": "direct",
        "server": "dns-plain"
      },
      {
        "clash_mode": "tahrim",
        "server": "dns-shecan"
      },
      {
        "inbound": [
          "tun-in"
        ],
        "query_type": [
          "A",
          "AAAA"
        ],
        "server": "fakeip",
        "disable_cache": true
      }
    ],
    "final": "dns-remote",
    "strategy": "ipv4_only",
    "independent_cache": true
  },
  "inbounds": [
    {
      "type": "direct",
      "tag": "dns-in",
      "listen": "0.0.0.0",
      "listen_port": 6450
    },
    {
      "type": "tun",
      "tag": "tun-in",
      "interface_name": "tun0",
      "address": [
        "172.19.0.1/28",
        "fdfe:dcba:9876::1/126"
      ],
      "mtu": 9000,
      "auto_route": true,
      "strict_route": true,
      "stack": "mixed",
      "endpoint_independent_nat": true
    },
    {
      "type": "mixed",
      "tag": "mixed-in",
      "listen": "0.0.0.0",
      "listen_port": 2080
    }
  ],
  "outbounds": [
    {
      "tag": "proxy",
      "type": "selector",
      "outbounds": [
        "URL-TEST",
        "1.TLS.bitter-term-e496.sabotat455.workers.dev",
        "2.TLS.bitter-term-e496.sabotat455.workers.dev",
        "3.TLS.bitter-term-e496.sabotat455.workers.dev",
        "4.TLS.bitter-term-e496.sabotat455.workers.dev",
        "5.TLS.bitter-term-e496.sabotat455.workers.dev",
        "6.TLS.bitter-term-e496.sabotat455.workers.dev",
        "7.TLS.bitter-term-e496.sabotat455.workers.dev",
        "8.TLS.dark-wave-2be9.fosexej7666.workers.dev",
        "9.TLS.dark-wave-2be9.fosexej7666.workers.dev",
        "10.TLS.dark-wave-2be9.fosexej7666.workers.dev",
        "11.TLS.dark-wave-2be9.fosexej7666.workers.dev",
        "12.TLS.dark-wave-2be9.fosexej7666.workers.dev",
        "13.TLS.dark-wave-2be9.fosexej7666.workers.dev",
        "14.TLS.dark-wave-2be9.fosexej7666.workers.dev",
        "15.TLS.empty-base-5571.fifed36752.workers.dev",
        "16.TLS.empty-base-5571.fifed36752.workers.dev",
        "17.TLS.empty-base-5571.fifed36752.workers.dev",
        "18.TLS.empty-base-5571.fifed36752.workers.dev",
        "19.TLS.empty-base-5571.fifed36752.workers.dev",
        "20.TLS.empty-base-5571.fifed36752.workers.dev",
        "21.TLS.empty-base-5571.fifed36752.workers.dev",
        "22.TLS.fancy-shape-a477.fimara4589.workers.dev",
        "23.TLS.fancy-shape-a477.fimara4589.workers.dev",
        "24.TLS.fancy-shape-a477.fimara4589.workers.dev",
        "25.TLS.fancy-shape-a477.fimara4589.workers.dev",
        "26.TLS.fancy-shape-a477.fimara4589.workers.dev",
        "27.TLS.fancy-shape-a477.fimara4589.workers.dev",
        "28.TLS.fancy-shape-a477.fimara4589.workers.dev",
        "29.TLS.holy-mud-57e1.daticah6555.workers.dev",
        "30.TLS.holy-mud-57e1.daticah6555.workers.dev",
        "31.TLS.holy-mud-57e1.daticah6555.workers.dev",
        "32.TLS.holy-mud-57e1.daticah6555.workers.dev",
        "33.TLS.holy-mud-57e1.daticah6555.workers.dev",
        "34.TLS.holy-mud-57e1.daticah6555.workers.dev",
        "35.TLS.holy-mud-57e1.daticah6555.workers.dev",
        "36.TLS.nameless-band-af9e.wawey55881.workers.dev",
        "37.TLS.nameless-band-af9e.wawey55881.workers.dev",
        "38.TLS.nameless-band-af9e.wawey55881.workers.dev",
        "39.TLS.nameless-band-af9e.wawey55881.workers.dev",
        "40.TLS.nameless-band-af9e.wawey55881.workers.dev",
        "41.TLS.nameless-band-af9e.wawey55881.workers.dev",
        "42.TLS.nameless-band-af9e.wawey55881.workers.dev",
        "43.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
        "44.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
        "45.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
        "46.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
        "47.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
        "48.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
        "49.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
        "50.TLS.still-disk-08fb.cipek2755.workers.dev",
        "51.TLS.still-disk-08fb.cipek2755.workers.dev",
        "52.TLS.still-disk-08fb.cipek2755.workers.dev",
        "53.TLS.still-disk-08fb.cipek2755.workers.dev",
        "54.TLS.still-disk-08fb.cipek2755.workers.dev",
        "55.TLS.still-disk-08fb.cipek2755.workers.dev",
        "56.TLS.still-disk-08fb.cipek2755.workers.dev",
        "57.TLS.worker1.gojipe5906.workers.dev",
        "58.TLS.worker1.gojipe5906.workers.dev",
        "59.TLS.worker1.gojipe5906.workers.dev",
        "60.TLS.worker1.gojipe5906.workers.dev",
        "61.TLS.worker1.gojipe5906.workers.dev",
        "62.TLS.worker1.gojipe5906.workers.dev",
        "63.TLS.worker1.gojipe5906.workers.dev",
        "64.TLS.worker1.notoj58234.workers.dev",
        "65.TLS.worker1.notoj58234.workers.dev",
        "66.TLS.worker1.notoj58234.workers.dev",
        "67.TLS.worker1.notoj58234.workers.dev",
        "68.TLS.worker1.notoj58234.workers.dev",
        "69.TLS.worker1.notoj58234.workers.dev",
        "70.TLS.worker1.notoj58234.workers.dev"
      ]
    },
    {
      "tag": "URL-TEST",
      "type": "urltest",
      "outbounds": [
        "1.TLS.bitter-term-e496.sabotat455.workers.dev",
        "2.TLS.bitter-term-e496.sabotat455.workers.dev",
        "3.TLS.bitter-term-e496.sabotat455.workers.dev",
        "4.TLS.bitter-term-e496.sabotat455.workers.dev",
        "5.TLS.bitter-term-e496.sabotat455.workers.dev",
        "6.TLS.bitter-term-e496.sabotat455.workers.dev",
        "7.TLS.bitter-term-e496.sabotat455.workers.dev",
        "8.TLS.dark-wave-2be9.fosexej7666.workers.dev",
        "9.TLS.dark-wave-2be9.fosexej7666.workers.dev",
        "10.TLS.dark-wave-2be9.fosexej7666.workers.dev",
        "11.TLS.dark-wave-2be9.fosexej7666.workers.dev",
        "12.TLS.dark-wave-2be9.fosexej7666.workers.dev",
        "13.TLS.dark-wave-2be9.fosexej7666.workers.dev",
        "14.TLS.dark-wave-2be9.fosexej7666.workers.dev",
        "15.TLS.empty-base-5571.fifed36752.workers.dev",
        "16.TLS.empty-base-5571.fifed36752.workers.dev",
        "17.TLS.empty-base-5571.fifed36752.workers.dev",
        "18.TLS.empty-base-5571.fifed36752.workers.dev",
        "19.TLS.empty-base-5571.fifed36752.workers.dev",
        "20.TLS.empty-base-5571.fifed36752.workers.dev",
        "21.TLS.empty-base-5571.fifed36752.workers.dev",
        "22.TLS.fancy-shape-a477.fimara4589.workers.dev",
        "23.TLS.fancy-shape-a477.fimara4589.workers.dev",
        "24.TLS.fancy-shape-a477.fimara4589.workers.dev",
        "25.TLS.fancy-shape-a477.fimara4589.workers.dev",
        "26.TLS.fancy-shape-a477.fimara4589.workers.dev",
        "27.TLS.fancy-shape-a477.fimara4589.workers.dev",
        "28.TLS.fancy-shape-a477.fimara4589.workers.dev",
        "29.TLS.holy-mud-57e1.daticah6555.workers.dev",
        "30.TLS.holy-mud-57e1.daticah6555.workers.dev",
        "31.TLS.holy-mud-57e1.daticah6555.workers.dev",
        "32.TLS.holy-mud-57e1.daticah6555.workers.dev",
        "33.TLS.holy-mud-57e1.daticah6555.workers.dev",
        "34.TLS.holy-mud-57e1.daticah6555.workers.dev",
        "35.TLS.holy-mud-57e1.daticah6555.workers.dev",
        "36.TLS.nameless-band-af9e.wawey55881.workers.dev",
        "37.TLS.nameless-band-af9e.wawey55881.workers.dev",
        "38.TLS.nameless-band-af9e.wawey55881.workers.dev",
        "39.TLS.nameless-band-af9e.wawey55881.workers.dev",
        "40.TLS.nameless-band-af9e.wawey55881.workers.dev",
        "41.TLS.nameless-band-af9e.wawey55881.workers.dev",
        "42.TLS.nameless-band-af9e.wawey55881.workers.dev",
        "43.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
        "44.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
        "45.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
        "46.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
        "47.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
        "48.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
        "49.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
        "50.TLS.still-disk-08fb.cipek2755.workers.dev",
        "51.TLS.still-disk-08fb.cipek2755.workers.dev",
        "52.TLS.still-disk-08fb.cipek2755.workers.dev",
        "53.TLS.still-disk-08fb.cipek2755.workers.dev",
        "54.TLS.still-disk-08fb.cipek2755.workers.dev",
        "55.TLS.still-disk-08fb.cipek2755.workers.dev",
        "56.TLS.still-disk-08fb.cipek2755.workers.dev",
        "57.TLS.worker1.gojipe5906.workers.dev",
        "58.TLS.worker1.gojipe5906.workers.dev",
        "59.TLS.worker1.gojipe5906.workers.dev",
        "60.TLS.worker1.gojipe5906.workers.dev",
        "61.TLS.worker1.gojipe5906.workers.dev",
        "62.TLS.worker1.gojipe5906.workers.dev",
        "63.TLS.worker1.gojipe5906.workers.dev",
        "64.TLS.worker1.notoj58234.workers.dev",
        "65.TLS.worker1.notoj58234.workers.dev",
        "66.TLS.worker1.notoj58234.workers.dev",
        "67.TLS.worker1.notoj58234.workers.dev",
        "68.TLS.worker1.notoj58234.workers.dev",
        "69.TLS.worker1.notoj58234.workers.dev",
        "70.TLS.worker1.notoj58234.workers.dev"
      ],
      "url": "https://www.gstatic.com/generate_204",
      "interval": "5m",
      "tolerance": 50
    },
    {
      "tag": "direct",
      "type": "direct"
    },
    {
      "type": "vless",
      "tag": "1.TLS.bitter-term-e496.sabotat455.workers.dev",
      "server": "104.18.90.237",
      "server_port": 8443,
      "uuid": "a61a999c-a380-4da4-b6ca-3620eb702973",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "bitter-term-e496.sabotat455.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "bitter-term-e496.sabotat455.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "2.TLS.bitter-term-e496.sabotat455.workers.dev",
      "server": "104.17.148.22",
      "server_port": 8443,
      "uuid": "a61a999c-a380-4da4-b6ca-3620eb702973",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "bitter-term-e496.sabotat455.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "bitter-term-e496.sabotat455.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "3.TLS.bitter-term-e496.sabotat455.workers.dev",
      "server": "172.64.155.209",
      "server_port": 8443,
      "uuid": "a61a999c-a380-4da4-b6ca-3620eb702973",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "bitter-term-e496.sabotat455.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "bitter-term-e496.sabotat455.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "4.TLS.bitter-term-e496.sabotat455.workers.dev",
      "server": "104.18.12.15",
      "server_port": 8443,
      "uuid": "a61a999c-a380-4da4-b6ca-3620eb702973",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "bitter-term-e496.sabotat455.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "bitter-term-e496.sabotat455.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "5.TLS.bitter-term-e496.sabotat455.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "a61a999c-a380-4da4-b6ca-3620eb702973",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "bitter-term-e496.sabotat455.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "bitter-term-e496.sabotat455.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "6.TLS.bitter-term-e496.sabotat455.workers.dev",
      "server": "188.114.97.7",
      "server_port": 8443,
      "uuid": "a61a999c-a380-4da4-b6ca-3620eb702973",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "bitter-term-e496.sabotat455.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "bitter-term-e496.sabotat455.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "7.TLS.bitter-term-e496.sabotat455.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "a61a999c-a380-4da4-b6ca-3620eb702973",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "bitter-term-e496.sabotat455.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "bitter-term-e496.sabotat455.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "8.TLS.dark-wave-2be9.fosexej7666.workers.dev",
      "server": "172.64.155.209",
      "server_port": 8443,
      "uuid": "6676f435-ac23-4431-8507-d6839dba5872",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "dark-wave-2be9.fosexej7666.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "dark-wave-2be9.fosexej7666.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "9.TLS.dark-wave-2be9.fosexej7666.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "6676f435-ac23-4431-8507-d6839dba5872",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "dark-wave-2be9.fosexej7666.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "dark-wave-2be9.fosexej7666.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "10.TLS.dark-wave-2be9.fosexej7666.workers.dev",
      "server": "188.114.97.7",
      "server_port": 8443,
      "uuid": "6676f435-ac23-4431-8507-d6839dba5872",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "dark-wave-2be9.fosexej7666.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "dark-wave-2be9.fosexej7666.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "11.TLS.dark-wave-2be9.fosexej7666.workers.dev",
      "server": "104.18.90.237",
      "server_port": 8443,
      "uuid": "6676f435-ac23-4431-8507-d6839dba5872",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "dark-wave-2be9.fosexej7666.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "dark-wave-2be9.fosexej7666.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "12.TLS.dark-wave-2be9.fosexej7666.workers.dev",
      "server": "104.18.12.15",
      "server_port": 8443,
      "uuid": "6676f435-ac23-4431-8507-d6839dba5872",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "dark-wave-2be9.fosexej7666.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "dark-wave-2be9.fosexej7666.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "13.TLS.dark-wave-2be9.fosexej7666.workers.dev",
      "server": "104.17.148.22",
      "server_port": 8443,
      "uuid": "6676f435-ac23-4431-8507-d6839dba5872",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "dark-wave-2be9.fosexej7666.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "dark-wave-2be9.fosexej7666.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "14.TLS.dark-wave-2be9.fosexej7666.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "6676f435-ac23-4431-8507-d6839dba5872",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "dark-wave-2be9.fosexej7666.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "dark-wave-2be9.fosexej7666.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "15.TLS.empty-base-5571.fifed36752.workers.dev",
      "server": "172.64.155.209",
      "server_port": 8443,
      "uuid": "098f2f20-6825-4db4-a111-6fdaa2b20fd7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "empty-base-5571.fifed36752.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "empty-base-5571.fifed36752.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "16.TLS.empty-base-5571.fifed36752.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "098f2f20-6825-4db4-a111-6fdaa2b20fd7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "empty-base-5571.fifed36752.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "empty-base-5571.fifed36752.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "17.TLS.empty-base-5571.fifed36752.workers.dev",
      "server": "104.17.148.22",
      "server_port": 8443,
      "uuid": "098f2f20-6825-4db4-a111-6fdaa2b20fd7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "empty-base-5571.fifed36752.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "empty-base-5571.fifed36752.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "18.TLS.empty-base-5571.fifed36752.workers.dev",
      "server": "104.18.12.15",
      "server_port": 8443,
      "uuid": "098f2f20-6825-4db4-a111-6fdaa2b20fd7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "empty-base-5571.fifed36752.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "empty-base-5571.fifed36752.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "19.TLS.empty-base-5571.fifed36752.workers.dev",
      "server": "104.18.90.237",
      "server_port": 8443,
      "uuid": "098f2f20-6825-4db4-a111-6fdaa2b20fd7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "empty-base-5571.fifed36752.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "empty-base-5571.fifed36752.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "20.TLS.empty-base-5571.fifed36752.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "098f2f20-6825-4db4-a111-6fdaa2b20fd7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "empty-base-5571.fifed36752.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "empty-base-5571.fifed36752.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "21.TLS.empty-base-5571.fifed36752.workers.dev",
      "server": "188.114.97.7",
      "server_port": 8443,
      "uuid": "098f2f20-6825-4db4-a111-6fdaa2b20fd7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "empty-base-5571.fifed36752.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "empty-base-5571.fifed36752.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "22.TLS.fancy-shape-a477.fimara4589.workers.dev",
      "server": "104.17.148.22",
      "server_port": 8443,
      "uuid": "5f63ed52-6bca-4b8f-aab2-2549b7505241",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "fancy-shape-a477.fimara4589.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "fancy-shape-a477.fimara4589.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "23.TLS.fancy-shape-a477.fimara4589.workers.dev",
      "server": "188.114.97.7",
      "server_port": 8443,
      "uuid": "5f63ed52-6bca-4b8f-aab2-2549b7505241",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "fancy-shape-a477.fimara4589.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "fancy-shape-a477.fimara4589.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "24.TLS.fancy-shape-a477.fimara4589.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "5f63ed52-6bca-4b8f-aab2-2549b7505241",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "fancy-shape-a477.fimara4589.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "fancy-shape-a477.fimara4589.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "25.TLS.fancy-shape-a477.fimara4589.workers.dev",
      "server": "104.18.90.237",
      "server_port": 8443,
      "uuid": "5f63ed52-6bca-4b8f-aab2-2549b7505241",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "fancy-shape-a477.fimara4589.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "fancy-shape-a477.fimara4589.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "26.TLS.fancy-shape-a477.fimara4589.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "5f63ed52-6bca-4b8f-aab2-2549b7505241",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "fancy-shape-a477.fimara4589.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "fancy-shape-a477.fimara4589.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "27.TLS.fancy-shape-a477.fimara4589.workers.dev",
      "server": "172.64.155.209",
      "server_port": 8443,
      "uuid": "5f63ed52-6bca-4b8f-aab2-2549b7505241",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "fancy-shape-a477.fimara4589.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "fancy-shape-a477.fimara4589.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "28.TLS.fancy-shape-a477.fimara4589.workers.dev",
      "server": "104.18.12.15",
      "server_port": 8443,
      "uuid": "5f63ed52-6bca-4b8f-aab2-2549b7505241",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "fancy-shape-a477.fimara4589.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "fancy-shape-a477.fimara4589.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "29.TLS.holy-mud-57e1.daticah6555.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "9398d8b7-b48f-4f39-afaf-a6e10ca62f36",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "holy-mud-57e1.daticah6555.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "holy-mud-57e1.daticah6555.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "30.TLS.holy-mud-57e1.daticah6555.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "9398d8b7-b48f-4f39-afaf-a6e10ca62f36",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "holy-mud-57e1.daticah6555.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "holy-mud-57e1.daticah6555.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "31.TLS.holy-mud-57e1.daticah6555.workers.dev",
      "server": "172.64.155.209",
      "server_port": 8443,
      "uuid": "9398d8b7-b48f-4f39-afaf-a6e10ca62f36",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "holy-mud-57e1.daticah6555.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "holy-mud-57e1.daticah6555.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "32.TLS.holy-mud-57e1.daticah6555.workers.dev",
      "server": "104.18.90.237",
      "server_port": 8443,
      "uuid": "9398d8b7-b48f-4f39-afaf-a6e10ca62f36",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "holy-mud-57e1.daticah6555.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "holy-mud-57e1.daticah6555.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "33.TLS.holy-mud-57e1.daticah6555.workers.dev",
      "server": "104.17.148.22",
      "server_port": 8443,
      "uuid": "9398d8b7-b48f-4f39-afaf-a6e10ca62f36",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "holy-mud-57e1.daticah6555.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "holy-mud-57e1.daticah6555.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "34.TLS.holy-mud-57e1.daticah6555.workers.dev",
      "server": "104.18.12.15",
      "server_port": 8443,
      "uuid": "9398d8b7-b48f-4f39-afaf-a6e10ca62f36",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "holy-mud-57e1.daticah6555.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "holy-mud-57e1.daticah6555.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "35.TLS.holy-mud-57e1.daticah6555.workers.dev",
      "server": "188.114.97.7",
      "server_port": 8443,
      "uuid": "9398d8b7-b48f-4f39-afaf-a6e10ca62f36",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "holy-mud-57e1.daticah6555.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "holy-mud-57e1.daticah6555.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "36.TLS.nameless-band-af9e.wawey55881.workers.dev",
      "server": "104.17.148.22",
      "server_port": 8443,
      "uuid": "c14b35b0-0a10-4bd4-9b80-c32108d1076c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "nameless-band-af9e.wawey55881.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "nameless-band-af9e.wawey55881.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "37.TLS.nameless-band-af9e.wawey55881.workers.dev",
      "server": "172.64.155.209",
      "server_port": 8443,
      "uuid": "c14b35b0-0a10-4bd4-9b80-c32108d1076c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "nameless-band-af9e.wawey55881.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "nameless-band-af9e.wawey55881.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "38.TLS.nameless-band-af9e.wawey55881.workers.dev",
      "server": "104.18.90.237",
      "server_port": 8443,
      "uuid": "c14b35b0-0a10-4bd4-9b80-c32108d1076c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "nameless-band-af9e.wawey55881.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "nameless-band-af9e.wawey55881.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "39.TLS.nameless-band-af9e.wawey55881.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "c14b35b0-0a10-4bd4-9b80-c32108d1076c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "nameless-band-af9e.wawey55881.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "nameless-band-af9e.wawey55881.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "40.TLS.nameless-band-af9e.wawey55881.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "c14b35b0-0a10-4bd4-9b80-c32108d1076c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "nameless-band-af9e.wawey55881.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "nameless-band-af9e.wawey55881.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "41.TLS.nameless-band-af9e.wawey55881.workers.dev",
      "server": "188.114.97.7",
      "server_port": 8443,
      "uuid": "c14b35b0-0a10-4bd4-9b80-c32108d1076c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "nameless-band-af9e.wawey55881.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "nameless-band-af9e.wawey55881.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "42.TLS.nameless-band-af9e.wawey55881.workers.dev",
      "server": "104.18.12.15",
      "server_port": 8443,
      "uuid": "c14b35b0-0a10-4bd4-9b80-c32108d1076c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "nameless-band-af9e.wawey55881.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "nameless-band-af9e.wawey55881.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "43.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "9f23e45d-7a02-4350-86e2-f89847612611",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "snowy-boat-829a.dawejoy4544.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "snowy-boat-829a.dawejoy4544.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "44.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
      "server": "104.18.12.15",
      "server_port": 8443,
      "uuid": "9f23e45d-7a02-4350-86e2-f89847612611",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "snowy-boat-829a.dawejoy4544.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "snowy-boat-829a.dawejoy4544.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "45.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
      "server": "172.64.155.209",
      "server_port": 8443,
      "uuid": "9f23e45d-7a02-4350-86e2-f89847612611",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "snowy-boat-829a.dawejoy4544.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "snowy-boat-829a.dawejoy4544.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "46.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
      "server": "188.114.97.7",
      "server_port": 8443,
      "uuid": "9f23e45d-7a02-4350-86e2-f89847612611",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "snowy-boat-829a.dawejoy4544.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "snowy-boat-829a.dawejoy4544.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "47.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
      "server": "104.17.148.22",
      "server_port": 8443,
      "uuid": "9f23e45d-7a02-4350-86e2-f89847612611",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "snowy-boat-829a.dawejoy4544.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "snowy-boat-829a.dawejoy4544.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "48.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "9f23e45d-7a02-4350-86e2-f89847612611",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "snowy-boat-829a.dawejoy4544.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "snowy-boat-829a.dawejoy4544.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "49.TLS.snowy-boat-829a.dawejoy4544.workers.dev",
      "server": "104.18.90.237",
      "server_port": 8443,
      "uuid": "9f23e45d-7a02-4350-86e2-f89847612611",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "snowy-boat-829a.dawejoy4544.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "snowy-boat-829a.dawejoy4544.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "50.TLS.still-disk-08fb.cipek2755.workers.dev",
      "server": "104.18.90.237",
      "server_port": 8443,
      "uuid": "0f855166-198f-4ce0-8114-62cc1ffdef8e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "still-disk-08fb.cipek2755.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "still-disk-08fb.cipek2755.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "51.TLS.still-disk-08fb.cipek2755.workers.dev",
      "server": "104.18.12.15",
      "server_port": 8443,
      "uuid": "0f855166-198f-4ce0-8114-62cc1ffdef8e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "still-disk-08fb.cipek2755.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "still-disk-08fb.cipek2755.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "52.TLS.still-disk-08fb.cipek2755.workers.dev",
      "server": "188.114.97.7",
      "server_port": 8443,
      "uuid": "0f855166-198f-4ce0-8114-62cc1ffdef8e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "still-disk-08fb.cipek2755.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "still-disk-08fb.cipek2755.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "53.TLS.still-disk-08fb.cipek2755.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "0f855166-198f-4ce0-8114-62cc1ffdef8e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "still-disk-08fb.cipek2755.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "still-disk-08fb.cipek2755.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "54.TLS.still-disk-08fb.cipek2755.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "0f855166-198f-4ce0-8114-62cc1ffdef8e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "still-disk-08fb.cipek2755.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "still-disk-08fb.cipek2755.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "55.TLS.still-disk-08fb.cipek2755.workers.dev",
      "server": "104.17.148.22",
      "server_port": 8443,
      "uuid": "0f855166-198f-4ce0-8114-62cc1ffdef8e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "still-disk-08fb.cipek2755.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "still-disk-08fb.cipek2755.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "56.TLS.still-disk-08fb.cipek2755.workers.dev",
      "server": "172.64.155.209",
      "server_port": 8443,
      "uuid": "0f855166-198f-4ce0-8114-62cc1ffdef8e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "still-disk-08fb.cipek2755.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "still-disk-08fb.cipek2755.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "57.TLS.worker1.gojipe5906.workers.dev",
      "server": "104.18.12.15",
      "server_port": 8443,
      "uuid": "9befeffd-08a8-4f8f-a101-17febfec4767",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.gojipe5906.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.gojipe5906.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "58.TLS.worker1.gojipe5906.workers.dev",
      "server": "104.18.90.237",
      "server_port": 8443,
      "uuid": "9befeffd-08a8-4f8f-a101-17febfec4767",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.gojipe5906.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.gojipe5906.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "59.TLS.worker1.gojipe5906.workers.dev",
      "server": "104.17.148.22",
      "server_port": 8443,
      "uuid": "9befeffd-08a8-4f8f-a101-17febfec4767",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.gojipe5906.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.gojipe5906.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "60.TLS.worker1.gojipe5906.workers.dev",
      "server": "172.64.155.209",
      "server_port": 8443,
      "uuid": "9befeffd-08a8-4f8f-a101-17febfec4767",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.gojipe5906.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.gojipe5906.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "61.TLS.worker1.gojipe5906.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "9befeffd-08a8-4f8f-a101-17febfec4767",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.gojipe5906.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.gojipe5906.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "62.TLS.worker1.gojipe5906.workers.dev",
      "server": "188.114.97.7",
      "server_port": 8443,
      "uuid": "9befeffd-08a8-4f8f-a101-17febfec4767",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.gojipe5906.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.gojipe5906.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "63.TLS.worker1.gojipe5906.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "9befeffd-08a8-4f8f-a101-17febfec4767",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.gojipe5906.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.gojipe5906.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "64.TLS.worker1.notoj58234.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "fffd71ee-53c5-4b3f-a1a9-3e229da9f816",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.notoj58234.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.notoj58234.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "65.TLS.worker1.notoj58234.workers.dev",
      "server": "188.114.97.7",
      "server_port": 8443,
      "uuid": "fffd71ee-53c5-4b3f-a1a9-3e229da9f816",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.notoj58234.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.notoj58234.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "66.TLS.worker1.notoj58234.workers.dev",
      "server": "104.18.12.15",
      "server_port": 8443,
      "uuid": "fffd71ee-53c5-4b3f-a1a9-3e229da9f816",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.notoj58234.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.notoj58234.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "67.TLS.worker1.notoj58234.workers.dev",
      "server": "104.17.148.22",
      "server_port": 8443,
      "uuid": "fffd71ee-53c5-4b3f-a1a9-3e229da9f816",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.notoj58234.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.notoj58234.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "68.TLS.worker1.notoj58234.workers.dev",
      "server": "172.64.155.209",
      "server_port": 8443,
      "uuid": "fffd71ee-53c5-4b3f-a1a9-3e229da9f816",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.notoj58234.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.notoj58234.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "69.TLS.worker1.notoj58234.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "fffd71ee-53c5-4b3f-a1a9-3e229da9f816",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.notoj58234.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.notoj58234.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "70.TLS.worker1.notoj58234.workers.dev",
      "server": "104.18.90.237",
      "server_port": 8443,
      "uuid": "fffd71ee-53c5-4b3f-a1a9-3e229da9f816",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.notoj58234.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.notoj58234.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    }
  ],
  "route": {
    "default_domain_resolver": {
      "server": "dns-plain",
      "rewrite_ttl": 60
    },
    "auto_detect_interface": true,
    "override_android_vpn": true,
    "final": "proxy",
    "rules": [
      {
        "action": "sniff"
      },
      {
        "action": "hijack-dns",
        "mode": "or",
        "rules": [
          {
            "inbound": "dns-in"
          },
          {
            "protocol": "dns"
          },
          {
            "port": [
              53
            ]
          },
          {
            "ip_cidr": [
              "172.19.0.2"
            ]
          }
        ],
        "type": "logical"
      },
      {
        "ip_cidr": [
          "224.0.0.0/3",
          "ff00::/8"
        ],
        "source_ip_cidr": [
          "224.0.0.0/3",
          "ff00::/8"
        ],
        "action": "reject"
      },
      {
        "ip_cidr": [
          "10.10.34.34",
          "10.10.34.35",
          "10.10.34.36"
        ],
        "action": "reject"
      },
      {
        "ip_is_private": true,
        "outbound": "direct"
      },
      {
        "domain_suffix": [
          "ir"
        ],
        "outbound": "direct"
      },
      {
        "clash_mode": "direct",
        "outbound": "direct"
      },
      {
        "clash_mode": "tahrim",
        "outbound": "direct"
      }
    ]
  }
}
