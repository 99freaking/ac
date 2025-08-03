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
        "1.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
        "2.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
        "3.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
        "4.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
        "5.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
        "6.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
        "7.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
        "8.TLS.late-resonance-102f.tefos24410.workers.dev",
        "9.TLS.late-resonance-102f.tefos24410.workers.dev",
        "10.TLS.late-resonance-102f.tefos24410.workers.dev",
        "11.TLS.late-resonance-102f.tefos24410.workers.dev",
        "12.TLS.late-resonance-102f.tefos24410.workers.dev",
        "13.TLS.late-resonance-102f.tefos24410.workers.dev",
        "14.TLS.late-resonance-102f.tefos24410.workers.dev",
        "15.TLS.small-dew-db2e.wateci1156.workers.dev",
        "16.TLS.small-dew-db2e.wateci1156.workers.dev",
        "17.TLS.small-dew-db2e.wateci1156.workers.dev",
        "18.TLS.small-dew-db2e.wateci1156.workers.dev",
        "19.TLS.small-dew-db2e.wateci1156.workers.dev",
        "20.TLS.small-dew-db2e.wateci1156.workers.dev",
        "21.TLS.small-dew-db2e.wateci1156.workers.dev",
        "22.TLS.worker1.xoxid22463.workers.dev",
        "23.TLS.worker1.xoxid22463.workers.dev",
        "24.TLS.worker1.xoxid22463.workers.dev",
        "25.TLS.worker1.xoxid22463.workers.dev",
        "26.TLS.worker1.xoxid22463.workers.dev",
        "27.TLS.worker1.xoxid22463.workers.dev",
        "28.TLS.worker1.xoxid22463.workers.dev",
        "29.TLS.worker1.yahoya44555.workers.dev",
        "30.TLS.worker1.yahoya44555.workers.dev",
        "31.TLS.worker1.yahoya44555.workers.dev",
        "32.TLS.worker1.yahoya44555.workers.dev",
        "33.TLS.worker1.yahoya44555.workers.dev",
        "34.TLS.worker1.yahoya44555.workers.dev",
        "35.TLS.worker1.yahoya44555.workers.dev",
        "36.TLS.worker1.ditib3776666.workers.dev",
        "37.TLS.worker1.ditib3776666.workers.dev",
        "38.TLS.worker1.ditib3776666.workers.dev",
        "39.TLS.worker1.ditib3776666.workers.dev",
        "40.TLS.worker1.ditib3776666.workers.dev",
        "41.TLS.worker1.ditib3776666.workers.dev",
        "42.TLS.worker1.ditib3776666.workers.dev",
        "43.TLS.worker1.fexepit851.workers.dev",
        "44.TLS.worker1.fexepit851.workers.dev",
        "45.TLS.worker1.fexepit851.workers.dev",
        "46.TLS.worker1.fexepit851.workers.dev",
        "47.TLS.worker1.fexepit851.workers.dev",
        "48.TLS.worker1.fexepit851.workers.dev",
        "49.TLS.worker1.fexepit851.workers.dev",
        "50.TLS.worker1.gahekif304.workers.dev",
        "51.TLS.worker1.gahekif304.workers.dev",
        "52.TLS.worker1.gahekif304.workers.dev",
        "53.TLS.worker1.gahekif304.workers.dev",
        "54.TLS.worker1.gahekif304.workers.dev",
        "55.TLS.worker1.gahekif304.workers.dev",
        "56.TLS.worker1.gahekif304.workers.dev",
        "57.TLS.worker1.hevebam556.workers.dev",
        "58.TLS.worker1.hevebam556.workers.dev",
        "59.TLS.worker1.hevebam556.workers.dev",
        "60.TLS.worker1.hevebam556.workers.dev",
        "61.TLS.worker1.hevebam556.workers.dev",
        "62.TLS.worker1.hevebam556.workers.dev",
        "63.TLS.worker1.hevebam556.workers.dev",
        "64.TLS.worker1.tacemor185.workers.dev",
        "65.TLS.worker1.tacemor185.workers.dev",
        "66.TLS.worker1.tacemor185.workers.dev",
        "67.TLS.worker1.tacemor185.workers.dev",
        "68.TLS.worker1.tacemor185.workers.dev",
        "69.TLS.worker1.tacemor185.workers.dev",
        "70.TLS.worker1.tacemor185.workers.dev"
      ]
    },
    {
      "tag": "URL-TEST",
      "type": "urltest",
      "outbounds": [
        "1.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
        "2.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
        "3.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
        "4.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
        "5.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
        "6.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
        "7.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
        "8.TLS.late-resonance-102f.tefos24410.workers.dev",
        "9.TLS.late-resonance-102f.tefos24410.workers.dev",
        "10.TLS.late-resonance-102f.tefos24410.workers.dev",
        "11.TLS.late-resonance-102f.tefos24410.workers.dev",
        "12.TLS.late-resonance-102f.tefos24410.workers.dev",
        "13.TLS.late-resonance-102f.tefos24410.workers.dev",
        "14.TLS.late-resonance-102f.tefos24410.workers.dev",
        "15.TLS.small-dew-db2e.wateci1156.workers.dev",
        "16.TLS.small-dew-db2e.wateci1156.workers.dev",
        "17.TLS.small-dew-db2e.wateci1156.workers.dev",
        "18.TLS.small-dew-db2e.wateci1156.workers.dev",
        "19.TLS.small-dew-db2e.wateci1156.workers.dev",
        "20.TLS.small-dew-db2e.wateci1156.workers.dev",
        "21.TLS.small-dew-db2e.wateci1156.workers.dev",
        "22.TLS.worker1.xoxid22463.workers.dev",
        "23.TLS.worker1.xoxid22463.workers.dev",
        "24.TLS.worker1.xoxid22463.workers.dev",
        "25.TLS.worker1.xoxid22463.workers.dev",
        "26.TLS.worker1.xoxid22463.workers.dev",
        "27.TLS.worker1.xoxid22463.workers.dev",
        "28.TLS.worker1.xoxid22463.workers.dev",
        "29.TLS.worker1.yahoya44555.workers.dev",
        "30.TLS.worker1.yahoya44555.workers.dev",
        "31.TLS.worker1.yahoya44555.workers.dev",
        "32.TLS.worker1.yahoya44555.workers.dev",
        "33.TLS.worker1.yahoya44555.workers.dev",
        "34.TLS.worker1.yahoya44555.workers.dev",
        "35.TLS.worker1.yahoya44555.workers.dev",
        "36.TLS.worker1.ditib3776666.workers.dev",
        "37.TLS.worker1.ditib3776666.workers.dev",
        "38.TLS.worker1.ditib3776666.workers.dev",
        "39.TLS.worker1.ditib3776666.workers.dev",
        "40.TLS.worker1.ditib3776666.workers.dev",
        "41.TLS.worker1.ditib3776666.workers.dev",
        "42.TLS.worker1.ditib3776666.workers.dev",
        "43.TLS.worker1.fexepit851.workers.dev",
        "44.TLS.worker1.fexepit851.workers.dev",
        "45.TLS.worker1.fexepit851.workers.dev",
        "46.TLS.worker1.fexepit851.workers.dev",
        "47.TLS.worker1.fexepit851.workers.dev",
        "48.TLS.worker1.fexepit851.workers.dev",
        "49.TLS.worker1.fexepit851.workers.dev",
        "50.TLS.worker1.gahekif304.workers.dev",
        "51.TLS.worker1.gahekif304.workers.dev",
        "52.TLS.worker1.gahekif304.workers.dev",
        "53.TLS.worker1.gahekif304.workers.dev",
        "54.TLS.worker1.gahekif304.workers.dev",
        "55.TLS.worker1.gahekif304.workers.dev",
        "56.TLS.worker1.gahekif304.workers.dev",
        "57.TLS.worker1.hevebam556.workers.dev",
        "58.TLS.worker1.hevebam556.workers.dev",
        "59.TLS.worker1.hevebam556.workers.dev",
        "60.TLS.worker1.hevebam556.workers.dev",
        "61.TLS.worker1.hevebam556.workers.dev",
        "62.TLS.worker1.hevebam556.workers.dev",
        "63.TLS.worker1.hevebam556.workers.dev",
        "64.TLS.worker1.tacemor185.workers.dev",
        "65.TLS.worker1.tacemor185.workers.dev",
        "66.TLS.worker1.tacemor185.workers.dev",
        "67.TLS.worker1.tacemor185.workers.dev",
        "68.TLS.worker1.tacemor185.workers.dev",
        "69.TLS.worker1.tacemor185.workers.dev",
        "70.TLS.worker1.tacemor185.workers.dev"
      ],
      "url": "https://www.gstatic.com/generate_204",
      "interval": "20m",
      "tolerance": 50
    },
    {
      "tag": "direct",
      "type": "direct"
    },
    {
      "type": "vless",
      "tag": "1.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
      "server": "104.16.171.9",
      "server_port": 8443,
      "uuid": "188582b1-2c4e-4efc-908b-56967d473d78",
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
        "server_name": "frosty-surf-d6b2.yobagov334.workers.dev",
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
          "Host": "frosty-surf-d6b2.yobagov334.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "2.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
      "server": "104.16.170.9",
      "server_port": 8443,
      "uuid": "188582b1-2c4e-4efc-908b-56967d473d78",
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
        "server_name": "frosty-surf-d6b2.yobagov334.workers.dev",
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
          "Host": "frosty-surf-d6b2.yobagov334.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "3.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "188582b1-2c4e-4efc-908b-56967d473d78",
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
        "server_name": "frosty-surf-d6b2.yobagov334.workers.dev",
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
          "Host": "frosty-surf-d6b2.yobagov334.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "4.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
      "server": "104.25.150.10",
      "server_port": 8443,
      "uuid": "188582b1-2c4e-4efc-908b-56967d473d78",
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
        "server_name": "frosty-surf-d6b2.yobagov334.workers.dev",
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
          "Host": "frosty-surf-d6b2.yobagov334.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "5.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
      "server": "104.26.14.85",
      "server_port": 8443,
      "uuid": "188582b1-2c4e-4efc-908b-56967d473d78",
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
        "server_name": "frosty-surf-d6b2.yobagov334.workers.dev",
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
          "Host": "frosty-surf-d6b2.yobagov334.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "6.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "188582b1-2c4e-4efc-908b-56967d473d78",
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
        "server_name": "frosty-surf-d6b2.yobagov334.workers.dev",
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
          "Host": "frosty-surf-d6b2.yobagov334.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "7.TLS.frosty-surf-d6b2.yobagov334.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "188582b1-2c4e-4efc-908b-56967d473d78",
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
        "server_name": "frosty-surf-d6b2.yobagov334.workers.dev",
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
          "Host": "frosty-surf-d6b2.yobagov334.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "8.TLS.late-resonance-102f.tefos24410.workers.dev",
      "server": "104.26.14.85",
      "server_port": 8443,
      "uuid": "0cc614fe-6d42-4909-95a7-0722aea3a364",
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
        "server_name": "late-resonance-102f.tefos24410.workers.dev",
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
          "Host": "late-resonance-102f.tefos24410.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "9.TLS.late-resonance-102f.tefos24410.workers.dev",
      "server": "104.25.150.10",
      "server_port": 8443,
      "uuid": "0cc614fe-6d42-4909-95a7-0722aea3a364",
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
        "server_name": "late-resonance-102f.tefos24410.workers.dev",
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
          "Host": "late-resonance-102f.tefos24410.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "10.TLS.late-resonance-102f.tefos24410.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "0cc614fe-6d42-4909-95a7-0722aea3a364",
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
        "server_name": "late-resonance-102f.tefos24410.workers.dev",
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
          "Host": "late-resonance-102f.tefos24410.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "11.TLS.late-resonance-102f.tefos24410.workers.dev",
      "server": "104.16.171.9",
      "server_port": 8443,
      "uuid": "0cc614fe-6d42-4909-95a7-0722aea3a364",
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
        "server_name": "late-resonance-102f.tefos24410.workers.dev",
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
          "Host": "late-resonance-102f.tefos24410.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "12.TLS.late-resonance-102f.tefos24410.workers.dev",
      "server": "104.16.170.9",
      "server_port": 8443,
      "uuid": "0cc614fe-6d42-4909-95a7-0722aea3a364",
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
        "server_name": "late-resonance-102f.tefos24410.workers.dev",
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
          "Host": "late-resonance-102f.tefos24410.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "13.TLS.late-resonance-102f.tefos24410.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "0cc614fe-6d42-4909-95a7-0722aea3a364",
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
        "server_name": "late-resonance-102f.tefos24410.workers.dev",
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
          "Host": "late-resonance-102f.tefos24410.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "14.TLS.late-resonance-102f.tefos24410.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "0cc614fe-6d42-4909-95a7-0722aea3a364",
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
        "server_name": "late-resonance-102f.tefos24410.workers.dev",
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
          "Host": "late-resonance-102f.tefos24410.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "15.TLS.small-dew-db2e.wateci1156.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "4a516d08-60f0-42ac-b4cd-8aaa956ed25f",
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
        "server_name": "small-dew-db2e.wateci1156.workers.dev",
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
          "Host": "small-dew-db2e.wateci1156.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "16.TLS.small-dew-db2e.wateci1156.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "4a516d08-60f0-42ac-b4cd-8aaa956ed25f",
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
        "server_name": "small-dew-db2e.wateci1156.workers.dev",
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
          "Host": "small-dew-db2e.wateci1156.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "17.TLS.small-dew-db2e.wateci1156.workers.dev",
      "server": "104.26.14.85",
      "server_port": 8443,
      "uuid": "4a516d08-60f0-42ac-b4cd-8aaa956ed25f",
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
        "server_name": "small-dew-db2e.wateci1156.workers.dev",
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
          "Host": "small-dew-db2e.wateci1156.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "18.TLS.small-dew-db2e.wateci1156.workers.dev",
      "server": "104.16.171.9",
      "server_port": 8443,
      "uuid": "4a516d08-60f0-42ac-b4cd-8aaa956ed25f",
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
        "server_name": "small-dew-db2e.wateci1156.workers.dev",
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
          "Host": "small-dew-db2e.wateci1156.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "19.TLS.small-dew-db2e.wateci1156.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "4a516d08-60f0-42ac-b4cd-8aaa956ed25f",
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
        "server_name": "small-dew-db2e.wateci1156.workers.dev",
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
          "Host": "small-dew-db2e.wateci1156.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "20.TLS.small-dew-db2e.wateci1156.workers.dev",
      "server": "104.25.150.10",
      "server_port": 8443,
      "uuid": "4a516d08-60f0-42ac-b4cd-8aaa956ed25f",
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
        "server_name": "small-dew-db2e.wateci1156.workers.dev",
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
          "Host": "small-dew-db2e.wateci1156.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "21.TLS.small-dew-db2e.wateci1156.workers.dev",
      "server": "104.16.170.9",
      "server_port": 8443,
      "uuid": "4a516d08-60f0-42ac-b4cd-8aaa956ed25f",
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
        "server_name": "small-dew-db2e.wateci1156.workers.dev",
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
          "Host": "small-dew-db2e.wateci1156.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "22.TLS.worker1.xoxid22463.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "02be1c67-9936-426d-9771-13576808e6b5",
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
        "server_name": "worker1.xoxid22463.workers.dev",
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
          "Host": "worker1.xoxid22463.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "23.TLS.worker1.xoxid22463.workers.dev",
      "server": "104.16.170.9",
      "server_port": 8443,
      "uuid": "02be1c67-9936-426d-9771-13576808e6b5",
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
        "server_name": "worker1.xoxid22463.workers.dev",
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
          "Host": "worker1.xoxid22463.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "24.TLS.worker1.xoxid22463.workers.dev",
      "server": "104.26.14.85",
      "server_port": 8443,
      "uuid": "02be1c67-9936-426d-9771-13576808e6b5",
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
        "server_name": "worker1.xoxid22463.workers.dev",
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
          "Host": "worker1.xoxid22463.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "25.TLS.worker1.xoxid22463.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "02be1c67-9936-426d-9771-13576808e6b5",
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
        "server_name": "worker1.xoxid22463.workers.dev",
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
          "Host": "worker1.xoxid22463.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "26.TLS.worker1.xoxid22463.workers.dev",
      "server": "104.16.171.9",
      "server_port": 8443,
      "uuid": "02be1c67-9936-426d-9771-13576808e6b5",
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
        "server_name": "worker1.xoxid22463.workers.dev",
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
          "Host": "worker1.xoxid22463.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "27.TLS.worker1.xoxid22463.workers.dev",
      "server": "104.25.150.10",
      "server_port": 8443,
      "uuid": "02be1c67-9936-426d-9771-13576808e6b5",
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
        "server_name": "worker1.xoxid22463.workers.dev",
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
          "Host": "worker1.xoxid22463.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "28.TLS.worker1.xoxid22463.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "02be1c67-9936-426d-9771-13576808e6b5",
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
        "server_name": "worker1.xoxid22463.workers.dev",
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
          "Host": "worker1.xoxid22463.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "29.TLS.worker1.yahoya44555.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "5ff0790f-61ca-440b-b368-f59d9caa50dc",
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
        "server_name": "worker1.yahoya44555.workers.dev",
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
          "Host": "worker1.yahoya44555.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "30.TLS.worker1.yahoya44555.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "5ff0790f-61ca-440b-b368-f59d9caa50dc",
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
        "server_name": "worker1.yahoya44555.workers.dev",
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
          "Host": "worker1.yahoya44555.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "31.TLS.worker1.yahoya44555.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "5ff0790f-61ca-440b-b368-f59d9caa50dc",
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
        "server_name": "worker1.yahoya44555.workers.dev",
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
          "Host": "worker1.yahoya44555.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "32.TLS.worker1.yahoya44555.workers.dev",
      "server": "104.25.150.10",
      "server_port": 8443,
      "uuid": "5ff0790f-61ca-440b-b368-f59d9caa50dc",
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
        "server_name": "worker1.yahoya44555.workers.dev",
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
          "Host": "worker1.yahoya44555.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "33.TLS.worker1.yahoya44555.workers.dev",
      "server": "104.16.171.9",
      "server_port": 8443,
      "uuid": "5ff0790f-61ca-440b-b368-f59d9caa50dc",
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
        "server_name": "worker1.yahoya44555.workers.dev",
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
          "Host": "worker1.yahoya44555.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "34.TLS.worker1.yahoya44555.workers.dev",
      "server": "104.16.170.9",
      "server_port": 8443,
      "uuid": "5ff0790f-61ca-440b-b368-f59d9caa50dc",
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
        "server_name": "worker1.yahoya44555.workers.dev",
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
          "Host": "worker1.yahoya44555.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "35.TLS.worker1.yahoya44555.workers.dev",
      "server": "104.26.14.85",
      "server_port": 8443,
      "uuid": "5ff0790f-61ca-440b-b368-f59d9caa50dc",
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
        "server_name": "worker1.yahoya44555.workers.dev",
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
          "Host": "worker1.yahoya44555.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "36.TLS.worker1.ditib3776666.workers.dev",
      "server": "104.16.170.9",
      "server_port": 8443,
      "uuid": "3027e83a-65e4-4501-95bc-43b43aa72413",
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
        "server_name": "worker1.ditib3776666.workers.dev",
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
          "Host": "worker1.ditib3776666.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "37.TLS.worker1.ditib3776666.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "3027e83a-65e4-4501-95bc-43b43aa72413",
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
        "server_name": "worker1.ditib3776666.workers.dev",
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
          "Host": "worker1.ditib3776666.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "38.TLS.worker1.ditib3776666.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "3027e83a-65e4-4501-95bc-43b43aa72413",
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
        "server_name": "worker1.ditib3776666.workers.dev",
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
          "Host": "worker1.ditib3776666.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "39.TLS.worker1.ditib3776666.workers.dev",
      "server": "104.16.171.9",
      "server_port": 8443,
      "uuid": "3027e83a-65e4-4501-95bc-43b43aa72413",
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
        "server_name": "worker1.ditib3776666.workers.dev",
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
          "Host": "worker1.ditib3776666.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "40.TLS.worker1.ditib3776666.workers.dev",
      "server": "104.25.150.10",
      "server_port": 8443,
      "uuid": "3027e83a-65e4-4501-95bc-43b43aa72413",
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
        "server_name": "worker1.ditib3776666.workers.dev",
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
          "Host": "worker1.ditib3776666.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "41.TLS.worker1.ditib3776666.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "3027e83a-65e4-4501-95bc-43b43aa72413",
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
        "server_name": "worker1.ditib3776666.workers.dev",
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
          "Host": "worker1.ditib3776666.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "42.TLS.worker1.ditib3776666.workers.dev",
      "server": "104.26.14.85",
      "server_port": 8443,
      "uuid": "3027e83a-65e4-4501-95bc-43b43aa72413",
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
        "server_name": "worker1.ditib3776666.workers.dev",
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
          "Host": "worker1.ditib3776666.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "43.TLS.worker1.fexepit851.workers.dev",
      "server": "104.25.150.10",
      "server_port": 8443,
      "uuid": "990cd6cb-86b1-4cb4-a33c-26f040381adf",
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
        "server_name": "worker1.fexepit851.workers.dev",
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
          "Host": "worker1.fexepit851.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "44.TLS.worker1.fexepit851.workers.dev",
      "server": "104.16.171.9",
      "server_port": 8443,
      "uuid": "990cd6cb-86b1-4cb4-a33c-26f040381adf",
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
        "server_name": "worker1.fexepit851.workers.dev",
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
          "Host": "worker1.fexepit851.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "45.TLS.worker1.fexepit851.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "990cd6cb-86b1-4cb4-a33c-26f040381adf",
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
        "server_name": "worker1.fexepit851.workers.dev",
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
          "Host": "worker1.fexepit851.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "46.TLS.worker1.fexepit851.workers.dev",
      "server": "104.16.170.9",
      "server_port": 8443,
      "uuid": "990cd6cb-86b1-4cb4-a33c-26f040381adf",
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
        "server_name": "worker1.fexepit851.workers.dev",
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
          "Host": "worker1.fexepit851.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "47.TLS.worker1.fexepit851.workers.dev",
      "server": "104.26.14.85",
      "server_port": 8443,
      "uuid": "990cd6cb-86b1-4cb4-a33c-26f040381adf",
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
        "server_name": "worker1.fexepit851.workers.dev",
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
          "Host": "worker1.fexepit851.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "48.TLS.worker1.fexepit851.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "990cd6cb-86b1-4cb4-a33c-26f040381adf",
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
        "server_name": "worker1.fexepit851.workers.dev",
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
          "Host": "worker1.fexepit851.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "49.TLS.worker1.fexepit851.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "990cd6cb-86b1-4cb4-a33c-26f040381adf",
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
        "server_name": "worker1.fexepit851.workers.dev",
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
          "Host": "worker1.fexepit851.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "50.TLS.worker1.gahekif304.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "1e12a77a-af77-4796-9adb-4e81d0dc613a",
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
        "server_name": "worker1.gahekif304.workers.dev",
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
          "Host": "worker1.gahekif304.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "51.TLS.worker1.gahekif304.workers.dev",
      "server": "104.25.150.10",
      "server_port": 8443,
      "uuid": "1e12a77a-af77-4796-9adb-4e81d0dc613a",
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
        "server_name": "worker1.gahekif304.workers.dev",
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
          "Host": "worker1.gahekif304.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "52.TLS.worker1.gahekif304.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "1e12a77a-af77-4796-9adb-4e81d0dc613a",
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
        "server_name": "worker1.gahekif304.workers.dev",
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
          "Host": "worker1.gahekif304.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "53.TLS.worker1.gahekif304.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "1e12a77a-af77-4796-9adb-4e81d0dc613a",
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
        "server_name": "worker1.gahekif304.workers.dev",
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
          "Host": "worker1.gahekif304.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "54.TLS.worker1.gahekif304.workers.dev",
      "server": "104.16.170.9",
      "server_port": 8443,
      "uuid": "1e12a77a-af77-4796-9adb-4e81d0dc613a",
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
        "server_name": "worker1.gahekif304.workers.dev",
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
          "Host": "worker1.gahekif304.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "55.TLS.worker1.gahekif304.workers.dev",
      "server": "104.26.14.85",
      "server_port": 8443,
      "uuid": "1e12a77a-af77-4796-9adb-4e81d0dc613a",
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
        "server_name": "worker1.gahekif304.workers.dev",
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
          "Host": "worker1.gahekif304.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "56.TLS.worker1.gahekif304.workers.dev",
      "server": "104.16.171.9",
      "server_port": 8443,
      "uuid": "1e12a77a-af77-4796-9adb-4e81d0dc613a",
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
        "server_name": "worker1.gahekif304.workers.dev",
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
          "Host": "worker1.gahekif304.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "57.TLS.worker1.hevebam556.workers.dev",
      "server": "104.26.14.85",
      "server_port": 8443,
      "uuid": "e4c08134-791e-42c3-b4b8-ebe3f190619e",
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
        "server_name": "worker1.hevebam556.workers.dev",
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
          "Host": "worker1.hevebam556.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "58.TLS.worker1.hevebam556.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "e4c08134-791e-42c3-b4b8-ebe3f190619e",
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
        "server_name": "worker1.hevebam556.workers.dev",
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
          "Host": "worker1.hevebam556.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "59.TLS.worker1.hevebam556.workers.dev",
      "server": "104.16.171.9",
      "server_port": 8443,
      "uuid": "e4c08134-791e-42c3-b4b8-ebe3f190619e",
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
        "server_name": "worker1.hevebam556.workers.dev",
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
          "Host": "worker1.hevebam556.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "60.TLS.worker1.hevebam556.workers.dev",
      "server": "104.25.150.10",
      "server_port": 8443,
      "uuid": "e4c08134-791e-42c3-b4b8-ebe3f190619e",
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
        "server_name": "worker1.hevebam556.workers.dev",
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
          "Host": "worker1.hevebam556.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "61.TLS.worker1.hevebam556.workers.dev",
      "server": "104.16.170.9",
      "server_port": 8443,
      "uuid": "e4c08134-791e-42c3-b4b8-ebe3f190619e",
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
        "server_name": "worker1.hevebam556.workers.dev",
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
          "Host": "worker1.hevebam556.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "62.TLS.worker1.hevebam556.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "e4c08134-791e-42c3-b4b8-ebe3f190619e",
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
        "server_name": "worker1.hevebam556.workers.dev",
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
          "Host": "worker1.hevebam556.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "63.TLS.worker1.hevebam556.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "e4c08134-791e-42c3-b4b8-ebe3f190619e",
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
        "server_name": "worker1.hevebam556.workers.dev",
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
          "Host": "worker1.hevebam556.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "64.TLS.worker1.tacemor185.workers.dev",
      "server": "104.16.170.9",
      "server_port": 8443,
      "uuid": "b1aa163f-a6fd-4003-acab-8c4211c230fc",
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
        "server_name": "worker1.tacemor185.workers.dev",
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
          "Host": "worker1.tacemor185.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "65.TLS.worker1.tacemor185.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "b1aa163f-a6fd-4003-acab-8c4211c230fc",
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
        "server_name": "worker1.tacemor185.workers.dev",
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
          "Host": "worker1.tacemor185.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "66.TLS.worker1.tacemor185.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "b1aa163f-a6fd-4003-acab-8c4211c230fc",
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
        "server_name": "worker1.tacemor185.workers.dev",
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
          "Host": "worker1.tacemor185.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "67.TLS.worker1.tacemor185.workers.dev",
      "server": "104.26.14.85",
      "server_port": 8443,
      "uuid": "b1aa163f-a6fd-4003-acab-8c4211c230fc",
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
        "server_name": "worker1.tacemor185.workers.dev",
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
          "Host": "worker1.tacemor185.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "68.TLS.worker1.tacemor185.workers.dev",
      "server": "104.25.150.10",
      "server_port": 8443,
      "uuid": "b1aa163f-a6fd-4003-acab-8c4211c230fc",
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
        "server_name": "worker1.tacemor185.workers.dev",
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
          "Host": "worker1.tacemor185.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "69.TLS.worker1.tacemor185.workers.dev",
      "server": "104.16.171.9",
      "server_port": 8443,
      "uuid": "b1aa163f-a6fd-4003-acab-8c4211c230fc",
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
        "server_name": "worker1.tacemor185.workers.dev",
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
          "Host": "worker1.tacemor185.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "70.TLS.worker1.tacemor185.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "b1aa163f-a6fd-4003-acab-8c4211c230fc",
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
        "server_name": "worker1.tacemor185.workers.dev",
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
          "Host": "worker1.tacemor185.workers.dev"
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
