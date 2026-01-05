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
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
  "remarks": "#1 WORKER7.WS 2026-01-05"
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
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1cebc7c5-3a28-44b5-90ce-8b81dcbaf7de",
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
            "Host": "worker3.tixid15058.workers.dev"
          },
          "path": "/Y5jPTHEmx5iPgwf6?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "cb0bd785-1c87-4255-93f3-870fa6c15290",
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
            "Host": "worker3.bowixa2615.workers.dev"
          },
          "path": "/mP7xdUyIBcKneTXp?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "5118ea51-38fa-460f-aa2e-92b4b92e0105",
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
            "Host": "worker3.gogimi1942.workers.dev"
          },
          "path": "/4vqAWmW3AjRgR7TO?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "677301c6-e803-4d65-be68-dd96c0eb3bf8",
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
            "Host": "worker3.homipap3587.workers.dev"
          },
          "path": "/C7WZEkAS98ZPdKK3?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2ba0a378-e4be-4d77-9be8-9ea6d871299c",
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
            "Host": "worker3.cavow47338.workers.dev"
          },
          "path": "/w1QHvPDt9qLxTetz?ed=2560"
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
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "8427d734-2e59-4534-a1a2-6d44ef8307b0",
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
            "Host": "worker3.jiyaho8345.workers.dev"
          },
          "path": "/Z2zRGuB8UlNIcVZ3?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "b04fcca8-7135-4c5c-b5af-80afe65402cb",
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
            "Host": "worker3.xicara9148.workers.dev"
          },
          "path": "/H98xVzS51cuxvTTW?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "1d9df474-deb3-4ae0-9dd2-e5e1b3937455",
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
            "Host": "worker3.kogefed644.workers.dev"
          },
          "path": "/c1zk3QeIBWpyZ2E1?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "d3616c85-c2ef-4c98-bb4e-fe3734b27313",
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
            "Host": "worker3.laxasix948.workers.dev"
          },
          "path": "/LMRX0STbc2mBeFSL?ed=2560"
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
            "address": "5.10.214.216",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
            "address": "8.34.146.13",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
            "address": "45.130.125.167",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
            "address": "82.26.156.57",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
            "address": "104.18.189.101",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
            "address": "104.27.41.214",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
            "address": "172.67.64.126",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
            "address": "216.24.57.250",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "c636b8bd-5d1f-4c78-ab82-f3f55c843b85",
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
            "Host": "worker3.gemoxax771.workers.dev"
          },
          "path": "/SxTkZe7IlBkMwMA8?ed=2560"
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
  "remarks": "#2 WORKER7.WS 2026-01-05"
}
]
