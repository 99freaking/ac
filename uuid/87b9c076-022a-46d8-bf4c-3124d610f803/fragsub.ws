[
{
  "remarks": "#0 WORKER2.TLS 2024-12-26",
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
    ]
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
      "tag": "http",
      "port": 10809,
      "listen": "127.0.0.1",
      "protocol": "http",
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "03802893-1a89-4c12-96a9-d8ce9ecfe82b",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "lively-bar-81ef.hadayem854.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "lively-bar-81ef.hadayem854.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "www.zula.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "e76f192d-03ce-43b3-a9d6-29ddc2960067",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "white-term-7f02.relip84151.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "white-term-7f02.relip84151.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "tgju.org",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "fada7ec5-ba90-47c5-97c2-b4fee32661a5",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "noisy-poetry-46e4.fonep71598.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "noisy-poetry-46e4.fonep71598.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "www.speedtest.net",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "wispy-mouse-ed69.laneje8316.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "wispy-mouse-ed69.laneje8316.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "www.zula.ir",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "rough-waterfall-f681.wehapix288.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "rough-waterfall-f681.wehapix288.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "www.speedtest.net",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "ad3c11d7-96c6-4360-9b9a-3471cd65151a",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "floral-bird-58c3.bigig19251.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "floral-bird-58c3.bigig19251.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "plain-truth-4e43.seboy84354.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "plain-truth-4e43.seboy84354.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "www.speedtest.net",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "280c3406-d8ae-4bb1-8783-1bab41f1def4",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "tiny-disk-cdc5.kotetiy243.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "tiny-disk-cdc5.kotetiy243.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "b2n.ir",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "frosty-paper-4e56.paneger933.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "frosty-paper-4e56.paneger933.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "a620f13f-976c-406c-9e90-85bd6c703a69",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "old-silence-fbb4.hefil40378.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "old-silence-fbb4.hefil40378.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "104.19.250.20",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "03802893-1a89-4c12-96a9-d8ce9ecfe82b",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "lively-bar-81ef.hadayem854.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "lively-bar-81ef.hadayem854.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "104.24.3.135",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "e76f192d-03ce-43b3-a9d6-29ddc2960067",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "white-term-7f02.relip84151.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "white-term-7f02.relip84151.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "104.24.3.174",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "fada7ec5-ba90-47c5-97c2-b4fee32661a5",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "noisy-poetry-46e4.fonep71598.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "noisy-poetry-46e4.fonep71598.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "104.17.42.10",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "wispy-mouse-ed69.laneje8316.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "wispy-mouse-ed69.laneje8316.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "104.16.250.250",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "rough-waterfall-f681.wehapix288.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "rough-waterfall-f681.wehapix288.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "104.18.10.128",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "ad3c11d7-96c6-4360-9b9a-3471cd65151a",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "floral-bird-58c3.bigig19251.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "floral-bird-58c3.bigig19251.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "160.153.0.179",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "plain-truth-4e43.seboy84354.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "plain-truth-4e43.seboy84354.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "104.16.250.250",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "280c3406-d8ae-4bb1-8783-1bab41f1def4",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "tiny-disk-cdc5.kotetiy243.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "tiny-disk-cdc5.kotetiy243.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "185.148.105.52",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "frosty-paper-4e56.paneger933.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "frosty-paper-4e56.paneger933.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
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
            "address": "104.17.88.212",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "a620f13f-976c-406c-9e90-85bd6c703a69",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "old-silence-fbb4.hefil40378.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "old-silence-fbb4.hefil40378.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment0",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy20_frag0"
    },
    {
      "tag": "fragment0",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "AsIs",
        "fragment": {
          "packets": "tlshello",
          "length": "5-10",
          "interval": "0"
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
  "remarks": "#1 WORKER2.TLS 2024-12-26",
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
    ]
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
      "tag": "http",
      "port": 10809,
      "listen": "127.0.0.1",
      "protocol": "http",
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "03802893-1a89-4c12-96a9-d8ce9ecfe82b",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "lively-bar-81ef.hadayem854.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "lively-bar-81ef.hadayem854.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "www.zula.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "e76f192d-03ce-43b3-a9d6-29ddc2960067",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "white-term-7f02.relip84151.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "white-term-7f02.relip84151.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "tgju.org",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "fada7ec5-ba90-47c5-97c2-b4fee32661a5",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "noisy-poetry-46e4.fonep71598.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "noisy-poetry-46e4.fonep71598.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "www.speedtest.net",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "wispy-mouse-ed69.laneje8316.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "wispy-mouse-ed69.laneje8316.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "www.zula.ir",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "rough-waterfall-f681.wehapix288.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "rough-waterfall-f681.wehapix288.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "www.speedtest.net",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "ad3c11d7-96c6-4360-9b9a-3471cd65151a",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "floral-bird-58c3.bigig19251.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "floral-bird-58c3.bigig19251.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "plain-truth-4e43.seboy84354.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "plain-truth-4e43.seboy84354.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "www.speedtest.net",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "280c3406-d8ae-4bb1-8783-1bab41f1def4",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "tiny-disk-cdc5.kotetiy243.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "tiny-disk-cdc5.kotetiy243.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "b2n.ir",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "frosty-paper-4e56.paneger933.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "frosty-paper-4e56.paneger933.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "a620f13f-976c-406c-9e90-85bd6c703a69",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "old-silence-fbb4.hefil40378.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "old-silence-fbb4.hefil40378.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "104.19.250.20",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "03802893-1a89-4c12-96a9-d8ce9ecfe82b",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "lively-bar-81ef.hadayem854.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "lively-bar-81ef.hadayem854.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "104.24.3.135",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "e76f192d-03ce-43b3-a9d6-29ddc2960067",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "white-term-7f02.relip84151.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "white-term-7f02.relip84151.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "104.24.3.174",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "fada7ec5-ba90-47c5-97c2-b4fee32661a5",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "noisy-poetry-46e4.fonep71598.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "noisy-poetry-46e4.fonep71598.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "104.17.42.10",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "wispy-mouse-ed69.laneje8316.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "wispy-mouse-ed69.laneje8316.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "104.16.250.250",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "rough-waterfall-f681.wehapix288.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "rough-waterfall-f681.wehapix288.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "104.18.10.128",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "ad3c11d7-96c6-4360-9b9a-3471cd65151a",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "floral-bird-58c3.bigig19251.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "floral-bird-58c3.bigig19251.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "160.153.0.179",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "plain-truth-4e43.seboy84354.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "plain-truth-4e43.seboy84354.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "104.16.250.250",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "280c3406-d8ae-4bb1-8783-1bab41f1def4",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "tiny-disk-cdc5.kotetiy243.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "tiny-disk-cdc5.kotetiy243.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "185.148.105.52",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "frosty-paper-4e56.paneger933.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "frosty-paper-4e56.paneger933.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
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
            "address": "104.17.88.212",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "a620f13f-976c-406c-9e90-85bd6c703a69",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "old-silence-fbb4.hefil40378.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "old-silence-fbb4.hefil40378.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy20_frag1"
    },
    {
      "tag": "fragment1",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "AsIs",
        "fragment": {
          "packets": "1-1",
          "length": "1-3",
          "interval": "0"
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
  "remarks": "#2 WORKER2.TLS 2024-12-26",
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
    ]
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
      "tag": "http",
      "port": 10809,
      "listen": "127.0.0.1",
      "protocol": "http",
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "03802893-1a89-4c12-96a9-d8ce9ecfe82b",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "lively-bar-81ef.hadayem854.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "lively-bar-81ef.hadayem854.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy1_frag2"
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
            "address": "www.zula.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "e76f192d-03ce-43b3-a9d6-29ddc2960067",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "white-term-7f02.relip84151.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "white-term-7f02.relip84151.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy2_frag2"
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
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "fada7ec5-ba90-47c5-97c2-b4fee32661a5",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "noisy-poetry-46e4.fonep71598.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "noisy-poetry-46e4.fonep71598.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy3_frag2"
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
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "wispy-mouse-ed69.laneje8316.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "wispy-mouse-ed69.laneje8316.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy4_frag2"
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
            "address": "www.zula.ir",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "rough-waterfall-f681.wehapix288.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "rough-waterfall-f681.wehapix288.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy5_frag2"
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
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "ad3c11d7-96c6-4360-9b9a-3471cd65151a",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "floral-bird-58c3.bigig19251.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "floral-bird-58c3.bigig19251.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy6_frag2"
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
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "plain-truth-4e43.seboy84354.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "plain-truth-4e43.seboy84354.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy7_frag2"
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
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "280c3406-d8ae-4bb1-8783-1bab41f1def4",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "tiny-disk-cdc5.kotetiy243.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "tiny-disk-cdc5.kotetiy243.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy8_frag2"
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
            "address": "b2n.ir",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "frosty-paper-4e56.paneger933.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "frosty-paper-4e56.paneger933.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy9_frag2"
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "a620f13f-976c-406c-9e90-85bd6c703a69",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "old-silence-fbb4.hefil40378.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "old-silence-fbb4.hefil40378.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy10_frag2"
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
            "address": "104.19.250.20",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "03802893-1a89-4c12-96a9-d8ce9ecfe82b",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "lively-bar-81ef.hadayem854.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "lively-bar-81ef.hadayem854.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy11_frag2"
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
            "address": "104.24.3.135",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "e76f192d-03ce-43b3-a9d6-29ddc2960067",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "white-term-7f02.relip84151.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "white-term-7f02.relip84151.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy12_frag2"
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
            "address": "104.24.3.174",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "fada7ec5-ba90-47c5-97c2-b4fee32661a5",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "noisy-poetry-46e4.fonep71598.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "noisy-poetry-46e4.fonep71598.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy13_frag2"
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
            "address": "104.17.42.10",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "wispy-mouse-ed69.laneje8316.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "wispy-mouse-ed69.laneje8316.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy14_frag2"
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
            "address": "104.16.250.250",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "rough-waterfall-f681.wehapix288.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "rough-waterfall-f681.wehapix288.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy15_frag2"
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
            "address": "104.18.10.128",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "ad3c11d7-96c6-4360-9b9a-3471cd65151a",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "floral-bird-58c3.bigig19251.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "floral-bird-58c3.bigig19251.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy16_frag2"
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
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "plain-truth-4e43.seboy84354.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "plain-truth-4e43.seboy84354.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy17_frag2"
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
            "address": "104.16.250.250",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "280c3406-d8ae-4bb1-8783-1bab41f1def4",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "tiny-disk-cdc5.kotetiy243.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "tiny-disk-cdc5.kotetiy243.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy18_frag2"
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
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "frosty-paper-4e56.paneger933.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "frosty-paper-4e56.paneger933.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy19_frag2"
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
            "address": "104.17.88.212",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "a620f13f-976c-406c-9e90-85bd6c703a69",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "old-silence-fbb4.hefil40378.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "old-silence-fbb4.hefil40378.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy20_frag2"
    },
    {
      "tag": "fragment2",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "AsIs",
        "fragment": {
          "packets": "1-1",
          "length": "1-2",
          "interval": "1-5"
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
  "remarks": "#3 WORKER2.TLS 2024-12-26",
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
    ]
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
      "tag": "http",
      "port": 10809,
      "listen": "127.0.0.1",
      "protocol": "http",
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "03802893-1a89-4c12-96a9-d8ce9ecfe82b",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "lively-bar-81ef.hadayem854.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "lively-bar-81ef.hadayem854.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy1_frag3"
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
            "address": "www.zula.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "e76f192d-03ce-43b3-a9d6-29ddc2960067",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "white-term-7f02.relip84151.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "white-term-7f02.relip84151.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy2_frag3"
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
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "fada7ec5-ba90-47c5-97c2-b4fee32661a5",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "noisy-poetry-46e4.fonep71598.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "noisy-poetry-46e4.fonep71598.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy3_frag3"
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
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "wispy-mouse-ed69.laneje8316.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "wispy-mouse-ed69.laneje8316.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy4_frag3"
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
            "address": "www.zula.ir",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "rough-waterfall-f681.wehapix288.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "rough-waterfall-f681.wehapix288.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy5_frag3"
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
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "ad3c11d7-96c6-4360-9b9a-3471cd65151a",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "floral-bird-58c3.bigig19251.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "floral-bird-58c3.bigig19251.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy6_frag3"
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
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "plain-truth-4e43.seboy84354.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "plain-truth-4e43.seboy84354.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy7_frag3"
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
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "280c3406-d8ae-4bb1-8783-1bab41f1def4",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "tiny-disk-cdc5.kotetiy243.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "tiny-disk-cdc5.kotetiy243.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy8_frag3"
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
            "address": "b2n.ir",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "frosty-paper-4e56.paneger933.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "frosty-paper-4e56.paneger933.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy9_frag3"
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "a620f13f-976c-406c-9e90-85bd6c703a69",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "old-silence-fbb4.hefil40378.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "old-silence-fbb4.hefil40378.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy10_frag3"
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
            "address": "104.19.250.20",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "03802893-1a89-4c12-96a9-d8ce9ecfe82b",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "lively-bar-81ef.hadayem854.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "lively-bar-81ef.hadayem854.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy11_frag3"
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
            "address": "104.24.3.135",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "e76f192d-03ce-43b3-a9d6-29ddc2960067",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "white-term-7f02.relip84151.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "white-term-7f02.relip84151.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy12_frag3"
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
            "address": "104.24.3.174",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "fada7ec5-ba90-47c5-97c2-b4fee32661a5",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "noisy-poetry-46e4.fonep71598.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "noisy-poetry-46e4.fonep71598.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy13_frag3"
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
            "address": "104.17.42.10",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "wispy-mouse-ed69.laneje8316.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "wispy-mouse-ed69.laneje8316.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy14_frag3"
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
            "address": "104.16.250.250",
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "rough-waterfall-f681.wehapix288.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "rough-waterfall-f681.wehapix288.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy15_frag3"
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
            "address": "104.18.10.128",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "ad3c11d7-96c6-4360-9b9a-3471cd65151a",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "floral-bird-58c3.bigig19251.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "floral-bird-58c3.bigig19251.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy16_frag3"
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
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "plain-truth-4e43.seboy84354.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "plain-truth-4e43.seboy84354.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy17_frag3"
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
            "address": "104.16.250.250",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "280c3406-d8ae-4bb1-8783-1bab41f1def4",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "tiny-disk-cdc5.kotetiy243.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "tiny-disk-cdc5.kotetiy243.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy18_frag3"
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
            "port": 8443,
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
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "frosty-paper-4e56.paneger933.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "frosty-paper-4e56.paneger933.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy19_frag3"
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
            "address": "104.17.88.212",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "a620f13f-976c-406c-9e90-85bd6c703a69",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "randomized",
          "serverName": "old-silence-fbb4.hefil40378.workers.dev",
          "show": false,
          "alpn": [
            "http/1.1"
          ]
        },
        "wsSettings": {
          "headers": {
            "Host": "old-silence-fbb4.hefil40378.workers.dev",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          },
          "path": "/?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragment3",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy20_frag3"
    },
    {
      "tag": "fragment3",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "AsIs",
        "fragment": {
          "packets": "1-2",
          "length": "1-2",
          "interval": "3-6"
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
