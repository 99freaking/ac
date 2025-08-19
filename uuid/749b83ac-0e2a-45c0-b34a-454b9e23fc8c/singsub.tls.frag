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
        "1.TLS.falling-thunder-9805.cidayo573832.workers.dev",
        "2.TLS.falling-thunder-9805.cidayo573832.workers.dev",
        "3.TLS.falling-thunder-9805.cidayo573832.workers.dev",
        "4.TLS.falling-thunder-9805.cidayo573832.workers.dev",
        "5.TLS.falling-thunder-9805.cidayo573832.workers.dev",
        "6.TLS.falling-thunder-9805.cidayo573832.workers.dev",
        "7.TLS.falling-thunder-9805.cidayo573832.workers.dev",
        "8.TLS.misty-glitter-236a.hemecap538.workers.dev",
        "9.TLS.misty-glitter-236a.hemecap538.workers.dev",
        "10.TLS.misty-glitter-236a.hemecap538.workers.dev",
        "11.TLS.misty-glitter-236a.hemecap538.workers.dev",
        "12.TLS.misty-glitter-236a.hemecap538.workers.dev",
        "13.TLS.misty-glitter-236a.hemecap538.workers.dev",
        "14.TLS.misty-glitter-236a.hemecap538.workers.dev",
        "15.TLS.misty-rain-9243.nojisoj4574.workers.dev",
        "16.TLS.misty-rain-9243.nojisoj4574.workers.dev",
        "17.TLS.misty-rain-9243.nojisoj4574.workers.dev",
        "18.TLS.misty-rain-9243.nojisoj4574.workers.dev",
        "19.TLS.misty-rain-9243.nojisoj4574.workers.dev",
        "20.TLS.misty-rain-9243.nojisoj4574.workers.dev",
        "21.TLS.misty-rain-9243.nojisoj4574.workers.dev",
        "22.TLS.orange-disk-5856.faniw6556.workers.dev",
        "23.TLS.orange-disk-5856.faniw6556.workers.dev",
        "24.TLS.orange-disk-5856.faniw6556.workers.dev",
        "25.TLS.orange-disk-5856.faniw6556.workers.dev",
        "26.TLS.orange-disk-5856.faniw6556.workers.dev",
        "27.TLS.orange-disk-5856.faniw6556.workers.dev",
        "28.TLS.orange-disk-5856.faniw6556.workers.dev",
        "29.TLS.purple-term-e1bd.mocica6862.workers.dev",
        "30.TLS.purple-term-e1bd.mocica6862.workers.dev",
        "31.TLS.purple-term-e1bd.mocica6862.workers.dev",
        "32.TLS.purple-term-e1bd.mocica6862.workers.dev",
        "33.TLS.purple-term-e1bd.mocica6862.workers.dev",
        "34.TLS.purple-term-e1bd.mocica6862.workers.dev",
        "35.TLS.purple-term-e1bd.mocica6862.workers.dev",
        "36.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
        "37.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
        "38.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
        "39.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
        "40.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
        "41.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
        "42.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
        "43.TLS.sweet-night-7b32.najefe48575.workers.dev",
        "44.TLS.sweet-night-7b32.najefe48575.workers.dev",
        "45.TLS.sweet-night-7b32.najefe48575.workers.dev",
        "46.TLS.sweet-night-7b32.najefe48575.workers.dev",
        "47.TLS.sweet-night-7b32.najefe48575.workers.dev",
        "48.TLS.sweet-night-7b32.najefe48575.workers.dev",
        "49.TLS.sweet-night-7b32.najefe48575.workers.dev",
        "50.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
        "51.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
        "52.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
        "53.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
        "54.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
        "55.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
        "56.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
        "57.TLS.wispy-flower-83f2.daleh43175.workers.dev",
        "58.TLS.wispy-flower-83f2.daleh43175.workers.dev",
        "59.TLS.wispy-flower-83f2.daleh43175.workers.dev",
        "60.TLS.wispy-flower-83f2.daleh43175.workers.dev",
        "61.TLS.wispy-flower-83f2.daleh43175.workers.dev",
        "62.TLS.wispy-flower-83f2.daleh43175.workers.dev",
        "63.TLS.wispy-flower-83f2.daleh43175.workers.dev",
        "64.TLS.worker1.vayebak881f.workers.dev",
        "65.TLS.worker1.vayebak881f.workers.dev",
        "66.TLS.worker1.vayebak881f.workers.dev",
        "67.TLS.worker1.vayebak881f.workers.dev",
        "68.TLS.worker1.vayebak881f.workers.dev",
        "69.TLS.worker1.vayebak881f.workers.dev",
        "70.TLS.worker1.vayebak881f.workers.dev"
      ]
    },
    {
      "tag": "URL-TEST",
      "type": "urltest",
      "outbounds": [
        "1.TLS.falling-thunder-9805.cidayo573832.workers.dev",
        "2.TLS.falling-thunder-9805.cidayo573832.workers.dev",
        "3.TLS.falling-thunder-9805.cidayo573832.workers.dev",
        "4.TLS.falling-thunder-9805.cidayo573832.workers.dev",
        "5.TLS.falling-thunder-9805.cidayo573832.workers.dev",
        "6.TLS.falling-thunder-9805.cidayo573832.workers.dev",
        "7.TLS.falling-thunder-9805.cidayo573832.workers.dev",
        "8.TLS.misty-glitter-236a.hemecap538.workers.dev",
        "9.TLS.misty-glitter-236a.hemecap538.workers.dev",
        "10.TLS.misty-glitter-236a.hemecap538.workers.dev",
        "11.TLS.misty-glitter-236a.hemecap538.workers.dev",
        "12.TLS.misty-glitter-236a.hemecap538.workers.dev",
        "13.TLS.misty-glitter-236a.hemecap538.workers.dev",
        "14.TLS.misty-glitter-236a.hemecap538.workers.dev",
        "15.TLS.misty-rain-9243.nojisoj4574.workers.dev",
        "16.TLS.misty-rain-9243.nojisoj4574.workers.dev",
        "17.TLS.misty-rain-9243.nojisoj4574.workers.dev",
        "18.TLS.misty-rain-9243.nojisoj4574.workers.dev",
        "19.TLS.misty-rain-9243.nojisoj4574.workers.dev",
        "20.TLS.misty-rain-9243.nojisoj4574.workers.dev",
        "21.TLS.misty-rain-9243.nojisoj4574.workers.dev",
        "22.TLS.orange-disk-5856.faniw6556.workers.dev",
        "23.TLS.orange-disk-5856.faniw6556.workers.dev",
        "24.TLS.orange-disk-5856.faniw6556.workers.dev",
        "25.TLS.orange-disk-5856.faniw6556.workers.dev",
        "26.TLS.orange-disk-5856.faniw6556.workers.dev",
        "27.TLS.orange-disk-5856.faniw6556.workers.dev",
        "28.TLS.orange-disk-5856.faniw6556.workers.dev",
        "29.TLS.purple-term-e1bd.mocica6862.workers.dev",
        "30.TLS.purple-term-e1bd.mocica6862.workers.dev",
        "31.TLS.purple-term-e1bd.mocica6862.workers.dev",
        "32.TLS.purple-term-e1bd.mocica6862.workers.dev",
        "33.TLS.purple-term-e1bd.mocica6862.workers.dev",
        "34.TLS.purple-term-e1bd.mocica6862.workers.dev",
        "35.TLS.purple-term-e1bd.mocica6862.workers.dev",
        "36.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
        "37.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
        "38.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
        "39.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
        "40.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
        "41.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
        "42.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
        "43.TLS.sweet-night-7b32.najefe48575.workers.dev",
        "44.TLS.sweet-night-7b32.najefe48575.workers.dev",
        "45.TLS.sweet-night-7b32.najefe48575.workers.dev",
        "46.TLS.sweet-night-7b32.najefe48575.workers.dev",
        "47.TLS.sweet-night-7b32.najefe48575.workers.dev",
        "48.TLS.sweet-night-7b32.najefe48575.workers.dev",
        "49.TLS.sweet-night-7b32.najefe48575.workers.dev",
        "50.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
        "51.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
        "52.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
        "53.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
        "54.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
        "55.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
        "56.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
        "57.TLS.wispy-flower-83f2.daleh43175.workers.dev",
        "58.TLS.wispy-flower-83f2.daleh43175.workers.dev",
        "59.TLS.wispy-flower-83f2.daleh43175.workers.dev",
        "60.TLS.wispy-flower-83f2.daleh43175.workers.dev",
        "61.TLS.wispy-flower-83f2.daleh43175.workers.dev",
        "62.TLS.wispy-flower-83f2.daleh43175.workers.dev",
        "63.TLS.wispy-flower-83f2.daleh43175.workers.dev",
        "64.TLS.worker1.vayebak881f.workers.dev",
        "65.TLS.worker1.vayebak881f.workers.dev",
        "66.TLS.worker1.vayebak881f.workers.dev",
        "67.TLS.worker1.vayebak881f.workers.dev",
        "68.TLS.worker1.vayebak881f.workers.dev",
        "69.TLS.worker1.vayebak881f.workers.dev",
        "70.TLS.worker1.vayebak881f.workers.dev"
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
      "tag": "1.TLS.falling-thunder-9805.cidayo573832.workers.dev",
      "server": "104.18.89.237",
      "server_port": 433,
      "uuid": "04b530fb-5157-4511-8af6-0e503101d529",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "falling-thunder-9805.cidayo573832.workers.dev",
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
          "Host": "falling-thunder-9805.cidayo573832.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "2.TLS.falling-thunder-9805.cidayo573832.workers.dev",
      "server": "104.26.14.85",
      "server_port": 433,
      "uuid": "04b530fb-5157-4511-8af6-0e503101d529",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "falling-thunder-9805.cidayo573832.workers.dev",
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
          "Host": "falling-thunder-9805.cidayo573832.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "3.TLS.falling-thunder-9805.cidayo573832.workers.dev",
      "server": "104.18.22.19",
      "server_port": 433,
      "uuid": "04b530fb-5157-4511-8af6-0e503101d529",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "falling-thunder-9805.cidayo573832.workers.dev",
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
          "Host": "falling-thunder-9805.cidayo573832.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "4.TLS.falling-thunder-9805.cidayo573832.workers.dev",
      "server": "104.16.171.9",
      "server_port": 433,
      "uuid": "04b530fb-5157-4511-8af6-0e503101d529",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "falling-thunder-9805.cidayo573832.workers.dev",
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
          "Host": "falling-thunder-9805.cidayo573832.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "5.TLS.falling-thunder-9805.cidayo573832.workers.dev",
      "server": "104.18.32.47",
      "server_port": 433,
      "uuid": "04b530fb-5157-4511-8af6-0e503101d529",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "falling-thunder-9805.cidayo573832.workers.dev",
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
          "Host": "falling-thunder-9805.cidayo573832.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "6.TLS.falling-thunder-9805.cidayo573832.workers.dev",
      "server": "104.18.90.237",
      "server_port": 433,
      "uuid": "04b530fb-5157-4511-8af6-0e503101d529",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "falling-thunder-9805.cidayo573832.workers.dev",
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
          "Host": "falling-thunder-9805.cidayo573832.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "7.TLS.falling-thunder-9805.cidayo573832.workers.dev",
      "server": "172.67.73.216",
      "server_port": 433,
      "uuid": "04b530fb-5157-4511-8af6-0e503101d529",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "falling-thunder-9805.cidayo573832.workers.dev",
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
          "Host": "falling-thunder-9805.cidayo573832.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "8.TLS.misty-glitter-236a.hemecap538.workers.dev",
      "server": "104.26.14.85",
      "server_port": 433,
      "uuid": "d9755e29-ca7b-479c-9fbd-35b10136b5d9",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "misty-glitter-236a.hemecap538.workers.dev",
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
          "Host": "misty-glitter-236a.hemecap538.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "9.TLS.misty-glitter-236a.hemecap538.workers.dev",
      "server": "104.16.171.9",
      "server_port": 433,
      "uuid": "d9755e29-ca7b-479c-9fbd-35b10136b5d9",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "misty-glitter-236a.hemecap538.workers.dev",
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
          "Host": "misty-glitter-236a.hemecap538.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "10.TLS.misty-glitter-236a.hemecap538.workers.dev",
      "server": "104.18.32.47",
      "server_port": 433,
      "uuid": "d9755e29-ca7b-479c-9fbd-35b10136b5d9",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "misty-glitter-236a.hemecap538.workers.dev",
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
          "Host": "misty-glitter-236a.hemecap538.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "11.TLS.misty-glitter-236a.hemecap538.workers.dev",
      "server": "172.67.73.216",
      "server_port": 433,
      "uuid": "d9755e29-ca7b-479c-9fbd-35b10136b5d9",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "misty-glitter-236a.hemecap538.workers.dev",
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
          "Host": "misty-glitter-236a.hemecap538.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "12.TLS.misty-glitter-236a.hemecap538.workers.dev",
      "server": "104.18.90.237",
      "server_port": 433,
      "uuid": "d9755e29-ca7b-479c-9fbd-35b10136b5d9",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "misty-glitter-236a.hemecap538.workers.dev",
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
          "Host": "misty-glitter-236a.hemecap538.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "13.TLS.misty-glitter-236a.hemecap538.workers.dev",
      "server": "104.18.89.237",
      "server_port": 433,
      "uuid": "d9755e29-ca7b-479c-9fbd-35b10136b5d9",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "misty-glitter-236a.hemecap538.workers.dev",
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
          "Host": "misty-glitter-236a.hemecap538.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "14.TLS.misty-glitter-236a.hemecap538.workers.dev",
      "server": "104.18.22.19",
      "server_port": 433,
      "uuid": "d9755e29-ca7b-479c-9fbd-35b10136b5d9",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "misty-glitter-236a.hemecap538.workers.dev",
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
          "Host": "misty-glitter-236a.hemecap538.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "15.TLS.misty-rain-9243.nojisoj4574.workers.dev",
      "server": "104.16.171.9",
      "server_port": 433,
      "uuid": "fa59982e-84fb-4761-944a-45b9bbd432b3",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "misty-rain-9243.nojisoj4574.workers.dev",
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
          "Host": "misty-rain-9243.nojisoj4574.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "16.TLS.misty-rain-9243.nojisoj4574.workers.dev",
      "server": "104.18.22.19",
      "server_port": 433,
      "uuid": "fa59982e-84fb-4761-944a-45b9bbd432b3",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "misty-rain-9243.nojisoj4574.workers.dev",
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
          "Host": "misty-rain-9243.nojisoj4574.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "17.TLS.misty-rain-9243.nojisoj4574.workers.dev",
      "server": "172.67.73.216",
      "server_port": 433,
      "uuid": "fa59982e-84fb-4761-944a-45b9bbd432b3",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "misty-rain-9243.nojisoj4574.workers.dev",
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
          "Host": "misty-rain-9243.nojisoj4574.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "18.TLS.misty-rain-9243.nojisoj4574.workers.dev",
      "server": "104.18.32.47",
      "server_port": 433,
      "uuid": "fa59982e-84fb-4761-944a-45b9bbd432b3",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "misty-rain-9243.nojisoj4574.workers.dev",
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
          "Host": "misty-rain-9243.nojisoj4574.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "19.TLS.misty-rain-9243.nojisoj4574.workers.dev",
      "server": "104.26.14.85",
      "server_port": 433,
      "uuid": "fa59982e-84fb-4761-944a-45b9bbd432b3",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "misty-rain-9243.nojisoj4574.workers.dev",
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
          "Host": "misty-rain-9243.nojisoj4574.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "20.TLS.misty-rain-9243.nojisoj4574.workers.dev",
      "server": "104.18.89.237",
      "server_port": 433,
      "uuid": "fa59982e-84fb-4761-944a-45b9bbd432b3",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "misty-rain-9243.nojisoj4574.workers.dev",
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
          "Host": "misty-rain-9243.nojisoj4574.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "21.TLS.misty-rain-9243.nojisoj4574.workers.dev",
      "server": "104.18.90.237",
      "server_port": 433,
      "uuid": "fa59982e-84fb-4761-944a-45b9bbd432b3",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "misty-rain-9243.nojisoj4574.workers.dev",
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
          "Host": "misty-rain-9243.nojisoj4574.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "22.TLS.orange-disk-5856.faniw6556.workers.dev",
      "server": "104.18.89.237",
      "server_port": 433,
      "uuid": "cbc7eb4f-50e4-4efd-bf66-988e1811c610",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "orange-disk-5856.faniw6556.workers.dev",
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
          "Host": "orange-disk-5856.faniw6556.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "23.TLS.orange-disk-5856.faniw6556.workers.dev",
      "server": "104.26.14.85",
      "server_port": 433,
      "uuid": "cbc7eb4f-50e4-4efd-bf66-988e1811c610",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "orange-disk-5856.faniw6556.workers.dev",
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
          "Host": "orange-disk-5856.faniw6556.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "24.TLS.orange-disk-5856.faniw6556.workers.dev",
      "server": "104.18.90.237",
      "server_port": 433,
      "uuid": "cbc7eb4f-50e4-4efd-bf66-988e1811c610",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "orange-disk-5856.faniw6556.workers.dev",
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
          "Host": "orange-disk-5856.faniw6556.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "25.TLS.orange-disk-5856.faniw6556.workers.dev",
      "server": "172.67.73.216",
      "server_port": 433,
      "uuid": "cbc7eb4f-50e4-4efd-bf66-988e1811c610",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "orange-disk-5856.faniw6556.workers.dev",
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
          "Host": "orange-disk-5856.faniw6556.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "26.TLS.orange-disk-5856.faniw6556.workers.dev",
      "server": "104.18.22.19",
      "server_port": 433,
      "uuid": "cbc7eb4f-50e4-4efd-bf66-988e1811c610",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "orange-disk-5856.faniw6556.workers.dev",
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
          "Host": "orange-disk-5856.faniw6556.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "27.TLS.orange-disk-5856.faniw6556.workers.dev",
      "server": "104.16.171.9",
      "server_port": 433,
      "uuid": "cbc7eb4f-50e4-4efd-bf66-988e1811c610",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "orange-disk-5856.faniw6556.workers.dev",
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
          "Host": "orange-disk-5856.faniw6556.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "28.TLS.orange-disk-5856.faniw6556.workers.dev",
      "server": "104.18.32.47",
      "server_port": 433,
      "uuid": "cbc7eb4f-50e4-4efd-bf66-988e1811c610",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "orange-disk-5856.faniw6556.workers.dev",
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
          "Host": "orange-disk-5856.faniw6556.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "29.TLS.purple-term-e1bd.mocica6862.workers.dev",
      "server": "104.16.171.9",
      "server_port": 433,
      "uuid": "8aa33c0d-eefd-4d28-8a8e-673229ac78e1",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "purple-term-e1bd.mocica6862.workers.dev",
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
          "Host": "purple-term-e1bd.mocica6862.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "30.TLS.purple-term-e1bd.mocica6862.workers.dev",
      "server": "104.26.14.85",
      "server_port": 433,
      "uuid": "8aa33c0d-eefd-4d28-8a8e-673229ac78e1",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "purple-term-e1bd.mocica6862.workers.dev",
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
          "Host": "purple-term-e1bd.mocica6862.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "31.TLS.purple-term-e1bd.mocica6862.workers.dev",
      "server": "104.18.22.19",
      "server_port": 433,
      "uuid": "8aa33c0d-eefd-4d28-8a8e-673229ac78e1",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "purple-term-e1bd.mocica6862.workers.dev",
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
          "Host": "purple-term-e1bd.mocica6862.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "32.TLS.purple-term-e1bd.mocica6862.workers.dev",
      "server": "104.18.90.237",
      "server_port": 433,
      "uuid": "8aa33c0d-eefd-4d28-8a8e-673229ac78e1",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "purple-term-e1bd.mocica6862.workers.dev",
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
          "Host": "purple-term-e1bd.mocica6862.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "33.TLS.purple-term-e1bd.mocica6862.workers.dev",
      "server": "104.18.89.237",
      "server_port": 433,
      "uuid": "8aa33c0d-eefd-4d28-8a8e-673229ac78e1",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "purple-term-e1bd.mocica6862.workers.dev",
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
          "Host": "purple-term-e1bd.mocica6862.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "34.TLS.purple-term-e1bd.mocica6862.workers.dev",
      "server": "172.67.73.216",
      "server_port": 433,
      "uuid": "8aa33c0d-eefd-4d28-8a8e-673229ac78e1",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "purple-term-e1bd.mocica6862.workers.dev",
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
          "Host": "purple-term-e1bd.mocica6862.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "35.TLS.purple-term-e1bd.mocica6862.workers.dev",
      "server": "104.18.32.47",
      "server_port": 433,
      "uuid": "8aa33c0d-eefd-4d28-8a8e-673229ac78e1",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "purple-term-e1bd.mocica6862.workers.dev",
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
          "Host": "purple-term-e1bd.mocica6862.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "36.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
      "server": "104.18.90.237",
      "server_port": 433,
      "uuid": "bbbd96a7-87fa-4791-bdbf-878b5f836bd0",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "sparkling-smoke-f623.bomavaf5785.workers.dev",
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
          "Host": "sparkling-smoke-f623.bomavaf5785.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "37.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
      "server": "104.18.22.19",
      "server_port": 433,
      "uuid": "bbbd96a7-87fa-4791-bdbf-878b5f836bd0",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "sparkling-smoke-f623.bomavaf5785.workers.dev",
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
          "Host": "sparkling-smoke-f623.bomavaf5785.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "38.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
      "server": "104.26.14.85",
      "server_port": 433,
      "uuid": "bbbd96a7-87fa-4791-bdbf-878b5f836bd0",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "sparkling-smoke-f623.bomavaf5785.workers.dev",
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
          "Host": "sparkling-smoke-f623.bomavaf5785.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "39.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
      "server": "104.16.171.9",
      "server_port": 433,
      "uuid": "bbbd96a7-87fa-4791-bdbf-878b5f836bd0",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "sparkling-smoke-f623.bomavaf5785.workers.dev",
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
          "Host": "sparkling-smoke-f623.bomavaf5785.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "40.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
      "server": "104.18.89.237",
      "server_port": 433,
      "uuid": "bbbd96a7-87fa-4791-bdbf-878b5f836bd0",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "sparkling-smoke-f623.bomavaf5785.workers.dev",
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
          "Host": "sparkling-smoke-f623.bomavaf5785.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "41.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
      "server": "172.67.73.216",
      "server_port": 433,
      "uuid": "bbbd96a7-87fa-4791-bdbf-878b5f836bd0",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "sparkling-smoke-f623.bomavaf5785.workers.dev",
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
          "Host": "sparkling-smoke-f623.bomavaf5785.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "42.TLS.sparkling-smoke-f623.bomavaf5785.workers.dev",
      "server": "104.18.32.47",
      "server_port": 433,
      "uuid": "bbbd96a7-87fa-4791-bdbf-878b5f836bd0",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "sparkling-smoke-f623.bomavaf5785.workers.dev",
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
          "Host": "sparkling-smoke-f623.bomavaf5785.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "43.TLS.sweet-night-7b32.najefe48575.workers.dev",
      "server": "104.26.14.85",
      "server_port": 433,
      "uuid": "432b7d60-cc03-4e81-a492-e7477bcd0987",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "sweet-night-7b32.najefe48575.workers.dev",
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
          "Host": "sweet-night-7b32.najefe48575.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "44.TLS.sweet-night-7b32.najefe48575.workers.dev",
      "server": "104.18.22.19",
      "server_port": 433,
      "uuid": "432b7d60-cc03-4e81-a492-e7477bcd0987",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "sweet-night-7b32.najefe48575.workers.dev",
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
          "Host": "sweet-night-7b32.najefe48575.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "45.TLS.sweet-night-7b32.najefe48575.workers.dev",
      "server": "104.16.171.9",
      "server_port": 433,
      "uuid": "432b7d60-cc03-4e81-a492-e7477bcd0987",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "sweet-night-7b32.najefe48575.workers.dev",
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
          "Host": "sweet-night-7b32.najefe48575.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "46.TLS.sweet-night-7b32.najefe48575.workers.dev",
      "server": "104.18.90.237",
      "server_port": 433,
      "uuid": "432b7d60-cc03-4e81-a492-e7477bcd0987",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "sweet-night-7b32.najefe48575.workers.dev",
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
          "Host": "sweet-night-7b32.najefe48575.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "47.TLS.sweet-night-7b32.najefe48575.workers.dev",
      "server": "172.67.73.216",
      "server_port": 433,
      "uuid": "432b7d60-cc03-4e81-a492-e7477bcd0987",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "sweet-night-7b32.najefe48575.workers.dev",
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
          "Host": "sweet-night-7b32.najefe48575.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "48.TLS.sweet-night-7b32.najefe48575.workers.dev",
      "server": "104.18.32.47",
      "server_port": 433,
      "uuid": "432b7d60-cc03-4e81-a492-e7477bcd0987",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "sweet-night-7b32.najefe48575.workers.dev",
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
          "Host": "sweet-night-7b32.najefe48575.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "49.TLS.sweet-night-7b32.najefe48575.workers.dev",
      "server": "104.18.89.237",
      "server_port": 433,
      "uuid": "432b7d60-cc03-4e81-a492-e7477bcd0987",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "sweet-night-7b32.najefe48575.workers.dev",
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
          "Host": "sweet-night-7b32.najefe48575.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "50.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
      "server": "104.18.90.237",
      "server_port": 433,
      "uuid": "97c82013-32ab-4717-9615-8b91a8a330ea",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "twilight-bush-bfe8.fotatoc62553.workers.dev",
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
          "Host": "twilight-bush-bfe8.fotatoc62553.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "51.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
      "server": "104.18.22.19",
      "server_port": 433,
      "uuid": "97c82013-32ab-4717-9615-8b91a8a330ea",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "twilight-bush-bfe8.fotatoc62553.workers.dev",
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
          "Host": "twilight-bush-bfe8.fotatoc62553.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "52.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
      "server": "104.18.32.47",
      "server_port": 433,
      "uuid": "97c82013-32ab-4717-9615-8b91a8a330ea",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "twilight-bush-bfe8.fotatoc62553.workers.dev",
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
          "Host": "twilight-bush-bfe8.fotatoc62553.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "53.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
      "server": "104.16.171.9",
      "server_port": 433,
      "uuid": "97c82013-32ab-4717-9615-8b91a8a330ea",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "twilight-bush-bfe8.fotatoc62553.workers.dev",
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
          "Host": "twilight-bush-bfe8.fotatoc62553.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "54.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
      "server": "104.26.14.85",
      "server_port": 433,
      "uuid": "97c82013-32ab-4717-9615-8b91a8a330ea",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "twilight-bush-bfe8.fotatoc62553.workers.dev",
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
          "Host": "twilight-bush-bfe8.fotatoc62553.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "55.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
      "server": "104.18.89.237",
      "server_port": 433,
      "uuid": "97c82013-32ab-4717-9615-8b91a8a330ea",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "twilight-bush-bfe8.fotatoc62553.workers.dev",
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
          "Host": "twilight-bush-bfe8.fotatoc62553.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "56.TLS.twilight-bush-bfe8.fotatoc62553.workers.dev",
      "server": "172.67.73.216",
      "server_port": 433,
      "uuid": "97c82013-32ab-4717-9615-8b91a8a330ea",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "twilight-bush-bfe8.fotatoc62553.workers.dev",
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
          "Host": "twilight-bush-bfe8.fotatoc62553.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "57.TLS.wispy-flower-83f2.daleh43175.workers.dev",
      "server": "104.18.32.47",
      "server_port": 433,
      "uuid": "eac6871a-d89e-4135-9da6-7425c0831c9d",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "wispy-flower-83f2.daleh43175.workers.dev",
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
          "Host": "wispy-flower-83f2.daleh43175.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "58.TLS.wispy-flower-83f2.daleh43175.workers.dev",
      "server": "104.18.22.19",
      "server_port": 433,
      "uuid": "eac6871a-d89e-4135-9da6-7425c0831c9d",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "wispy-flower-83f2.daleh43175.workers.dev",
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
          "Host": "wispy-flower-83f2.daleh43175.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "59.TLS.wispy-flower-83f2.daleh43175.workers.dev",
      "server": "104.18.89.237",
      "server_port": 433,
      "uuid": "eac6871a-d89e-4135-9da6-7425c0831c9d",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "wispy-flower-83f2.daleh43175.workers.dev",
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
          "Host": "wispy-flower-83f2.daleh43175.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "60.TLS.wispy-flower-83f2.daleh43175.workers.dev",
      "server": "172.67.73.216",
      "server_port": 433,
      "uuid": "eac6871a-d89e-4135-9da6-7425c0831c9d",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "wispy-flower-83f2.daleh43175.workers.dev",
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
          "Host": "wispy-flower-83f2.daleh43175.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "61.TLS.wispy-flower-83f2.daleh43175.workers.dev",
      "server": "104.16.171.9",
      "server_port": 433,
      "uuid": "eac6871a-d89e-4135-9da6-7425c0831c9d",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "wispy-flower-83f2.daleh43175.workers.dev",
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
          "Host": "wispy-flower-83f2.daleh43175.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "62.TLS.wispy-flower-83f2.daleh43175.workers.dev",
      "server": "104.18.90.237",
      "server_port": 433,
      "uuid": "eac6871a-d89e-4135-9da6-7425c0831c9d",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "wispy-flower-83f2.daleh43175.workers.dev",
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
          "Host": "wispy-flower-83f2.daleh43175.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "63.TLS.wispy-flower-83f2.daleh43175.workers.dev",
      "server": "104.26.14.85",
      "server_port": 433,
      "uuid": "eac6871a-d89e-4135-9da6-7425c0831c9d",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "wispy-flower-83f2.daleh43175.workers.dev",
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
          "Host": "wispy-flower-83f2.daleh43175.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "64.TLS.worker1.vayebak881f.workers.dev",
      "server": "104.18.22.19",
      "server_port": 433,
      "uuid": "3592afc7-6a5b-4859-afda-77b4a1a28398",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.vayebak881f.workers.dev",
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
          "Host": "worker1.vayebak881f.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "65.TLS.worker1.vayebak881f.workers.dev",
      "server": "172.67.73.216",
      "server_port": 433,
      "uuid": "3592afc7-6a5b-4859-afda-77b4a1a28398",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.vayebak881f.workers.dev",
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
          "Host": "worker1.vayebak881f.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "66.TLS.worker1.vayebak881f.workers.dev",
      "server": "104.18.32.47",
      "server_port": 433,
      "uuid": "3592afc7-6a5b-4859-afda-77b4a1a28398",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.vayebak881f.workers.dev",
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
          "Host": "worker1.vayebak881f.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "67.TLS.worker1.vayebak881f.workers.dev",
      "server": "104.18.90.237",
      "server_port": 433,
      "uuid": "3592afc7-6a5b-4859-afda-77b4a1a28398",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.vayebak881f.workers.dev",
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
          "Host": "worker1.vayebak881f.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "68.TLS.worker1.vayebak881f.workers.dev",
      "server": "104.16.171.9",
      "server_port": 433,
      "uuid": "3592afc7-6a5b-4859-afda-77b4a1a28398",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.vayebak881f.workers.dev",
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
          "Host": "worker1.vayebak881f.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "69.TLS.worker1.vayebak881f.workers.dev",
      "server": "104.18.89.237",
      "server_port": 433,
      "uuid": "3592afc7-6a5b-4859-afda-77b4a1a28398",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.vayebak881f.workers.dev",
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
          "Host": "worker1.vayebak881f.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "70.TLS.worker1.vayebak881f.workers.dev",
      "server": "104.26.14.85",
      "server_port": 433,
      "uuid": "3592afc7-6a5b-4859-afda-77b4a1a28398",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.vayebak881f.workers.dev",
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
          "Host": "worker1.vayebak881f.workers.dev"
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
