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
      ],
      "dns.digitalsize.net": [
        "94.130.135.203",
        "2a01:4f8:13b:3407::face"
      ]
    },
    "servers": [
      "fakedns",
      {
        "address": "localhost",
        "domains": [
          "geosite:private",
          "full:cloudflare.com",
          "regexp:\\.ir$",
          "domain:mkh.v2plus.ovh",
          "domain:freeiran.lookanet.app",
          "domain:mci.v2plus.ovh",
          "domain:mpc.mobayandeh.top",
          "domain:mtn.v2plus.ovh",
          "domain:ip.ali.lat"
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
            "address": "mci.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4ee7a384-4312-4dcb-8043-2ae51a15252d",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.wateci1156.workers.dev"
          },
          "path": "/yEehdR6POSWwzRXP?ed=2560"
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
            "address": "mtn.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4ee7a384-4312-4dcb-8043-2ae51a15252d",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.wateci1156.workers.dev"
          },
          "path": "/yEehdR6POSWwzRXP?ed=2560"
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
            "address": "mci.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "381806c4-d486-4769-a7be-ff778f4db511",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker2.yobagov334.workers.dev"
          },
          "path": "/nb2jqbKK80VXh0XH?ed=2560"
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
            "address": "mtn.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "381806c4-d486-4769-a7be-ff778f4db511",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker2.yobagov334.workers.dev"
          },
          "path": "/nb2jqbKK80VXh0XH?ed=2560"
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
            "address": "mci.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "a41322e9-d0f1-4ff1-ac5c-a486e2b680b2",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.yahoya44555.workers.dev"
          },
          "path": "/2EP6G0LoOvs5eNZj?ed=2560"
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
            "address": "mtn.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "a41322e9-d0f1-4ff1-ac5c-a486e2b680b2",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.yahoya44555.workers.dev"
          },
          "path": "/2EP6G0LoOvs5eNZj?ed=2560"
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
            "address": "mci.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "9b6923a6-2f2c-4cc7-a753-4272d94c7875",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.ditib3776666.workers.dev"
          },
          "path": "/M1kt3L6OgXnYDodt?ed=2560"
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
            "address": "mtn.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "9b6923a6-2f2c-4cc7-a753-4272d94c7875",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.ditib3776666.workers.dev"
          },
          "path": "/M1kt3L6OgXnYDodt?ed=2560"
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
            "address": "mci.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "492465ab-3855-46f2-bac3-a2cd19074a87",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.gahekif304.workers.dev"
          },
          "path": "/NWpadfduJl5DcIDB?ed=2560"
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
            "address": "mtn.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "492465ab-3855-46f2-bac3-a2cd19074a87",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.gahekif304.workers.dev"
          },
          "path": "/NWpadfduJl5DcIDB?ed=2560"
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
            "address": "mci.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "24726f9a-d343-419f-a5ba-44794edc20b0",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.tefos24410.workers.dev"
          },
          "path": "/FCsi9nAieZePh1U8?ed=2560"
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
            "address": "mtn.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "24726f9a-d343-419f-a5ba-44794edc20b0",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.tefos24410.workers.dev"
          },
          "path": "/FCsi9nAieZePh1U8?ed=2560"
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
            "address": "mci.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "42ffe0e8-b244-4c75-b731-317add500a79",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.xoxid22463.workers.dev"
          },
          "path": "/1uLSEhhDrT8sOAM7?ed=2560"
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
            "address": "mtn.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "42ffe0e8-b244-4c75-b731-317add500a79",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.xoxid22463.workers.dev"
          },
          "path": "/1uLSEhhDrT8sOAM7?ed=2560"
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
            "address": "mci.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2cf79e40-74fe-4de9-ae0e-e496620a09a6",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.fexepit851.workers.dev"
          },
          "path": "/BMnajv3ovlpn8Abs?ed=2560"
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
            "address": "mtn.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "2cf79e40-74fe-4de9-ae0e-e496620a09a6",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.fexepit851.workers.dev"
          },
          "path": "/BMnajv3ovlpn8Abs?ed=2560"
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
            "address": "mci.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4cafebe8-8242-4238-bfea-0f26bd05accc",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.hevebam556.workers.dev"
          },
          "path": "/9l0cLBbNxDqTOtNd?ed=2560"
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
            "address": "mtn.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "4cafebe8-8242-4238-bfea-0f26bd05accc",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.hevebam556.workers.dev"
          },
          "path": "/9l0cLBbNxDqTOtNd?ed=2560"
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
            "address": "mci.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "40d36acd-5743-4b96-b8f6-b195e35e7336",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.tacemor185.workers.dev"
          },
          "path": "/187o1HyKayf2hitk?ed=2560"
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
            "address": "mtn.typhonemobile.ir",
            "port": 80,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "40d36acd-5743-4b96-b8f6-b195e35e7336",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "",
        "wsSettings": {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "Host": "worker3.tacemor185.workers.dev"
          },
          "path": "/187o1HyKayf2hitk?ed=2560"
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
        "domainStrategy": "UseIPv4v6",
        "fragment": {
          "packets": "fakehost",
          "length": "10-20",
          "interval": "10-20",
          "host1_domain": "chatgpt.com",
          "host2_domain": "chatgpt.com"
        }
      },
      "streamSettings": {
        "network": "tcp",
        "security": "",
        "sockopt": {
          "tcpNoDelay": true,
          "tcpFastOpen": true,
          "tcpKeepAliveIdle": 30,
          "tcpKeepAliveInterval": 30
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
          "regexp:\\.ir$"
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
  "remarks": "#1 WORKER4.WS 2026-02-17"
}
]
