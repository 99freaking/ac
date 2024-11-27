[
    {
        "remarks": "1403/9/7 [31days] FRAG WS 0",
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
                "tag": "fragment",
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
            },
            {
                "tag": "proxy",
                "protocol": "vless",
                "settings": {
                    "vnext": [
                        {
                            "address": "b2n.ir",
                            "port": 8880,
                            "users": [
                                {
                                    "id": "d5d46597-7b9d-4a63-9d2a-a82e894e86a1",
                                    "alterId": 0,
                                    "email": "t@t.tt",
                                    "security": "auto",
                                    "encryption": "none",
                                    "flow": ""
                                }
                            ]
                        }
                    ]
                },
                "streamSettings": {
                    "network": "ws",
                    "security": "none",
                    "wsSettings": {
                        "path": "/?ed=2560",
                        "headers": {
                            "Host": "aNCieNt-SNow-703D.yEsanAC192.wOrKErS.dEv",
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
                        }
                    },
                    "sockopt": {
                        "dialerProxy": "fragment",
                        "tcpNoDelay": true,
                        "tcpKeepAliveIdle": 100,
                        "mark": 255,
                        "tcpFastOpen": true
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
                    "type": "field",
                    "port": "0-65535",
                    "outboundTag": "proxy",
                    "enabled": true
                }
            ]
        }
    },
    {
        "remarks": "1403/9/7 [31days] FRAG WS 1",
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
                "tag": "fragment",
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
            },
            {
                "tag": "proxy",
                "protocol": "vless",
                "settings": {
                    "vnext": [
                        {
                            "address": "b2n.ir",
                            "port": 8880,
                            "users": [
                                {
                                    "id": "d5d46597-7b9d-4a63-9d2a-a82e894e86a1",
                                    "alterId": 0,
                                    "email": "t@t.tt",
                                    "security": "auto",
                                    "encryption": "none",
                                    "flow": ""
                                }
                            ]
                        }
                    ]
                },
                "streamSettings": {
                    "network": "ws",
                    "security": "none",
                    "wsSettings": {
                        "path": "/?ed=2560",
                        "headers": {
                            "Host": "aNCIENT-snOW-703d.yESaNaC192.wORKeRS.deV",
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
                        }
                    },
                    "sockopt": {
                        "dialerProxy": "fragment",
                        "tcpNoDelay": true,
                        "tcpKeepAliveIdle": 100,
                        "mark": 255,
                        "tcpFastOpen": true
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
                    "type": "field",
                    "port": "0-65535",
                    "outboundTag": "proxy",
                    "enabled": true
                }
            ]
        }
    }
]