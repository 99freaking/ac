[
{
  "remarks": "#0 WORKER1.TLS 2024-12-10",
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
            "address": "tgju.org",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8ae2d190-1762-45bd-9cd4-caf2e758b13b",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "soft-scene-8b62.gigak25604.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "soft-scene-8b62.gigak25604.workers.dev",
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
            "address": "tgju.org",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "65b30da6-44ca-4069-8926-0e4c242ac5b4",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "wandering-fire-c597.toxev54609.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "wandering-fire-c597.toxev54609.workers.dev",
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "ad756b3c-97b4-43bf-91ec-224fcc79dc0e",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "raspy-sky-190f.tigowow862.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "raspy-sky-190f.tigowow862.workers.dev",
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
            "address": "tgju.org",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8a321797-79a2-4951-b8aa-4916b5d9ed04",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "dark-credit-85a1.hiyere5918.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "dark-credit-85a1.hiyere5918.workers.dev",
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "43ab8d15-1793-4ac5-8ad4-2e1e224cf3c0",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "weathered-haze-bae3.hevoy51336.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "weathered-haze-bae3.hevoy51336.workers.dev",
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
                "id": "602a701c-a3af-4821-ac3e-d7bd2ebcb712",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "noisy-cherry-1425.hemip36624.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "noisy-cherry-1425.hemip36624.workers.dev",
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
                "id": "1cdf9a4b-3a6d-4d26-a051-d6dce87e623a",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "patient-hill-7cfe.biwir20381.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "patient-hill-7cfe.biwir20381.workers.dev",
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "595d92cd-663b-4fbb-a7bc-31bfee14877e",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "bitter-bread-8a16.yoyey30778.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "bitter-bread-8a16.yoyey30778.workers.dev",
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
                "id": "259e0039-ece4-4bf0-b73d-a2b0acddd758",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "frosty-lake-2f6b.xomoh98816.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "frosty-lake-2f6b.xomoh98816.workers.dev",
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
            "address": "tgju.org",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "768a6aef-30eb-4902-abbc-9d555f6a24ea",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "lucky-lake-235c.jeyomi8162.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "lucky-lake-235c.jeyomi8162.workers.dev",
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
            "address": "104.20.9.79",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8ae2d190-1762-45bd-9cd4-caf2e758b13b",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "soft-scene-8b62.gigak25604.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "soft-scene-8b62.gigak25604.workers.dev",
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
            "address": "188.114.97.3",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "65b30da6-44ca-4069-8926-0e4c242ac5b4",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "wandering-fire-c597.toxev54609.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "wandering-fire-c597.toxev54609.workers.dev",
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
            "address": "172.67.73.174",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "ad756b3c-97b4-43bf-91ec-224fcc79dc0e",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "raspy-sky-190f.tigowow862.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "raspy-sky-190f.tigowow862.workers.dev",
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
            "address": "188.114.96.6",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8a321797-79a2-4951-b8aa-4916b5d9ed04",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "dark-credit-85a1.hiyere5918.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "dark-credit-85a1.hiyere5918.workers.dev",
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
            "address": "104.19.250.20",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "43ab8d15-1793-4ac5-8ad4-2e1e224cf3c0",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "weathered-haze-bae3.hevoy51336.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "weathered-haze-bae3.hevoy51336.workers.dev",
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
                "id": "602a701c-a3af-4821-ac3e-d7bd2ebcb712",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "noisy-cherry-1425.hemip36624.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "noisy-cherry-1425.hemip36624.workers.dev",
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
            "address": "104.16.3.57",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1cdf9a4b-3a6d-4d26-a051-d6dce87e623a",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "patient-hill-7cfe.biwir20381.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "patient-hill-7cfe.biwir20381.workers.dev",
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
                "id": "595d92cd-663b-4fbb-a7bc-31bfee14877e",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "bitter-bread-8a16.yoyey30778.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "bitter-bread-8a16.yoyey30778.workers.dev",
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
            "address": "188.114.98.182",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "259e0039-ece4-4bf0-b73d-a2b0acddd758",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "frosty-lake-2f6b.xomoh98816.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "frosty-lake-2f6b.xomoh98816.workers.dev",
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
            "address": "172.67.170.72",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "768a6aef-30eb-4902-abbc-9d555f6a24ea",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "lucky-lake-235c.jeyomi8162.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "lucky-lake-235c.jeyomi8162.workers.dev",
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
  "remarks": "#2 WORKER1.TLS 2024-12-10",
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
            "address": "tgju.org",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8ae2d190-1762-45bd-9cd4-caf2e758b13b",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "soft-scene-8b62.gigak25604.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "soft-scene-8b62.gigak25604.workers.dev",
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
            "address": "tgju.org",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "65b30da6-44ca-4069-8926-0e4c242ac5b4",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "wandering-fire-c597.toxev54609.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "wandering-fire-c597.toxev54609.workers.dev",
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "ad756b3c-97b4-43bf-91ec-224fcc79dc0e",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "raspy-sky-190f.tigowow862.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "raspy-sky-190f.tigowow862.workers.dev",
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
            "address": "tgju.org",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8a321797-79a2-4951-b8aa-4916b5d9ed04",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "dark-credit-85a1.hiyere5918.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "dark-credit-85a1.hiyere5918.workers.dev",
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "43ab8d15-1793-4ac5-8ad4-2e1e224cf3c0",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "weathered-haze-bae3.hevoy51336.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "weathered-haze-bae3.hevoy51336.workers.dev",
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
                "id": "602a701c-a3af-4821-ac3e-d7bd2ebcb712",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "noisy-cherry-1425.hemip36624.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "noisy-cherry-1425.hemip36624.workers.dev",
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
                "id": "1cdf9a4b-3a6d-4d26-a051-d6dce87e623a",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "patient-hill-7cfe.biwir20381.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "patient-hill-7cfe.biwir20381.workers.dev",
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "595d92cd-663b-4fbb-a7bc-31bfee14877e",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "bitter-bread-8a16.yoyey30778.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "bitter-bread-8a16.yoyey30778.workers.dev",
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
                "id": "259e0039-ece4-4bf0-b73d-a2b0acddd758",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "frosty-lake-2f6b.xomoh98816.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "frosty-lake-2f6b.xomoh98816.workers.dev",
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
            "address": "tgju.org",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "768a6aef-30eb-4902-abbc-9d555f6a24ea",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "lucky-lake-235c.jeyomi8162.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "lucky-lake-235c.jeyomi8162.workers.dev",
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
            "address": "104.20.9.79",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8ae2d190-1762-45bd-9cd4-caf2e758b13b",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "soft-scene-8b62.gigak25604.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "soft-scene-8b62.gigak25604.workers.dev",
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
            "address": "188.114.97.3",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "65b30da6-44ca-4069-8926-0e4c242ac5b4",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "wandering-fire-c597.toxev54609.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "wandering-fire-c597.toxev54609.workers.dev",
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
            "address": "172.67.73.174",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "ad756b3c-97b4-43bf-91ec-224fcc79dc0e",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "raspy-sky-190f.tigowow862.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "raspy-sky-190f.tigowow862.workers.dev",
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
            "address": "188.114.96.6",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8a321797-79a2-4951-b8aa-4916b5d9ed04",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "dark-credit-85a1.hiyere5918.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "dark-credit-85a1.hiyere5918.workers.dev",
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
            "address": "104.19.250.20",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "43ab8d15-1793-4ac5-8ad4-2e1e224cf3c0",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "weathered-haze-bae3.hevoy51336.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "weathered-haze-bae3.hevoy51336.workers.dev",
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
                "id": "602a701c-a3af-4821-ac3e-d7bd2ebcb712",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "noisy-cherry-1425.hemip36624.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "noisy-cherry-1425.hemip36624.workers.dev",
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
            "address": "104.16.3.57",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1cdf9a4b-3a6d-4d26-a051-d6dce87e623a",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "patient-hill-7cfe.biwir20381.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "patient-hill-7cfe.biwir20381.workers.dev",
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
                "id": "595d92cd-663b-4fbb-a7bc-31bfee14877e",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "bitter-bread-8a16.yoyey30778.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "bitter-bread-8a16.yoyey30778.workers.dev",
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
            "address": "188.114.98.182",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "259e0039-ece4-4bf0-b73d-a2b0acddd758",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "frosty-lake-2f6b.xomoh98816.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "frosty-lake-2f6b.xomoh98816.workers.dev",
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
            "address": "172.67.170.72",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "768a6aef-30eb-4902-abbc-9d555f6a24ea",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "lucky-lake-235c.jeyomi8162.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "lucky-lake-235c.jeyomi8162.workers.dev",
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
          "packets": "1-2",
          "length": "50-100",
          "interval": "10-20"
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
  "remarks": "#1 WORKER1.TLS 2024-12-10",
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
            "address": "tgju.org",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8ae2d190-1762-45bd-9cd4-caf2e758b13b",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "soft-scene-8b62.gigak25604.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "soft-scene-8b62.gigak25604.workers.dev",
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
            "address": "tgju.org",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "65b30da6-44ca-4069-8926-0e4c242ac5b4",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "wandering-fire-c597.toxev54609.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "wandering-fire-c597.toxev54609.workers.dev",
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "ad756b3c-97b4-43bf-91ec-224fcc79dc0e",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "raspy-sky-190f.tigowow862.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "raspy-sky-190f.tigowow862.workers.dev",
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
            "address": "tgju.org",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8a321797-79a2-4951-b8aa-4916b5d9ed04",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "dark-credit-85a1.hiyere5918.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "dark-credit-85a1.hiyere5918.workers.dev",
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "43ab8d15-1793-4ac5-8ad4-2e1e224cf3c0",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "weathered-haze-bae3.hevoy51336.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "weathered-haze-bae3.hevoy51336.workers.dev",
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
                "id": "602a701c-a3af-4821-ac3e-d7bd2ebcb712",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "noisy-cherry-1425.hemip36624.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "noisy-cherry-1425.hemip36624.workers.dev",
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
                "id": "1cdf9a4b-3a6d-4d26-a051-d6dce87e623a",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "patient-hill-7cfe.biwir20381.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "patient-hill-7cfe.biwir20381.workers.dev",
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
            "address": "b2n.ir",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "595d92cd-663b-4fbb-a7bc-31bfee14877e",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "bitter-bread-8a16.yoyey30778.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "bitter-bread-8a16.yoyey30778.workers.dev",
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
                "id": "259e0039-ece4-4bf0-b73d-a2b0acddd758",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "frosty-lake-2f6b.xomoh98816.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "frosty-lake-2f6b.xomoh98816.workers.dev",
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
            "address": "tgju.org",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "768a6aef-30eb-4902-abbc-9d555f6a24ea",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "lucky-lake-235c.jeyomi8162.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "lucky-lake-235c.jeyomi8162.workers.dev",
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
            "address": "104.20.9.79",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8ae2d190-1762-45bd-9cd4-caf2e758b13b",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "soft-scene-8b62.gigak25604.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "soft-scene-8b62.gigak25604.workers.dev",
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
            "address": "188.114.97.3",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "65b30da6-44ca-4069-8926-0e4c242ac5b4",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "wandering-fire-c597.toxev54609.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "wandering-fire-c597.toxev54609.workers.dev",
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
            "address": "172.67.73.174",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "ad756b3c-97b4-43bf-91ec-224fcc79dc0e",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "raspy-sky-190f.tigowow862.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "raspy-sky-190f.tigowow862.workers.dev",
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
            "address": "188.114.96.6",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8a321797-79a2-4951-b8aa-4916b5d9ed04",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "dark-credit-85a1.hiyere5918.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "dark-credit-85a1.hiyere5918.workers.dev",
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
            "address": "104.19.250.20",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "43ab8d15-1793-4ac5-8ad4-2e1e224cf3c0",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "weathered-haze-bae3.hevoy51336.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "weathered-haze-bae3.hevoy51336.workers.dev",
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
                "id": "602a701c-a3af-4821-ac3e-d7bd2ebcb712",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "noisy-cherry-1425.hemip36624.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "noisy-cherry-1425.hemip36624.workers.dev",
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
            "address": "104.16.3.57",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1cdf9a4b-3a6d-4d26-a051-d6dce87e623a",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "patient-hill-7cfe.biwir20381.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "patient-hill-7cfe.biwir20381.workers.dev",
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
                "id": "595d92cd-663b-4fbb-a7bc-31bfee14877e",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "bitter-bread-8a16.yoyey30778.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "bitter-bread-8a16.yoyey30778.workers.dev",
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
            "address": "188.114.98.182",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "259e0039-ece4-4bf0-b73d-a2b0acddd758",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "frosty-lake-2f6b.xomoh98816.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "frosty-lake-2f6b.xomoh98816.workers.dev",
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
            "address": "172.67.170.72",
            "port": 8443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "768a6aef-30eb-4902-abbc-9d555f6a24ea",
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
          "alpn": [
            "http/1.1"
          ],
          "fingerprint": "randomized",
          "serverName": "lucky-lake-235c.jeyomi8162.workers.dev",
          "show": false
        },
        "wsSettings": {
          "headers": {
            "Host": "lucky-lake-235c.jeyomi8162.workers.dev",
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
]
