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
        "server": "8.8.8.8",
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
        "type": "fakeip",
        "tag": "fakeip",
        "inet4_range": "198.18.0.0/15",
        "inet6_range": "fc00::/18"
      }
    ],
    "rules": [
      {
        "domain": [
          "tgju.org",
          "www.speedtest.net",
          "b2n.ir",
          "zula.ir"
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
        "clash_mode": "youtube",
        "server": "dns-frag"
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
        "1.TLS.worker1.fivon81984.workers.dev",
        "2.TLS.worker1.fivon81984.workers.dev",
        "3.TLS.worker1.fivon81984.workers.dev",
        "4.TLS.worker1.fivon81984.workers.dev",
        "5.TLS.worker1.fivon81984.workers.dev",
        "6.TLS.worker1.fivon81984.workers.dev",
        "7.TLS.worker1.fivon81984.workers.dev",
        "8.TLS.worker1.wimat94374.workers.dev",
        "9.TLS.worker1.wimat94374.workers.dev",
        "10.TLS.worker1.wimat94374.workers.dev",
        "11.TLS.worker1.wimat94374.workers.dev",
        "12.TLS.worker1.wimat94374.workers.dev",
        "13.TLS.worker1.wimat94374.workers.dev",
        "14.TLS.worker1.wimat94374.workers.dev",
        "15.TLS.worker1.coxiy35895.workers.dev",
        "16.TLS.worker1.coxiy35895.workers.dev",
        "17.TLS.worker1.coxiy35895.workers.dev",
        "18.TLS.worker1.coxiy35895.workers.dev",
        "19.TLS.worker1.coxiy35895.workers.dev",
        "20.TLS.worker1.coxiy35895.workers.dev",
        "21.TLS.worker1.coxiy35895.workers.dev",
        "22.TLS.worker2.mepepek404.workers.dev",
        "23.TLS.worker2.mepepek404.workers.dev",
        "24.TLS.worker2.mepepek404.workers.dev",
        "25.TLS.worker2.mepepek404.workers.dev",
        "26.TLS.worker2.mepepek404.workers.dev",
        "27.TLS.worker2.mepepek404.workers.dev",
        "28.TLS.worker2.mepepek404.workers.dev",
        "29.TLS.worker2.yenel5385.workers.dev",
        "30.TLS.worker2.yenel5385.workers.dev",
        "31.TLS.worker2.yenel5385.workers.dev",
        "32.TLS.worker2.yenel5385.workers.dev",
        "33.TLS.worker2.yenel5385.workers.dev",
        "34.TLS.worker2.yenel5385.workers.dev",
        "35.TLS.worker2.yenel5385.workers.dev",
        "36.TLS.worker3.jegakey970.workers.dev",
        "37.TLS.worker3.jegakey970.workers.dev",
        "38.TLS.worker3.jegakey970.workers.dev",
        "39.TLS.worker3.jegakey970.workers.dev",
        "40.TLS.worker3.jegakey970.workers.dev",
        "41.TLS.worker3.jegakey970.workers.dev",
        "42.TLS.worker3.jegakey970.workers.dev",
        "43.TLS.worker3.kehave6570.workers.dev",
        "44.TLS.worker3.kehave6570.workers.dev",
        "45.TLS.worker3.kehave6570.workers.dev",
        "46.TLS.worker3.kehave6570.workers.dev",
        "47.TLS.worker3.kehave6570.workers.dev",
        "48.TLS.worker3.kehave6570.workers.dev",
        "49.TLS.worker3.kehave6570.workers.dev",
        "50.TLS.worker3.kexenen3585.workers.dev",
        "51.TLS.worker3.kexenen3585.workers.dev",
        "52.TLS.worker3.kexenen3585.workers.dev",
        "53.TLS.worker3.kexenen3585.workers.dev",
        "54.TLS.worker3.kexenen3585.workers.dev",
        "55.TLS.worker3.kexenen3585.workers.dev",
        "56.TLS.worker3.kexenen3585.workers.dev",
        "57.TLS.worker3.pokena4337.workers.dev",
        "58.TLS.worker3.pokena4337.workers.dev",
        "59.TLS.worker3.pokena4337.workers.dev",
        "60.TLS.worker3.pokena4337.workers.dev",
        "61.TLS.worker3.pokena4337.workers.dev",
        "62.TLS.worker3.pokena4337.workers.dev",
        "63.TLS.worker3.pokena4337.workers.dev",
        "64.TLS.worker3.jawic89245.workers.dev",
        "65.TLS.worker3.jawic89245.workers.dev",
        "66.TLS.worker3.jawic89245.workers.dev",
        "67.TLS.worker3.jawic89245.workers.dev",
        "68.TLS.worker3.jawic89245.workers.dev",
        "69.TLS.worker3.jawic89245.workers.dev",
        "70.TLS.worker3.jawic89245.workers.dev"
      ]
    },
    {
      "tag": "URL-TEST",
      "type": "urltest",
      "outbounds": [
        "1.TLS.worker1.fivon81984.workers.dev",
        "2.TLS.worker1.fivon81984.workers.dev",
        "3.TLS.worker1.fivon81984.workers.dev",
        "4.TLS.worker1.fivon81984.workers.dev",
        "5.TLS.worker1.fivon81984.workers.dev",
        "6.TLS.worker1.fivon81984.workers.dev",
        "7.TLS.worker1.fivon81984.workers.dev",
        "8.TLS.worker1.wimat94374.workers.dev",
        "9.TLS.worker1.wimat94374.workers.dev",
        "10.TLS.worker1.wimat94374.workers.dev",
        "11.TLS.worker1.wimat94374.workers.dev",
        "12.TLS.worker1.wimat94374.workers.dev",
        "13.TLS.worker1.wimat94374.workers.dev",
        "14.TLS.worker1.wimat94374.workers.dev",
        "15.TLS.worker1.coxiy35895.workers.dev",
        "16.TLS.worker1.coxiy35895.workers.dev",
        "17.TLS.worker1.coxiy35895.workers.dev",
        "18.TLS.worker1.coxiy35895.workers.dev",
        "19.TLS.worker1.coxiy35895.workers.dev",
        "20.TLS.worker1.coxiy35895.workers.dev",
        "21.TLS.worker1.coxiy35895.workers.dev",
        "22.TLS.worker2.mepepek404.workers.dev",
        "23.TLS.worker2.mepepek404.workers.dev",
        "24.TLS.worker2.mepepek404.workers.dev",
        "25.TLS.worker2.mepepek404.workers.dev",
        "26.TLS.worker2.mepepek404.workers.dev",
        "27.TLS.worker2.mepepek404.workers.dev",
        "28.TLS.worker2.mepepek404.workers.dev",
        "29.TLS.worker2.yenel5385.workers.dev",
        "30.TLS.worker2.yenel5385.workers.dev",
        "31.TLS.worker2.yenel5385.workers.dev",
        "32.TLS.worker2.yenel5385.workers.dev",
        "33.TLS.worker2.yenel5385.workers.dev",
        "34.TLS.worker2.yenel5385.workers.dev",
        "35.TLS.worker2.yenel5385.workers.dev",
        "36.TLS.worker3.jegakey970.workers.dev",
        "37.TLS.worker3.jegakey970.workers.dev",
        "38.TLS.worker3.jegakey970.workers.dev",
        "39.TLS.worker3.jegakey970.workers.dev",
        "40.TLS.worker3.jegakey970.workers.dev",
        "41.TLS.worker3.jegakey970.workers.dev",
        "42.TLS.worker3.jegakey970.workers.dev",
        "43.TLS.worker3.kehave6570.workers.dev",
        "44.TLS.worker3.kehave6570.workers.dev",
        "45.TLS.worker3.kehave6570.workers.dev",
        "46.TLS.worker3.kehave6570.workers.dev",
        "47.TLS.worker3.kehave6570.workers.dev",
        "48.TLS.worker3.kehave6570.workers.dev",
        "49.TLS.worker3.kehave6570.workers.dev",
        "50.TLS.worker3.kexenen3585.workers.dev",
        "51.TLS.worker3.kexenen3585.workers.dev",
        "52.TLS.worker3.kexenen3585.workers.dev",
        "53.TLS.worker3.kexenen3585.workers.dev",
        "54.TLS.worker3.kexenen3585.workers.dev",
        "55.TLS.worker3.kexenen3585.workers.dev",
        "56.TLS.worker3.kexenen3585.workers.dev",
        "57.TLS.worker3.pokena4337.workers.dev",
        "58.TLS.worker3.pokena4337.workers.dev",
        "59.TLS.worker3.pokena4337.workers.dev",
        "60.TLS.worker3.pokena4337.workers.dev",
        "61.TLS.worker3.pokena4337.workers.dev",
        "62.TLS.worker3.pokena4337.workers.dev",
        "63.TLS.worker3.pokena4337.workers.dev",
        "64.TLS.worker3.jawic89245.workers.dev",
        "65.TLS.worker3.jawic89245.workers.dev",
        "66.TLS.worker3.jawic89245.workers.dev",
        "67.TLS.worker3.jawic89245.workers.dev",
        "68.TLS.worker3.jawic89245.workers.dev",
        "69.TLS.worker3.jawic89245.workers.dev",
        "70.TLS.worker3.jawic89245.workers.dev"
      ],
      "url": "https://www.gstatic.com/generate_204",
      "interval": "10m",
      "tolerance": 50
    },
    {
      "tag": "direct",
      "type": "direct"
    },
    {
      "type": "vless",
      "tag": "1.TLS.worker1.fivon81984.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "28176867-c991-4220-a40d-8133f8e75930",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.fivon81984.workers.dev",
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
          "Host": "worker1.fivon81984.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "2.TLS.worker1.fivon81984.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "28176867-c991-4220-a40d-8133f8e75930",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.fivon81984.workers.dev",
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
          "Host": "worker1.fivon81984.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "3.TLS.worker1.fivon81984.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "28176867-c991-4220-a40d-8133f8e75930",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.fivon81984.workers.dev",
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
          "Host": "worker1.fivon81984.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "4.TLS.worker1.fivon81984.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "28176867-c991-4220-a40d-8133f8e75930",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.fivon81984.workers.dev",
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
          "Host": "worker1.fivon81984.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "5.TLS.worker1.fivon81984.workers.dev",
      "server": "104.17.148.22",
      "server_port": 443,
      "uuid": "28176867-c991-4220-a40d-8133f8e75930",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.fivon81984.workers.dev",
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
          "Host": "worker1.fivon81984.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "6.TLS.worker1.fivon81984.workers.dev",
      "server": "104.18.22.19",
      "server_port": 443,
      "uuid": "28176867-c991-4220-a40d-8133f8e75930",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.fivon81984.workers.dev",
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
          "Host": "worker1.fivon81984.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "7.TLS.worker1.fivon81984.workers.dev",
      "server": "172.67.73.216",
      "server_port": 443,
      "uuid": "28176867-c991-4220-a40d-8133f8e75930",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.fivon81984.workers.dev",
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
          "Host": "worker1.fivon81984.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "8.TLS.worker1.wimat94374.workers.dev",
      "server": "104.18.22.19",
      "server_port": 443,
      "uuid": "dc88e342-62e0-4c9c-9ebd-5de1f36a4dd7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.wimat94374.workers.dev",
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
          "Host": "worker1.wimat94374.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "9.TLS.worker1.wimat94374.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "dc88e342-62e0-4c9c-9ebd-5de1f36a4dd7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.wimat94374.workers.dev",
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
          "Host": "worker1.wimat94374.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "10.TLS.worker1.wimat94374.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "dc88e342-62e0-4c9c-9ebd-5de1f36a4dd7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.wimat94374.workers.dev",
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
          "Host": "worker1.wimat94374.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "11.TLS.worker1.wimat94374.workers.dev",
      "server": "172.67.73.216",
      "server_port": 443,
      "uuid": "dc88e342-62e0-4c9c-9ebd-5de1f36a4dd7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.wimat94374.workers.dev",
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
          "Host": "worker1.wimat94374.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "12.TLS.worker1.wimat94374.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "dc88e342-62e0-4c9c-9ebd-5de1f36a4dd7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.wimat94374.workers.dev",
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
          "Host": "worker1.wimat94374.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "13.TLS.worker1.wimat94374.workers.dev",
      "server": "104.17.148.22",
      "server_port": 443,
      "uuid": "dc88e342-62e0-4c9c-9ebd-5de1f36a4dd7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.wimat94374.workers.dev",
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
          "Host": "worker1.wimat94374.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "14.TLS.worker1.wimat94374.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "dc88e342-62e0-4c9c-9ebd-5de1f36a4dd7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.wimat94374.workers.dev",
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
          "Host": "worker1.wimat94374.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "15.TLS.worker1.coxiy35895.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "8c32936b-177f-4eb0-85ee-814b709a4e5c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.coxiy35895.workers.dev",
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
          "Host": "worker1.coxiy35895.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "16.TLS.worker1.coxiy35895.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "8c32936b-177f-4eb0-85ee-814b709a4e5c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.coxiy35895.workers.dev",
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
          "Host": "worker1.coxiy35895.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "17.TLS.worker1.coxiy35895.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "8c32936b-177f-4eb0-85ee-814b709a4e5c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.coxiy35895.workers.dev",
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
          "Host": "worker1.coxiy35895.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "18.TLS.worker1.coxiy35895.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "8c32936b-177f-4eb0-85ee-814b709a4e5c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.coxiy35895.workers.dev",
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
          "Host": "worker1.coxiy35895.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "19.TLS.worker1.coxiy35895.workers.dev",
      "server": "104.17.148.22",
      "server_port": 443,
      "uuid": "8c32936b-177f-4eb0-85ee-814b709a4e5c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.coxiy35895.workers.dev",
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
          "Host": "worker1.coxiy35895.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "20.TLS.worker1.coxiy35895.workers.dev",
      "server": "172.67.73.216",
      "server_port": 443,
      "uuid": "8c32936b-177f-4eb0-85ee-814b709a4e5c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.coxiy35895.workers.dev",
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
          "Host": "worker1.coxiy35895.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "21.TLS.worker1.coxiy35895.workers.dev",
      "server": "104.18.22.19",
      "server_port": 443,
      "uuid": "8c32936b-177f-4eb0-85ee-814b709a4e5c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker1.coxiy35895.workers.dev",
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
          "Host": "worker1.coxiy35895.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "22.TLS.worker2.mepepek404.workers.dev",
      "server": "104.18.22.19",
      "server_port": 443,
      "uuid": "82a0185d-3f02-4f19-94e4-6ac1a75ed934",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker2.mepepek404.workers.dev",
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
          "Host": "worker2.mepepek404.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "23.TLS.worker2.mepepek404.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "82a0185d-3f02-4f19-94e4-6ac1a75ed934",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker2.mepepek404.workers.dev",
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
          "Host": "worker2.mepepek404.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "24.TLS.worker2.mepepek404.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "82a0185d-3f02-4f19-94e4-6ac1a75ed934",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker2.mepepek404.workers.dev",
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
          "Host": "worker2.mepepek404.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "25.TLS.worker2.mepepek404.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "82a0185d-3f02-4f19-94e4-6ac1a75ed934",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker2.mepepek404.workers.dev",
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
          "Host": "worker2.mepepek404.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "26.TLS.worker2.mepepek404.workers.dev",
      "server": "172.67.73.216",
      "server_port": 443,
      "uuid": "82a0185d-3f02-4f19-94e4-6ac1a75ed934",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker2.mepepek404.workers.dev",
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
          "Host": "worker2.mepepek404.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "27.TLS.worker2.mepepek404.workers.dev",
      "server": "104.17.148.22",
      "server_port": 443,
      "uuid": "82a0185d-3f02-4f19-94e4-6ac1a75ed934",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker2.mepepek404.workers.dev",
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
          "Host": "worker2.mepepek404.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "28.TLS.worker2.mepepek404.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "82a0185d-3f02-4f19-94e4-6ac1a75ed934",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker2.mepepek404.workers.dev",
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
          "Host": "worker2.mepepek404.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "29.TLS.worker2.yenel5385.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "821accb9-33fb-4e15-a10d-e3a5043103e8",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker2.yenel5385.workers.dev",
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
          "Host": "worker2.yenel5385.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "30.TLS.worker2.yenel5385.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "821accb9-33fb-4e15-a10d-e3a5043103e8",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker2.yenel5385.workers.dev",
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
          "Host": "worker2.yenel5385.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "31.TLS.worker2.yenel5385.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "821accb9-33fb-4e15-a10d-e3a5043103e8",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker2.yenel5385.workers.dev",
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
          "Host": "worker2.yenel5385.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "32.TLS.worker2.yenel5385.workers.dev",
      "server": "172.67.73.216",
      "server_port": 443,
      "uuid": "821accb9-33fb-4e15-a10d-e3a5043103e8",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker2.yenel5385.workers.dev",
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
          "Host": "worker2.yenel5385.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "33.TLS.worker2.yenel5385.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "821accb9-33fb-4e15-a10d-e3a5043103e8",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker2.yenel5385.workers.dev",
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
          "Host": "worker2.yenel5385.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "34.TLS.worker2.yenel5385.workers.dev",
      "server": "104.17.148.22",
      "server_port": 443,
      "uuid": "821accb9-33fb-4e15-a10d-e3a5043103e8",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker2.yenel5385.workers.dev",
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
          "Host": "worker2.yenel5385.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "35.TLS.worker2.yenel5385.workers.dev",
      "server": "104.18.22.19",
      "server_port": 443,
      "uuid": "821accb9-33fb-4e15-a10d-e3a5043103e8",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker2.yenel5385.workers.dev",
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
          "Host": "worker2.yenel5385.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "36.TLS.worker3.jegakey970.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "b583a92d-1e45-4714-8c96-dfda2c5d36ab",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.jegakey970.workers.dev",
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
          "Host": "worker3.jegakey970.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "37.TLS.worker3.jegakey970.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "b583a92d-1e45-4714-8c96-dfda2c5d36ab",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.jegakey970.workers.dev",
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
          "Host": "worker3.jegakey970.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "38.TLS.worker3.jegakey970.workers.dev",
      "server": "104.18.22.19",
      "server_port": 443,
      "uuid": "b583a92d-1e45-4714-8c96-dfda2c5d36ab",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.jegakey970.workers.dev",
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
          "Host": "worker3.jegakey970.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "39.TLS.worker3.jegakey970.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "b583a92d-1e45-4714-8c96-dfda2c5d36ab",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.jegakey970.workers.dev",
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
          "Host": "worker3.jegakey970.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "40.TLS.worker3.jegakey970.workers.dev",
      "server": "104.17.148.22",
      "server_port": 443,
      "uuid": "b583a92d-1e45-4714-8c96-dfda2c5d36ab",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.jegakey970.workers.dev",
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
          "Host": "worker3.jegakey970.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "41.TLS.worker3.jegakey970.workers.dev",
      "server": "172.67.73.216",
      "server_port": 443,
      "uuid": "b583a92d-1e45-4714-8c96-dfda2c5d36ab",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.jegakey970.workers.dev",
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
          "Host": "worker3.jegakey970.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "42.TLS.worker3.jegakey970.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "b583a92d-1e45-4714-8c96-dfda2c5d36ab",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.jegakey970.workers.dev",
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
          "Host": "worker3.jegakey970.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "43.TLS.worker3.kehave6570.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "ad063d4d-265a-48d6-95a2-48da86a0207e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.kehave6570.workers.dev",
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
          "Host": "worker3.kehave6570.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "44.TLS.worker3.kehave6570.workers.dev",
      "server": "104.18.22.19",
      "server_port": 443,
      "uuid": "ad063d4d-265a-48d6-95a2-48da86a0207e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.kehave6570.workers.dev",
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
          "Host": "worker3.kehave6570.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "45.TLS.worker3.kehave6570.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "ad063d4d-265a-48d6-95a2-48da86a0207e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.kehave6570.workers.dev",
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
          "Host": "worker3.kehave6570.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "46.TLS.worker3.kehave6570.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "ad063d4d-265a-48d6-95a2-48da86a0207e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.kehave6570.workers.dev",
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
          "Host": "worker3.kehave6570.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "47.TLS.worker3.kehave6570.workers.dev",
      "server": "104.17.148.22",
      "server_port": 443,
      "uuid": "ad063d4d-265a-48d6-95a2-48da86a0207e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.kehave6570.workers.dev",
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
          "Host": "worker3.kehave6570.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "48.TLS.worker3.kehave6570.workers.dev",
      "server": "172.67.73.216",
      "server_port": 443,
      "uuid": "ad063d4d-265a-48d6-95a2-48da86a0207e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.kehave6570.workers.dev",
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
          "Host": "worker3.kehave6570.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "49.TLS.worker3.kehave6570.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "ad063d4d-265a-48d6-95a2-48da86a0207e",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.kehave6570.workers.dev",
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
          "Host": "worker3.kehave6570.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "50.TLS.worker3.kexenen3585.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "57c3903f-cd29-4b07-be60-7f6effeb2c86",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.kexenen3585.workers.dev",
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
          "Host": "worker3.kexenen3585.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "51.TLS.worker3.kexenen3585.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "57c3903f-cd29-4b07-be60-7f6effeb2c86",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.kexenen3585.workers.dev",
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
          "Host": "worker3.kexenen3585.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "52.TLS.worker3.kexenen3585.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "57c3903f-cd29-4b07-be60-7f6effeb2c86",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.kexenen3585.workers.dev",
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
          "Host": "worker3.kexenen3585.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "53.TLS.worker3.kexenen3585.workers.dev",
      "server": "104.18.22.19",
      "server_port": 443,
      "uuid": "57c3903f-cd29-4b07-be60-7f6effeb2c86",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.kexenen3585.workers.dev",
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
          "Host": "worker3.kexenen3585.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "54.TLS.worker3.kexenen3585.workers.dev",
      "server": "172.67.73.216",
      "server_port": 443,
      "uuid": "57c3903f-cd29-4b07-be60-7f6effeb2c86",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.kexenen3585.workers.dev",
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
          "Host": "worker3.kexenen3585.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "55.TLS.worker3.kexenen3585.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "57c3903f-cd29-4b07-be60-7f6effeb2c86",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.kexenen3585.workers.dev",
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
          "Host": "worker3.kexenen3585.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "56.TLS.worker3.kexenen3585.workers.dev",
      "server": "104.17.148.22",
      "server_port": 443,
      "uuid": "57c3903f-cd29-4b07-be60-7f6effeb2c86",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.kexenen3585.workers.dev",
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
          "Host": "worker3.kexenen3585.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "57.TLS.worker3.pokena4337.workers.dev",
      "server": "104.17.148.22",
      "server_port": 443,
      "uuid": "73558fba-b940-4022-9e96-cbf522098aa7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.pokena4337.workers.dev",
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
          "Host": "worker3.pokena4337.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "58.TLS.worker3.pokena4337.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "73558fba-b940-4022-9e96-cbf522098aa7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.pokena4337.workers.dev",
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
          "Host": "worker3.pokena4337.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "59.TLS.worker3.pokena4337.workers.dev",
      "server": "172.67.73.216",
      "server_port": 443,
      "uuid": "73558fba-b940-4022-9e96-cbf522098aa7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.pokena4337.workers.dev",
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
          "Host": "worker3.pokena4337.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "60.TLS.worker3.pokena4337.workers.dev",
      "server": "104.18.22.19",
      "server_port": 443,
      "uuid": "73558fba-b940-4022-9e96-cbf522098aa7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.pokena4337.workers.dev",
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
          "Host": "worker3.pokena4337.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "61.TLS.worker3.pokena4337.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "73558fba-b940-4022-9e96-cbf522098aa7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.pokena4337.workers.dev",
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
          "Host": "worker3.pokena4337.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "62.TLS.worker3.pokena4337.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "73558fba-b940-4022-9e96-cbf522098aa7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.pokena4337.workers.dev",
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
          "Host": "worker3.pokena4337.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "63.TLS.worker3.pokena4337.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "73558fba-b940-4022-9e96-cbf522098aa7",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.pokena4337.workers.dev",
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
          "Host": "worker3.pokena4337.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "64.TLS.worker3.jawic89245.workers.dev",
      "server": "104.18.89.237",
      "server_port": 443,
      "uuid": "8a832b21-a445-4be8-9032-c161b3db831c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.jawic89245.workers.dev",
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
          "Host": "worker3.jawic89245.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "65.TLS.worker3.jawic89245.workers.dev",
      "server": "104.18.22.19",
      "server_port": 443,
      "uuid": "8a832b21-a445-4be8-9032-c161b3db831c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.jawic89245.workers.dev",
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
          "Host": "worker3.jawic89245.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "66.TLS.worker3.jawic89245.workers.dev",
      "server": "104.20.0.64",
      "server_port": 443,
      "uuid": "8a832b21-a445-4be8-9032-c161b3db831c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.jawic89245.workers.dev",
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
          "Host": "worker3.jawic89245.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "67.TLS.worker3.jawic89245.workers.dev",
      "server": "104.18.23.19",
      "server_port": 443,
      "uuid": "8a832b21-a445-4be8-9032-c161b3db831c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.jawic89245.workers.dev",
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
          "Host": "worker3.jawic89245.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "68.TLS.worker3.jawic89245.workers.dev",
      "server": "8.6.112.64",
      "server_port": 443,
      "uuid": "8a832b21-a445-4be8-9032-c161b3db831c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.jawic89245.workers.dev",
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
          "Host": "worker3.jawic89245.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "69.TLS.worker3.jawic89245.workers.dev",
      "server": "104.17.148.22",
      "server_port": 443,
      "uuid": "8a832b21-a445-4be8-9032-c161b3db831c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.jawic89245.workers.dev",
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
          "Host": "worker3.jawic89245.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "70.TLS.worker3.jawic89245.workers.dev",
      "server": "172.67.73.216",
      "server_port": 443,
      "uuid": "8a832b21-a445-4be8-9032-c161b3db831c",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "tls": {
        "enabled": true,
        "server_name": "worker3.jawic89245.workers.dev",
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
          "Host": "worker3.jawic89245.workers.dev"
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
      },
      {
        "clash_mode": "youtube",
        "outbound": "direct",
        "tls_record_fragment": true
      }
    ]
  }
}
