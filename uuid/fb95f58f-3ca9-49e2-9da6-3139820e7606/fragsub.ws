[
{
  "remarks": "#0 WORKER2.WS 2025-05-22",
  "log": {
    "access": "",
    "error": "",
    "loglevel": "warning"
  },
  "dns": {
    "hosts": {
      "dns.google": [
        "8.8.8.8",
        "8.8.4.4",
        "2001:4860:4860::8888",
        "2001:4860:4860::8844"
      ]
    },
    "servers": [
      "fakedns",
      "https://dns.google/dns-query"
    ],
    "queryStrategy": "UseIP"
  },
  "fakedns": [
    {
      "ipPool": "198.20.0.0/15",
      "poolSize": 512
    },
    {
      "ipPool": "fc00::/64",
      "poolSize": 512
    }
  ],
  "inbounds": [
    {
      "tag": "socks",
      "port": 10808,
      "listen": "127.0.0.1",
      "protocol": "socks",
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls",
          "quic",
          "fakedns"
        ]
      },
      "settings": {
        "auth": "noauth",
        "udp": true,
        "allowTransparent": false
      }
    },
    {
      "listen": "127.0.0.1",
      "port": 10853,
      "protocol": "dokodemo-door",
      "settings": {
        "address": "1.1.1.1",
        "network": "tcp,udp",
        "port": 53
      },
      "tag": "dns-in"
    }
  ],
  "outbounds": [
    {
      "tag": "direct",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "UseIP"
      }
    },
    {
      "tag": "block",
      "protocol": "blackhole",
      "settings": {
        "response": {
          "type": "http"
        }
      }
    },
    {
      "protocol": "dns",
      "tag": "dns-out"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "f3228eca-df49-425b-bb3d-c594fc36fd82",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "floral-bird-58c3.bigig19251.workers.dev"
          },
          "path": "/2RTrCuQgVVOkPFsG?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy1_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.speedtest.net",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d7dbee52-9754-4dd5-b30e-897eb8d6df43",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "noisy-poetry-46e4.fonep7558.workers.dev"
          },
          "path": "/NZLpOW69BtkukpKz?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy2_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.speedtest.net",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "35ba63bc-34e0-48d6-b50d-ce5b0e792509",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "lively-bar-81ef.hadayem855.workers.dev"
          },
          "path": "/5eINY0nexJ8LwRXx?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy3_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4e9f76a4-ddec-402b-a476-b44459ad883b",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "old-silence-fbb4.hefil40378.workers.dev"
          },
          "path": "/IIavPtsujQ0tnXEh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy4_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5455864f-9e3e-444a-ae02-e2ba60d0668e",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "tiny-disk-cdc5.kotetiy243.workers.dev"
          },
          "path": "/DKKHjFv5Srd8cwTU?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy5_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "fe251909-7274-4aa2-a078-f05e59008fd7",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "wispy-mouse-ed69.laneje8316.workers.dev"
          },
          "path": "/X3V3WvaRvTL3mNfV?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy6_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.speedtest.net",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "301cec5b-7c7e-4ac8-ad70-dc010095aa68",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "frosty-paper-4e56.paneger955.workers.dev"
          },
          "path": "/Jgvk1BNbn8b4JmON?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy7_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5343dd3e-6c34-4b67-9029-3076e7dc2368",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "plain-truth-4e43.seboy84354.workers.dev"
          },
          "path": "/YCJSYq3weRt9AtZY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy8_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.speedtest.net",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4809a632-185b-4273-8fd0-2a282aae9396",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "cold-pine-1aca.dirihim757.workers.dev"
          },
          "path": "/w4Z3c99nzhN6cSY4?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy9_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.speedtest.net",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "12b2976b-3164-49a3-868f-2bdd5cabc67d",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "rough-waterfall-f681.wehapix288.workers.dev"
          },
          "path": "/3I1RFRF3FLNMLYjE?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy10_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.147.22",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "f3228eca-df49-425b-bb3d-c594fc36fd82",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "floral-bird-58c3.bigig19251.workers.dev"
          },
          "path": "/2RTrCuQgVVOkPFsG?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy11_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "162.159.133.234",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d7dbee52-9754-4dd5-b30e-897eb8d6df43",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "noisy-poetry-46e4.fonep7558.workers.dev"
          },
          "path": "/NZLpOW69BtkukpKz?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy12_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "185.148.105.52",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "35ba63bc-34e0-48d6-b50d-ce5b0e792509",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "lively-bar-81ef.hadayem855.workers.dev"
          },
          "path": "/5eINY0nexJ8LwRXx?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy13_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "160.153.0.179",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4e9f76a4-ddec-402b-a476-b44459ad883b",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "old-silence-fbb4.hefil40378.workers.dev"
          },
          "path": "/IIavPtsujQ0tnXEh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy14_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "172.67.170.72",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5455864f-9e3e-444a-ae02-e2ba60d0668e",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "tiny-disk-cdc5.kotetiy243.workers.dev"
          },
          "path": "/DKKHjFv5Srd8cwTU?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy15_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.98.158",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "fe251909-7274-4aa2-a078-f05e59008fd7",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "wispy-mouse-ed69.laneje8316.workers.dev"
          },
          "path": "/X3V3WvaRvTL3mNfV?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy16_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.98.0",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "301cec5b-7c7e-4ac8-ad70-dc010095aa68",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "frosty-paper-4e56.paneger955.workers.dev"
          },
          "path": "/Jgvk1BNbn8b4JmON?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy17_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "162.159.133.234",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5343dd3e-6c34-4b67-9029-3076e7dc2368",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "plain-truth-4e43.seboy84354.workers.dev"
          },
          "path": "/YCJSYq3weRt9AtZY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy18_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "162.159.130.234",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4809a632-185b-4273-8fd0-2a282aae9396",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "cold-pine-1aca.dirihim757.workers.dev"
          },
          "path": "/w4Z3c99nzhN6cSY4?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy19_frag0"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.3",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "12b2976b-3164-49a3-868f-2bdd5cabc67d",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "rough-waterfall-f681.wehapix288.workers.dev"
          },
          "path": "/3I1RFRF3FLNMLYjE?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy20_frag0"
    },
    {
      "tag": "fragmentws0",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "AsIs",
        "fragment": {
          "packets": "fakehost",
          "length": "10-20",
          "interval": "10-20",
          "host1_domain": "cloudflare.com",
          "host2_domain": "cloudflare.com"
        }
      },
      "streamSettings": {
        "network": "tcp",
        "security": "",
        "sockopt": {
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100
        }
      }
    }
  ],
  "routing": {
    "domainStrategy": "AsIs",
    "rules": [
      {
        "inboundTag": [
          "dns-in"
        ],
        "outboundTag": "dns-out"
      },
      {
        "domain": [
          "domain:.ir"
        ],
        "outboundTag": "direct",
        "type": "field"
      },
      {
        "ip": [
          "geoip:private"
        ],
        "outboundTag": "direct",
        "type": "field"
      },
      {
        "domain": [
          "geosite:private"
        ],
        "outboundTag": "direct",
        "type": "field"
      },
      {
        "balancerTag": "all",
        "type": "field",
        "network": "tcp,udp"
      }
    ],
    "balancers": [
      {
        "tag": "all",
        "selector": [
          "prox"
        ],
        "strategy": {
          "type": "leastPing"
        }
      }
    ]
  },
  "observatory": {
    "probeInterval": "30m",
    "probeURL": "https://www.gstatic.com/generate_204",
    "subjectSelector": [
      "prox"
    ],
    "EnableConcurrency": true
  }
}
,
{
  "remarks": "#1 WORKER2.WS 2025-05-22",
  "log": {
    "access": "",
    "error": "",
    "loglevel": "warning"
  },
  "dns": {
    "hosts": {
      "dns.google": [
        "8.8.8.8",
        "8.8.4.4",
        "2001:4860:4860::8888",
        "2001:4860:4860::8844"
      ]
    },
    "servers": [
      "fakedns",
      "https://dns.google/dns-query"
    ],
    "queryStrategy": "UseIP"
  },
  "fakedns": [
    {
      "ipPool": "198.20.0.0/15",
      "poolSize": 512
    },
    {
      "ipPool": "fc00::/64",
      "poolSize": 512
    }
  ],
  "inbounds": [
    {
      "tag": "socks",
      "port": 10808,
      "listen": "127.0.0.1",
      "protocol": "socks",
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls",
          "quic",
          "fakedns"
        ]
      },
      "settings": {
        "auth": "noauth",
        "udp": true,
        "allowTransparent": false
      }
    },
    {
      "listen": "127.0.0.1",
      "port": 10853,
      "protocol": "dokodemo-door",
      "settings": {
        "address": "1.1.1.1",
        "network": "tcp,udp",
        "port": 53
      },
      "tag": "dns-in"
    }
  ],
  "outbounds": [
    {
      "tag": "direct",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "UseIP"
      }
    },
    {
      "tag": "block",
      "protocol": "blackhole",
      "settings": {
        "response": {
          "type": "http"
        }
      }
    },
    {
      "protocol": "dns",
      "tag": "dns-out"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "f3228eca-df49-425b-bb3d-c594fc36fd82",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "floral-bird-58c3.bigig19251.workers.dev"
          },
          "path": "/2RTrCuQgVVOkPFsG?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy1_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.speedtest.net",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d7dbee52-9754-4dd5-b30e-897eb8d6df43",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "noisy-poetry-46e4.fonep7558.workers.dev"
          },
          "path": "/NZLpOW69BtkukpKz?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy2_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.speedtest.net",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "35ba63bc-34e0-48d6-b50d-ce5b0e792509",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "lively-bar-81ef.hadayem855.workers.dev"
          },
          "path": "/5eINY0nexJ8LwRXx?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy3_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4e9f76a4-ddec-402b-a476-b44459ad883b",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "old-silence-fbb4.hefil40378.workers.dev"
          },
          "path": "/IIavPtsujQ0tnXEh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy4_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5455864f-9e3e-444a-ae02-e2ba60d0668e",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "tiny-disk-cdc5.kotetiy243.workers.dev"
          },
          "path": "/DKKHjFv5Srd8cwTU?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy5_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "fe251909-7274-4aa2-a078-f05e59008fd7",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "wispy-mouse-ed69.laneje8316.workers.dev"
          },
          "path": "/X3V3WvaRvTL3mNfV?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy6_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.speedtest.net",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "301cec5b-7c7e-4ac8-ad70-dc010095aa68",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "frosty-paper-4e56.paneger955.workers.dev"
          },
          "path": "/Jgvk1BNbn8b4JmON?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy7_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5343dd3e-6c34-4b67-9029-3076e7dc2368",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "plain-truth-4e43.seboy84354.workers.dev"
          },
          "path": "/YCJSYq3weRt9AtZY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy8_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.speedtest.net",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4809a632-185b-4273-8fd0-2a282aae9396",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "cold-pine-1aca.dirihim757.workers.dev"
          },
          "path": "/w4Z3c99nzhN6cSY4?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy9_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.speedtest.net",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "12b2976b-3164-49a3-868f-2bdd5cabc67d",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "rough-waterfall-f681.wehapix288.workers.dev"
          },
          "path": "/3I1RFRF3FLNMLYjE?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy10_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.147.22",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "f3228eca-df49-425b-bb3d-c594fc36fd82",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "floral-bird-58c3.bigig19251.workers.dev"
          },
          "path": "/2RTrCuQgVVOkPFsG?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy11_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "162.159.133.234",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d7dbee52-9754-4dd5-b30e-897eb8d6df43",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "noisy-poetry-46e4.fonep7558.workers.dev"
          },
          "path": "/NZLpOW69BtkukpKz?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy12_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "185.148.105.52",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "35ba63bc-34e0-48d6-b50d-ce5b0e792509",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "lively-bar-81ef.hadayem855.workers.dev"
          },
          "path": "/5eINY0nexJ8LwRXx?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy13_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "160.153.0.179",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4e9f76a4-ddec-402b-a476-b44459ad883b",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "old-silence-fbb4.hefil40378.workers.dev"
          },
          "path": "/IIavPtsujQ0tnXEh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy14_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "172.67.170.72",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5455864f-9e3e-444a-ae02-e2ba60d0668e",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "tiny-disk-cdc5.kotetiy243.workers.dev"
          },
          "path": "/DKKHjFv5Srd8cwTU?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy15_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.98.158",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "fe251909-7274-4aa2-a078-f05e59008fd7",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "wispy-mouse-ed69.laneje8316.workers.dev"
          },
          "path": "/X3V3WvaRvTL3mNfV?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy16_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.98.0",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "301cec5b-7c7e-4ac8-ad70-dc010095aa68",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "frosty-paper-4e56.paneger955.workers.dev"
          },
          "path": "/Jgvk1BNbn8b4JmON?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy17_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "162.159.133.234",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5343dd3e-6c34-4b67-9029-3076e7dc2368",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "plain-truth-4e43.seboy84354.workers.dev"
          },
          "path": "/YCJSYq3weRt9AtZY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy18_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "162.159.130.234",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4809a632-185b-4273-8fd0-2a282aae9396",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "cold-pine-1aca.dirihim757.workers.dev"
          },
          "path": "/w4Z3c99nzhN6cSY4?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy19_frag1"
    },
    {
      "mux": {
        "concurrency": -1,
        "enabled": false,
        "xudpConcurrency": 8,
        "xudpProxyUDP443": ""
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.3",
            "port": 8880,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "12b2976b-3164-49a3-868f-2bdd5cabc67d",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "rough-waterfall-f681.wehapix288.workers.dev"
          },
          "path": "/3I1RFRF3FLNMLYjE?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy20_frag1"
    },
    {
      "tag": "fragmentws1",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "AsIs",
        "fragment": {
          "packets": "fakehost",
          "length": "10-20",
          "interval": "10-20",
          "host1_domain": "b2n.ir",
          "host2_domain": "b2n.ir"
        }
      },
      "streamSettings": {
        "network": "tcp",
        "security": "",
        "sockopt": {
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100
        }
      }
    }
  ],
  "routing": {
    "domainStrategy": "AsIs",
    "rules": [
      {
        "inboundTag": [
          "dns-in"
        ],
        "outboundTag": "dns-out"
      },
      {
        "domain": [
          "domain:.ir"
        ],
        "outboundTag": "direct",
        "type": "field"
      },
      {
        "ip": [
          "geoip:private"
        ],
        "outboundTag": "direct",
        "type": "field"
      },
      {
        "domain": [
          "geosite:private"
        ],
        "outboundTag": "direct",
        "type": "field"
      },
      {
        "balancerTag": "all",
        "type": "field",
        "network": "tcp,udp"
      }
    ],
    "balancers": [
      {
        "tag": "all",
        "selector": [
          "prox"
        ],
        "strategy": {
          "type": "leastPing"
        }
      }
    ]
  },
  "observatory": {
    "probeInterval": "30m",
    "probeURL": "https://www.gstatic.com/generate_204",
    "subjectSelector": [
      "prox"
    ],
    "EnableConcurrency": true
  }
}
]
