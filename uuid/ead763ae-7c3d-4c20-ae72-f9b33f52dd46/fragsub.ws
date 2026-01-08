[
{
  "log": {
    "access": "",
    "error": "",
    "loglevel": "warning",
    "dnsLog": false
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
      {
        "address": "localhost",
        "domains": [
          "geosite:private",
          "full:cloudflare.com",
          "domain:.ir",
          "full:www.speedtest.net",
          "domain:tgju.org",
          "domain:b2n.ir"
        ],
        "skipFallback": true
      },
      {
        "address": "https://dns.google/dns-query",
        "tag": "remote-dns"
      },
      "https+local://dns.digitalsize.net/dns-query"
    ],
    "queryStrategy": "UseIP"
  },
  "fakedns": [
    {
      "ipPool": "198.18.0.0/15",
      "poolSize": 10000
    },
    {
      "ipPool": "fc00::/18",
      "poolSize": 10000
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
        "routeOnly": true,
        "destOverride": [
          "http",
          "tls",
          "fakedns"
        ]
      },
      "settings": {
        "auth": "noauth",
        "udp": true,
        "userLevel": 8
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy21_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy22_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy23_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy24_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy25_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy26_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy27_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy28_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy29_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy30_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy31_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy32_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy33_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy34_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy35_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy36_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy37_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy38_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy39_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy40_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy41_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy42_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy43_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy44_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy45_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy46_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy47_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy48_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy49_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy50_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy51_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy52_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy53_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy54_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy55_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy56_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy57_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy58_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy59_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy60_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy61_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy62_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy63_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy64_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy65_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy66_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy67_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy68_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy69_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy70_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy71_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy72_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy73_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy74_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy75_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy76_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy77_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy78_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy79_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy80_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy81_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy82_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy83_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy84_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy85_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy86_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy87_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy88_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy89_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy90_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy91_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy92_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy93_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy94_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy95_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy96_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy97_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy98_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy99_frag1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws1",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy100_frag1"
    },
    {
      "tag": "fragmentws1",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "UseIPv4v6",
        "fragment": {
          "packets": "fakehost",
          "length": "10-20",
          "interval": "10-20",
          "host1_domain": "www.speedtest.net",
          "host2_domain": "www.speedtest.net"
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
    },
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
    }
  ],
  "routing": {
    "domainStrategy": "AsIs",
    "rules": [
      {
        "inboundTag": [
          "dns-in"
        ],
        "outboundTag": "dns-out",
        "type": "field"
      },
      {
        "inboundTag": [
          "socks"
        ],
        "port": "53",
        "outboundTag": "dns-out",
        "type": "field"
      },
      {
        "balancerTag": "all",
        "inboundTag": [
          "remote-dns"
        ],
        "type": "field"
      },
      {
        "ip": [
          "10.10.34.34",
          "10.10.34.35",
          "10.10.34.36"
        ],
        "outboundTag": "block",
        "type": "field"
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
    "probeInterval": "10m",
    "probeURL": "https://www.gstatic.com/generate_204",
    "subjectSelector": [
      "prox"
    ],
    "EnableConcurrency": true
  },
  "remarks": "#1 WORKER12.WS 2026-01-08"
}
,
{
  "log": {
    "access": "",
    "error": "",
    "loglevel": "warning",
    "dnsLog": false
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
      {
        "address": "localhost",
        "domains": [
          "geosite:private",
          "full:cloudflare.com",
          "domain:.ir",
          "full:www.speedtest.net",
          "domain:tgju.org",
          "domain:b2n.ir"
        ],
        "skipFallback": true
      },
      {
        "address": "https://dns.google/dns-query",
        "tag": "remote-dns"
      },
      "https+local://dns.digitalsize.net/dns-query"
    ],
    "queryStrategy": "UseIP"
  },
  "fakedns": [
    {
      "ipPool": "198.18.0.0/15",
      "poolSize": 10000
    },
    {
      "ipPool": "fc00::/18",
      "poolSize": 10000
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
        "routeOnly": true,
        "destOverride": [
          "http",
          "tls",
          "fakedns"
        ]
      },
      "settings": {
        "auth": "noauth",
        "udp": true,
        "userLevel": 8
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy1_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy2_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy3_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy4_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy5_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy6_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy7_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy8_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy9_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "359f5569-01d5-4477-9c30-db6d1dd5fa4e",
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
            "Host": "worker3.kawad96201.workers.dev"
          },
          "path": "/Ld33S2UICajlHEPg?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy10_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy11_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy12_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy13_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy14_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy15_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy16_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy17_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy18_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy19_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c495bec8-a61e-4c27-b7be-d3fa13083a85",
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
            "Host": "worker3.sicoro1729.workers.dev"
          },
          "path": "/MLsuscJX73ZBsj24?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy20_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy21_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy22_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy23_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy24_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy25_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy26_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy27_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy28_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy29_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c0f3a00f-ea88-4acc-acbc-af5661afbb8e",
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
            "Host": "worker3.cexop17836.workers.dev"
          },
          "path": "/5aGCkpkr0CSoDLxi?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy30_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy31_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy32_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy33_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy34_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy35_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy36_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy37_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy38_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy39_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "af15d590-6827-476f-8d95-967d12d94a74",
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
            "Host": "worker3.konen31358.workers.dev"
          },
          "path": "/CPNhdPP2jTPzdz4g?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy40_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy41_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy42_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy43_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy44_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy45_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy46_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy47_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy48_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy49_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b9237527-4767-4461-acc5-bcada86057b6",
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
            "Host": "worker3.relip8952.workers.dev"
          },
          "path": "/RtWCqmKdXR3Gqd7J?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy50_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy51_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy52_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy53_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy54_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy55_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy56_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy57_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy58_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy59_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "3b9977d5-0c53-4a16-9ad8-a4fcabff2bce",
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
            "Host": "worker3.piyopaw466.workers.dev"
          },
          "path": "/PRIclgZyTOz1Iakq?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy60_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy61_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy62_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy63_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy64_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy65_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy66_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy67_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy68_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy69_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "70138630-64b9-4a6c-8de9-25092a264321",
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
            "Host": "worker3.cexewob845.workers.dev"
          },
          "path": "/XNpj839Jrn58P3mY?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy70_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy71_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy72_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy73_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy74_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy75_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy76_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy77_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy78_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy79_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "56315530-ce90-489a-be66-f5a4b54e8170",
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
            "Host": "worker3.yofobi7096.workers.dev"
          },
          "path": "/XFP5JClrib2wDp78?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy80_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy81_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy82_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy83_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy84_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy85_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy86_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy87_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy88_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy89_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4deedc51-ccb2-4c82-8f22-e1d818a05667",
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
            "Host": "worker3.riwihiv298.workers.dev"
          },
          "path": "/B4LMfnyD8Tbq2Sbc?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy90_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy91_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.96.7",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy92_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "8.6.112.58",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy93_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy94_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.146.201.251",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy95_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.24.57.5",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy96_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.223.18",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy97_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy98_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy99_frag2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "b2n.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1e7da771-1d50-4d0d-aadf-fe6a7696270c",
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
            "Host": "worker3.vanif75443.workers.dev"
          },
          "path": "/8vJKau32CRBJKEdh?ed=2560"
        },
        "sockopt": {
          "dialerProxy": "fragmentws2",
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100,
          "mark": 255,
          "tcpFastOpen": true
        }
      },
      "tag": "proxy100_frag2"
    },
    {
      "tag": "fragmentws2",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "UseIPv4v6",
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
    },
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
    }
  ],
  "routing": {
    "domainStrategy": "AsIs",
    "rules": [
      {
        "inboundTag": [
          "dns-in"
        ],
        "outboundTag": "dns-out",
        "type": "field"
      },
      {
        "inboundTag": [
          "socks"
        ],
        "port": "53",
        "outboundTag": "dns-out",
        "type": "field"
      },
      {
        "balancerTag": "all",
        "inboundTag": [
          "remote-dns"
        ],
        "type": "field"
      },
      {
        "ip": [
          "10.10.34.34",
          "10.10.34.35",
          "10.10.34.36"
        ],
        "outboundTag": "block",
        "type": "field"
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
    "probeInterval": "10m",
    "probeURL": "https://www.gstatic.com/generate_204",
    "subjectSelector": [
      "prox"
    ],
    "EnableConcurrency": true
  },
  "remarks": "#2 WORKER12.WS 2026-01-08"
}
]
