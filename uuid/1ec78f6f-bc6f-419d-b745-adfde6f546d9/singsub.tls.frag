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
            "188.114.96.7"
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
        "1.TLS.divine-silence-134f.farapav827.workers.dev",
        "2.TLS.divine-silence-134f.farapav827.workers.dev",
        "3.TLS.divine-silence-134f.farapav827.workers.dev",
        "4.TLS.divine-silence-134f.farapav827.workers.dev",
        "5.TLS.divine-silence-134f.farapav827.workers.dev",
        "6.TLS.divine-silence-134f.farapav827.workers.dev",
        "7.TLS.divine-silence-134f.farapav827.workers.dev",
        "8.TLS.lucky-mode-ff4f.libagom721.workers.dev",
        "9.TLS.lucky-mode-ff4f.libagom721.workers.dev",
        "10.TLS.lucky-mode-ff4f.libagom721.workers.dev",
        "11.TLS.lucky-mode-ff4f.libagom721.workers.dev",
        "12.TLS.lucky-mode-ff4f.libagom721.workers.dev",
        "13.TLS.lucky-mode-ff4f.libagom721.workers.dev",
        "14.TLS.lucky-mode-ff4f.libagom721.workers.dev",
        "15.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
        "16.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
        "17.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
        "18.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
        "19.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
        "20.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
        "21.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
        "22.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
        "23.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
        "24.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
        "25.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
        "26.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
        "27.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
        "28.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
        "29.TLS.worker1.fijoneh763.workers.dev",
        "30.TLS.worker1.fijoneh763.workers.dev",
        "31.TLS.worker1.fijoneh763.workers.dev",
        "32.TLS.worker1.fijoneh763.workers.dev",
        "33.TLS.worker1.fijoneh763.workers.dev",
        "34.TLS.worker1.fijoneh763.workers.dev",
        "35.TLS.worker1.fijoneh763.workers.dev",
        "36.TLS.worker1.ragiki7564.workers.dev",
        "37.TLS.worker1.ragiki7564.workers.dev",
        "38.TLS.worker1.ragiki7564.workers.dev",
        "39.TLS.worker1.ragiki7564.workers.dev",
        "40.TLS.worker1.ragiki7564.workers.dev",
        "41.TLS.worker1.ragiki7564.workers.dev",
        "42.TLS.worker1.ragiki7564.workers.dev",
        "43.TLS.worker1.wocayir177.workers.dev",
        "44.TLS.worker1.wocayir177.workers.dev",
        "45.TLS.worker1.wocayir177.workers.dev",
        "46.TLS.worker1.wocayir177.workers.dev",
        "47.TLS.worker1.wocayir177.workers.dev",
        "48.TLS.worker1.wocayir177.workers.dev",
        "49.TLS.worker1.wocayir177.workers.dev",
        "50.TLS.worker1.laton16859.workers.dev",
        "51.TLS.worker1.laton16859.workers.dev",
        "52.TLS.worker1.laton16859.workers.dev",
        "53.TLS.worker1.laton16859.workers.dev",
        "54.TLS.worker1.laton16859.workers.dev",
        "55.TLS.worker1.laton16859.workers.dev",
        "56.TLS.worker1.laton16859.workers.dev",
        "57.TLS.worker1.bobiv63003.workers.dev",
        "58.TLS.worker1.bobiv63003.workers.dev",
        "59.TLS.worker1.bobiv63003.workers.dev",
        "60.TLS.worker1.bobiv63003.workers.dev",
        "61.TLS.worker1.bobiv63003.workers.dev",
        "62.TLS.worker1.bobiv63003.workers.dev",
        "63.TLS.worker1.bobiv63003.workers.dev",
        "64.TLS.yellow-voice-0c61.tacajop464.workers.dev",
        "65.TLS.yellow-voice-0c61.tacajop464.workers.dev",
        "66.TLS.yellow-voice-0c61.tacajop464.workers.dev",
        "67.TLS.yellow-voice-0c61.tacajop464.workers.dev",
        "68.TLS.yellow-voice-0c61.tacajop464.workers.dev",
        "69.TLS.yellow-voice-0c61.tacajop464.workers.dev",
        "70.TLS.yellow-voice-0c61.tacajop464.workers.dev"
      ]
    },
    {
      "tag": "URL-TEST",
      "type": "urltest",
      "outbounds": [
        "1.TLS.divine-silence-134f.farapav827.workers.dev",
        "2.TLS.divine-silence-134f.farapav827.workers.dev",
        "3.TLS.divine-silence-134f.farapav827.workers.dev",
        "4.TLS.divine-silence-134f.farapav827.workers.dev",
        "5.TLS.divine-silence-134f.farapav827.workers.dev",
        "6.TLS.divine-silence-134f.farapav827.workers.dev",
        "7.TLS.divine-silence-134f.farapav827.workers.dev",
        "8.TLS.lucky-mode-ff4f.libagom721.workers.dev",
        "9.TLS.lucky-mode-ff4f.libagom721.workers.dev",
        "10.TLS.lucky-mode-ff4f.libagom721.workers.dev",
        "11.TLS.lucky-mode-ff4f.libagom721.workers.dev",
        "12.TLS.lucky-mode-ff4f.libagom721.workers.dev",
        "13.TLS.lucky-mode-ff4f.libagom721.workers.dev",
        "14.TLS.lucky-mode-ff4f.libagom721.workers.dev",
        "15.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
        "16.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
        "17.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
        "18.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
        "19.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
        "20.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
        "21.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
        "22.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
        "23.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
        "24.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
        "25.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
        "26.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
        "27.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
        "28.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
        "29.TLS.worker1.fijoneh763.workers.dev",
        "30.TLS.worker1.fijoneh763.workers.dev",
        "31.TLS.worker1.fijoneh763.workers.dev",
        "32.TLS.worker1.fijoneh763.workers.dev",
        "33.TLS.worker1.fijoneh763.workers.dev",
        "34.TLS.worker1.fijoneh763.workers.dev",
        "35.TLS.worker1.fijoneh763.workers.dev",
        "36.TLS.worker1.ragiki7564.workers.dev",
        "37.TLS.worker1.ragiki7564.workers.dev",
        "38.TLS.worker1.ragiki7564.workers.dev",
        "39.TLS.worker1.ragiki7564.workers.dev",
        "40.TLS.worker1.ragiki7564.workers.dev",
        "41.TLS.worker1.ragiki7564.workers.dev",
        "42.TLS.worker1.ragiki7564.workers.dev",
        "43.TLS.worker1.wocayir177.workers.dev",
        "44.TLS.worker1.wocayir177.workers.dev",
        "45.TLS.worker1.wocayir177.workers.dev",
        "46.TLS.worker1.wocayir177.workers.dev",
        "47.TLS.worker1.wocayir177.workers.dev",
        "48.TLS.worker1.wocayir177.workers.dev",
        "49.TLS.worker1.wocayir177.workers.dev",
        "50.TLS.worker1.laton16859.workers.dev",
        "51.TLS.worker1.laton16859.workers.dev",
        "52.TLS.worker1.laton16859.workers.dev",
        "53.TLS.worker1.laton16859.workers.dev",
        "54.TLS.worker1.laton16859.workers.dev",
        "55.TLS.worker1.laton16859.workers.dev",
        "56.TLS.worker1.laton16859.workers.dev",
        "57.TLS.worker1.bobiv63003.workers.dev",
        "58.TLS.worker1.bobiv63003.workers.dev",
        "59.TLS.worker1.bobiv63003.workers.dev",
        "60.TLS.worker1.bobiv63003.workers.dev",
        "61.TLS.worker1.bobiv63003.workers.dev",
        "62.TLS.worker1.bobiv63003.workers.dev",
        "63.TLS.worker1.bobiv63003.workers.dev",
        "64.TLS.yellow-voice-0c61.tacajop464.workers.dev",
        "65.TLS.yellow-voice-0c61.tacajop464.workers.dev",
        "66.TLS.yellow-voice-0c61.tacajop464.workers.dev",
        "67.TLS.yellow-voice-0c61.tacajop464.workers.dev",
        "68.TLS.yellow-voice-0c61.tacajop464.workers.dev",
        "69.TLS.yellow-voice-0c61.tacajop464.workers.dev",
        "70.TLS.yellow-voice-0c61.tacajop464.workers.dev"
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
      "tag": "1.TLS.divine-silence-134f.farapav827.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "99d5a49a-c8ea-4c90-ab0a-29fc3cd13a53",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "divine-silence-134f.farapav827.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "divine-silence-134f.farapav827.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "2.TLS.divine-silence-134f.farapav827.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "99d5a49a-c8ea-4c90-ab0a-29fc3cd13a53",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "divine-silence-134f.farapav827.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "divine-silence-134f.farapav827.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "3.TLS.divine-silence-134f.farapav827.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "99d5a49a-c8ea-4c90-ab0a-29fc3cd13a53",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "divine-silence-134f.farapav827.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "divine-silence-134f.farapav827.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "4.TLS.divine-silence-134f.farapav827.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "99d5a49a-c8ea-4c90-ab0a-29fc3cd13a53",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "divine-silence-134f.farapav827.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "divine-silence-134f.farapav827.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "5.TLS.divine-silence-134f.farapav827.workers.dev",
      "server": "104.16.171.9",
      "server_port": 443,
      "uuid": "99d5a49a-c8ea-4c90-ab0a-29fc3cd13a53",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "divine-silence-134f.farapav827.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "divine-silence-134f.farapav827.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "6.TLS.divine-silence-134f.farapav827.workers.dev",
      "server": "172.66.43.157",
      "server_port": 443,
      "uuid": "99d5a49a-c8ea-4c90-ab0a-29fc3cd13a53",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "divine-silence-134f.farapav827.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "divine-silence-134f.farapav827.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "7.TLS.divine-silence-134f.farapav827.workers.dev",
      "server": "104.26.14.85",
      "server_port": 443,
      "uuid": "99d5a49a-c8ea-4c90-ab0a-29fc3cd13a53",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "divine-silence-134f.farapav827.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "divine-silence-134f.farapav827.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "8.TLS.lucky-mode-ff4f.libagom721.workers.dev",
      "server": "104.26.14.85",
      "server_port": 443,
      "uuid": "b4841258-b96b-4cf8-99be-2701dbf16db2",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "lucky-mode-ff4f.libagom721.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "lucky-mode-ff4f.libagom721.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "9.TLS.lucky-mode-ff4f.libagom721.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "b4841258-b96b-4cf8-99be-2701dbf16db2",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "lucky-mode-ff4f.libagom721.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "lucky-mode-ff4f.libagom721.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "10.TLS.lucky-mode-ff4f.libagom721.workers.dev",
      "server": "104.16.171.9",
      "server_port": 443,
      "uuid": "b4841258-b96b-4cf8-99be-2701dbf16db2",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "lucky-mode-ff4f.libagom721.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "lucky-mode-ff4f.libagom721.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "11.TLS.lucky-mode-ff4f.libagom721.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "b4841258-b96b-4cf8-99be-2701dbf16db2",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "lucky-mode-ff4f.libagom721.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "lucky-mode-ff4f.libagom721.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "12.TLS.lucky-mode-ff4f.libagom721.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "b4841258-b96b-4cf8-99be-2701dbf16db2",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "lucky-mode-ff4f.libagom721.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "lucky-mode-ff4f.libagom721.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "13.TLS.lucky-mode-ff4f.libagom721.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "b4841258-b96b-4cf8-99be-2701dbf16db2",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "lucky-mode-ff4f.libagom721.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "lucky-mode-ff4f.libagom721.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "14.TLS.lucky-mode-ff4f.libagom721.workers.dev",
      "server": "172.66.43.157",
      "server_port": 443,
      "uuid": "b4841258-b96b-4cf8-99be-2701dbf16db2",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "lucky-mode-ff4f.libagom721.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "lucky-mode-ff4f.libagom721.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "15.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
      "server": "104.26.14.85",
      "server_port": 443,
      "uuid": "ed5c8728-0f69-4b58-8048-c81dcaaf73ba",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "nameless-flower-69f9.gisenoj224.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "nameless-flower-69f9.gisenoj224.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "16.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "ed5c8728-0f69-4b58-8048-c81dcaaf73ba",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "nameless-flower-69f9.gisenoj224.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "nameless-flower-69f9.gisenoj224.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "17.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "ed5c8728-0f69-4b58-8048-c81dcaaf73ba",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "nameless-flower-69f9.gisenoj224.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "nameless-flower-69f9.gisenoj224.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "18.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "ed5c8728-0f69-4b58-8048-c81dcaaf73ba",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "nameless-flower-69f9.gisenoj224.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "nameless-flower-69f9.gisenoj224.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "19.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
      "server": "104.16.171.9",
      "server_port": 443,
      "uuid": "ed5c8728-0f69-4b58-8048-c81dcaaf73ba",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "nameless-flower-69f9.gisenoj224.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "nameless-flower-69f9.gisenoj224.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "20.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "ed5c8728-0f69-4b58-8048-c81dcaaf73ba",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "nameless-flower-69f9.gisenoj224.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "nameless-flower-69f9.gisenoj224.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "21.TLS.nameless-flower-69f9.gisenoj224.workers.dev",
      "server": "172.66.43.157",
      "server_port": 443,
      "uuid": "ed5c8728-0f69-4b58-8048-c81dcaaf73ba",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "nameless-flower-69f9.gisenoj224.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "nameless-flower-69f9.gisenoj224.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "22.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
      "server": "104.26.14.85",
      "server_port": 443,
      "uuid": "7c8a65e9-c408-4baa-b1f0-c0c2ba5a423e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "rough-resonance-7eaf.vetagi4927.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "rough-resonance-7eaf.vetagi4927.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "23.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
      "server": "104.16.171.9",
      "server_port": 443,
      "uuid": "7c8a65e9-c408-4baa-b1f0-c0c2ba5a423e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "rough-resonance-7eaf.vetagi4927.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "rough-resonance-7eaf.vetagi4927.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "24.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "7c8a65e9-c408-4baa-b1f0-c0c2ba5a423e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "rough-resonance-7eaf.vetagi4927.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "rough-resonance-7eaf.vetagi4927.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "25.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
      "server": "172.66.43.157",
      "server_port": 443,
      "uuid": "7c8a65e9-c408-4baa-b1f0-c0c2ba5a423e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "rough-resonance-7eaf.vetagi4927.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "rough-resonance-7eaf.vetagi4927.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "26.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "7c8a65e9-c408-4baa-b1f0-c0c2ba5a423e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "rough-resonance-7eaf.vetagi4927.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "rough-resonance-7eaf.vetagi4927.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "27.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "7c8a65e9-c408-4baa-b1f0-c0c2ba5a423e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "rough-resonance-7eaf.vetagi4927.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "rough-resonance-7eaf.vetagi4927.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "28.TLS.rough-resonance-7eaf.vetagi4927.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "7c8a65e9-c408-4baa-b1f0-c0c2ba5a423e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "rough-resonance-7eaf.vetagi4927.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "rough-resonance-7eaf.vetagi4927.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "29.TLS.worker1.fijoneh763.workers.dev",
      "server": "104.26.14.85",
      "server_port": 443,
      "uuid": "25f8459b-9665-465c-87c1-153e263dc830",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.fijoneh763.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.fijoneh763.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "30.TLS.worker1.fijoneh763.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "25f8459b-9665-465c-87c1-153e263dc830",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.fijoneh763.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.fijoneh763.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "31.TLS.worker1.fijoneh763.workers.dev",
      "server": "104.16.171.9",
      "server_port": 443,
      "uuid": "25f8459b-9665-465c-87c1-153e263dc830",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.fijoneh763.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.fijoneh763.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "32.TLS.worker1.fijoneh763.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "25f8459b-9665-465c-87c1-153e263dc830",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.fijoneh763.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.fijoneh763.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "33.TLS.worker1.fijoneh763.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "25f8459b-9665-465c-87c1-153e263dc830",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.fijoneh763.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.fijoneh763.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "34.TLS.worker1.fijoneh763.workers.dev",
      "server": "172.66.43.157",
      "server_port": 443,
      "uuid": "25f8459b-9665-465c-87c1-153e263dc830",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.fijoneh763.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.fijoneh763.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "35.TLS.worker1.fijoneh763.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "25f8459b-9665-465c-87c1-153e263dc830",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.fijoneh763.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.fijoneh763.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "36.TLS.worker1.ragiki7564.workers.dev",
      "server": "104.26.14.85",
      "server_port": 443,
      "uuid": "6cfeb51e-4613-4b1e-aed7-a2e8df0bb544",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.ragiki7564.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.ragiki7564.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "37.TLS.worker1.ragiki7564.workers.dev",
      "server": "104.16.171.9",
      "server_port": 443,
      "uuid": "6cfeb51e-4613-4b1e-aed7-a2e8df0bb544",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.ragiki7564.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.ragiki7564.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "38.TLS.worker1.ragiki7564.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "6cfeb51e-4613-4b1e-aed7-a2e8df0bb544",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.ragiki7564.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.ragiki7564.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "39.TLS.worker1.ragiki7564.workers.dev",
      "server": "172.66.43.157",
      "server_port": 443,
      "uuid": "6cfeb51e-4613-4b1e-aed7-a2e8df0bb544",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.ragiki7564.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.ragiki7564.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "40.TLS.worker1.ragiki7564.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "6cfeb51e-4613-4b1e-aed7-a2e8df0bb544",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.ragiki7564.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.ragiki7564.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "41.TLS.worker1.ragiki7564.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "6cfeb51e-4613-4b1e-aed7-a2e8df0bb544",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.ragiki7564.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.ragiki7564.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "42.TLS.worker1.ragiki7564.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "6cfeb51e-4613-4b1e-aed7-a2e8df0bb544",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.ragiki7564.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.ragiki7564.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "43.TLS.worker1.wocayir177.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "535681e1-bf61-410c-86b4-220e6ddcb929",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.wocayir177.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.wocayir177.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "44.TLS.worker1.wocayir177.workers.dev",
      "server": "104.26.14.85",
      "server_port": 443,
      "uuid": "535681e1-bf61-410c-86b4-220e6ddcb929",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.wocayir177.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.wocayir177.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "45.TLS.worker1.wocayir177.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "535681e1-bf61-410c-86b4-220e6ddcb929",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.wocayir177.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.wocayir177.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "46.TLS.worker1.wocayir177.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "535681e1-bf61-410c-86b4-220e6ddcb929",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.wocayir177.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.wocayir177.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "47.TLS.worker1.wocayir177.workers.dev",
      "server": "172.66.43.157",
      "server_port": 443,
      "uuid": "535681e1-bf61-410c-86b4-220e6ddcb929",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.wocayir177.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.wocayir177.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "48.TLS.worker1.wocayir177.workers.dev",
      "server": "104.16.171.9",
      "server_port": 443,
      "uuid": "535681e1-bf61-410c-86b4-220e6ddcb929",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.wocayir177.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.wocayir177.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "49.TLS.worker1.wocayir177.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "535681e1-bf61-410c-86b4-220e6ddcb929",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.wocayir177.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.wocayir177.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "50.TLS.worker1.laton16859.workers.dev",
      "server": "104.16.171.9",
      "server_port": 443,
      "uuid": "9083aace-9364-431e-9c5e-55d2256a0ea1",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.laton16859.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.laton16859.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "51.TLS.worker1.laton16859.workers.dev",
      "server": "172.66.43.157",
      "server_port": 443,
      "uuid": "9083aace-9364-431e-9c5e-55d2256a0ea1",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.laton16859.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.laton16859.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "52.TLS.worker1.laton16859.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "9083aace-9364-431e-9c5e-55d2256a0ea1",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.laton16859.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.laton16859.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "53.TLS.worker1.laton16859.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "9083aace-9364-431e-9c5e-55d2256a0ea1",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.laton16859.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.laton16859.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "54.TLS.worker1.laton16859.workers.dev",
      "server": "104.26.14.85",
      "server_port": 443,
      "uuid": "9083aace-9364-431e-9c5e-55d2256a0ea1",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.laton16859.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.laton16859.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "55.TLS.worker1.laton16859.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "9083aace-9364-431e-9c5e-55d2256a0ea1",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.laton16859.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.laton16859.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "56.TLS.worker1.laton16859.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "9083aace-9364-431e-9c5e-55d2256a0ea1",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.laton16859.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.laton16859.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "57.TLS.worker1.bobiv63003.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "61509fb5-5204-412d-a56a-2bd4f44ed6cb",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.bobiv63003.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.bobiv63003.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "58.TLS.worker1.bobiv63003.workers.dev",
      "server": "172.66.43.157",
      "server_port": 443,
      "uuid": "61509fb5-5204-412d-a56a-2bd4f44ed6cb",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.bobiv63003.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.bobiv63003.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "59.TLS.worker1.bobiv63003.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "61509fb5-5204-412d-a56a-2bd4f44ed6cb",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.bobiv63003.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.bobiv63003.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "60.TLS.worker1.bobiv63003.workers.dev",
      "server": "104.16.171.9",
      "server_port": 443,
      "uuid": "61509fb5-5204-412d-a56a-2bd4f44ed6cb",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.bobiv63003.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.bobiv63003.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "61.TLS.worker1.bobiv63003.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "61509fb5-5204-412d-a56a-2bd4f44ed6cb",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.bobiv63003.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.bobiv63003.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "62.TLS.worker1.bobiv63003.workers.dev",
      "server": "104.26.14.85",
      "server_port": 443,
      "uuid": "61509fb5-5204-412d-a56a-2bd4f44ed6cb",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.bobiv63003.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.bobiv63003.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "63.TLS.worker1.bobiv63003.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "61509fb5-5204-412d-a56a-2bd4f44ed6cb",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.bobiv63003.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "worker1.bobiv63003.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "64.TLS.yellow-voice-0c61.tacajop464.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "a489b1d7-1ef3-448f-86a2-6ae40178be26",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "yellow-voice-0c61.tacajop464.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "yellow-voice-0c61.tacajop464.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "65.TLS.yellow-voice-0c61.tacajop464.workers.dev",
      "server": "172.66.43.157",
      "server_port": 443,
      "uuid": "a489b1d7-1ef3-448f-86a2-6ae40178be26",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "yellow-voice-0c61.tacajop464.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "yellow-voice-0c61.tacajop464.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "66.TLS.yellow-voice-0c61.tacajop464.workers.dev",
      "server": "104.16.171.9",
      "server_port": 443,
      "uuid": "a489b1d7-1ef3-448f-86a2-6ae40178be26",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "yellow-voice-0c61.tacajop464.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "yellow-voice-0c61.tacajop464.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "67.TLS.yellow-voice-0c61.tacajop464.workers.dev",
      "server": "104.26.14.85",
      "server_port": 443,
      "uuid": "a489b1d7-1ef3-448f-86a2-6ae40178be26",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "yellow-voice-0c61.tacajop464.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "yellow-voice-0c61.tacajop464.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "68.TLS.yellow-voice-0c61.tacajop464.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "a489b1d7-1ef3-448f-86a2-6ae40178be26",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "yellow-voice-0c61.tacajop464.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "yellow-voice-0c61.tacajop464.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "69.TLS.yellow-voice-0c61.tacajop464.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "a489b1d7-1ef3-448f-86a2-6ae40178be26",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "yellow-voice-0c61.tacajop464.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "yellow-voice-0c61.tacajop464.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "70.TLS.yellow-voice-0c61.tacajop464.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "a489b1d7-1ef3-448f-86a2-6ae40178be26",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "yellow-voice-0c61.tacajop464.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
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
          "Host": "yellow-voice-0c61.tacajop464.workers.dev"
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
